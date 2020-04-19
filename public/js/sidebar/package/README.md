[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/gitterHQ/sidecar?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) [![Sidecar on npm](https://img.shields.io/npm/v/gitter-sidecar.svg)](https://www.npmjs.com/gitter-sidecar)

# Sidecar

Gitter embed widget, [sidecar.gitter.im](https://sidecar.gitter.im/)

### [Changelog](https://github.com/gitterHQ/sidecar/blob/master/CHANGELOG.md)


# Usage

```html
<script>
    ((window.gitter = {}).chat = {}).options = {
        room: 'gitterHQ/sidecar-demo'
    };
</script>
<script src="sidecar.js"></script>
```

## Module Usage

There is also a standalone package available on npm [`gitter-sidecar`](https://www.npmjs.com/gitter-sidecar) that doesn't pollute the global scope.

```js
var Sidecar = require('gitter-sidecar');

var myChat = new Sidecar({
  room: 'gitterHQ/sidecar-demo'
});
```

# [API](https://github.com/gitterHQ/sidecar/blob/master/API.md)



# Build

 - Build the Sidecar library: `npm run build`, output: `./dist/sidecar.js`
 - Build Sidecar module/package: `npm run build-module`, output: `./dist/sidecar-module.js`

### Dev

Same as `devbuild` but also watches the directory and rebuilds on any file changes

`npm run devbuild`


# Build Microsite

`npm run build-microsite`

### Dev

This is currently a work in progress. But I hope to have `react-hot-loader` and `webpack-dev-server` working for this:

`npm run devbuild-microsite`


# Deploy: Push Release

We have CircleCI setup, the config is in `circle.yml`.

To push a new version of the sidecar script, run the following:

 - `npm version patch`: bump version and tag it
 - `git push --tags`: Trigger CircleCI build

To push a new release of microsite, just push to the `master` branch


## Manual Deployment

You'll need AWS credentials exported as `AWS_KEY` and `AWS_SECRET`. This command is not meant to be run locally, only by the CircleCI deployment step (on every tag).

`npm run deploy`



# Testing

`npm test`

# Contributing

We use [git-flow](https://danielkummer.github.io/git-flow-cheatsheet/). Merge requests should be made against `develop` not `master`.

Please join us in [gitterHQ/contributing](https://gitter.im/gitterHQ/contributing) for questions or to get in touch.
