import gulp from 'gulp';
import through from 'through2';
import gutil from 'gulp-util';

import runSequence from 'run-sequence';
import plumber from 'gulp-plumber';
import del from 'del';
import Promise from 'bluebird';
import { argv } from 'yargs';

import path from 'path';

import cache from 'gulp-cached';
import webpack from 'webpack';
import gzip from 'gulp-gzip';
import S3 from 's3';
import manifest from './package.json';

import postcss from 'gulp-postcss';

//import sidecarWebpackConfig from './webpack.config';
import micrositeWebpackConfig from './microsite/webpack.config';
import micrositeProductionWebpackConfig from './microsite/webpack.production.config';

import generateRenderResponse from './microsite/server/generate-render-response';

let micrositeBasePath = './microsite/';
let config = {
  paths: {
    micrositeTemplates: {
      dist: path.join(micrositeBasePath, 'dist/'),
      watch: {
        tasks: 'build-microsite-templates',
        globs: [
          // We use the api doc in the documentation section
          path.join('./API.md'),
          // We can't do this unless we invalidate the require cache for `./microsite/server/generate-render-response`
          //path.join(micrositeBasePath, 'server/**/*'),
        ]
      }
    },
    micrositeCss: {
      src: path.join(micrositeBasePath, 'src/css/all.css'),
      dist: path.join(micrositeBasePath, 'dist/css'),
      watch: {
        tasks: 'build-microsite-styles',
        globs: path.join(micrositeBasePath, 'src/css/**/*')
      }
    },
    micrositeScripts: {
      watch: {
        tasks: 'build-microsite-scripts',
        globs: path.join(micrositeBasePath, 'src/js/**/*')
      }
    },
    micrositeImages: {
      src: path.join(micrositeBasePath, 'src/images/**/*'),
      dist: path.join(micrositeBasePath, 'dist/images/'),
      watch: {
        tasks: 'move-microsite-images',
        globs: path.join(micrositeBasePath, 'src/images/**/*')
      }
    }
  }
};




gulp.task('compress_assets', function() {
  return gulp.src(['dist/**/*.{css,js,ttf,svg}'], { base: 'dist/' })
    .pipe(gzip({ append: true, gzipOptions: { level: 9 } }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('upload_sidecar_to_s3', ['compress_assets'], function(done) {
  let major = manifest.version.split('.')[0];

  let params = {
    localFile: './dist/sidecar.js.gz',
    s3Params: {
      Bucket: 'sidecar.gitter.im',
      Key: 'dist/sidecar.v' + major + '.js',
      CacheControl: 'public, max-age=0, no-cache',
      ContentType: 'application/javascript',
      ContentEncoding: 'gzip',
      ACL: 'public-read'
    }
  };

  let S3Client = S3.createClient({
    s3Options: {
      accessKeyId: process.env.AWS_KEY,
      secretAccessKey: process.env.AWS_SECRET
    }
  });

  let uploader = S3Client.uploadFile(params);

  uploader.on('error', function (err) {
    gutil.log(err.stack);
    done(err);
  });

  uploader.on('end', function(/*metadata*/) {
    done();
  });
});

gulp.task('upload_microsite_to_s3', ['build-microsite'], function(done) {
  let params = {
    localDir: './microsite/dist',
    s3Params: {
      Bucket: 'sidecar.gitter.im',
      Prefix: '',
      CacheControl: 'public, max-age=0, no-cache',
      ACL: 'public-read'
    }
  };

  let S3Client = S3.createClient({
    s3Options: {
      accessKeyId: process.env.AWS_KEY,
      secretAccessKey: process.env.AWS_SECRET
    }
  });

  let uploader = S3Client.uploadDir(params);

  uploader.on('error', function (err) {
    gutil.log(err.stack);
    done(err);
  });

  uploader.on('end', function(/*metadata*/) {
    done();
  });
});





let plumberErrorHandler = function(err) {
  console.log('Plumber caught error:');
  console.log(err.msg, err.stack);
  this.emit('end');
};

// Clears the distribution folder before running the other tasks
gulp.task('microsite-build-clean', function() {
  return del([path.join(micrositeBasePath, 'dist')]);
});

// Move the templates into dist
gulp.task('build-microsite-templates', function() {
  let generateTemplate = function() {

    let stream = through.obj(function(chunk, enc, callback) {
      this.push(chunk);
      return callback();
    });

    generateRenderResponse().then((page) => {
      let file = new gutil.File({
        cwd: '',
        base: '',
        path: 'index.html',
        contents: new Buffer(page)
      });

      stream.write(file);

      stream.end();
    });



    return stream;
  };

  return generateTemplate()
    .pipe(gulp.dest(config.paths.micrositeTemplates.dist));
});

// Move the images into dist
gulp.task('move-microsite-images', function() {
  return gulp.src(config.paths.micrositeImages.src)
    .pipe(cache('microsite-images'))
    .pipe(gulp.dest(config.paths.micrositeImages.dist));
});

gulp.task('build-microsite-styles', function() {
  return gulp.src(config.paths.micrositeCss.src)
    .pipe(plumber({
      errorHandler: plumberErrorHandler
    }))
    .pipe(postcss())
    .pipe(gulp.dest(config.paths.micrositeCss.dist));
});

gulp.task('build-microsite-scripts', function() {
  //let compiler = webpack(micrositeWebpackConfig);
  //let watch = Promise.promisify(compiler.watch);

  return Promise.promisify(webpack)(argv.dev ? micrositeWebpackConfig : micrositeProductionWebpackConfig)
    .then(function(stats) {
      /* * /
      gutil.log('[webpack]', stats.toString({
        colors: true
      }));
      /* */
    })
    .catch(function(err) {
      if(err) {
        throw new gutil.PluginError('webpack', err);
      }
    });
});



gulp.task('move-sidecar-dist-to-fixtures', function() {
  return gulp.src('dist/sidecar.js')
    .pipe(gulp.dest('test/fixtures/'));
});



// Rerun tasks when a file changes
gulp.task('watch', function() {
  Object.keys(config.paths).forEach(function(key) {
    let entry = config.paths[key];

    let watchConfig = entry.watch;
    if(watchConfig) {
      gulp.watch(watchConfig.globs, [].concat(watchConfig.tasks));
    }
  });
});





gulp.task('build-microsite', function(callback) {
  runSequence(
    ['microsite-build-clean'],
    ['build-microsite-templates', 'build-microsite-styles', 'build-microsite-scripts', 'move-microsite-images'],
    callback
  );
});

gulp.task('deploy-sidecar', ['upload_sidecar_to_s3']);
gulp.task('deploy-microsite', ['upload_microsite_to_s3']);


// Default Task
gulp.task('default', function(callback) {
  runSequence(
    ['build-microsite'],
    ['watch'],
    callback
  );
});
