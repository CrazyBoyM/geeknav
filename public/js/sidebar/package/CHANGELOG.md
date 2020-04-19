# v1.4.2 - 2019-1-2

 - [Microsite](https://sidecar.gitter.im/): Update example links from GitHub to GitLab
    - Thanks to [@avelino](https://gitlab.com/avelino) for the contribution, https://gitlab.com/gitlab-org/gitter/sidecar/merge_requests/74


# v1.4.0 - 2018-9-4

 - Use `rel="noopener"` on external links to isolate Gitter from referrers JavaScript
    - Thanks to [@wmhilton](https://gitlab.com/wmhilton) for the contribution, https://gitlab.com/gitlab-org/gitter/sidecar/merge_requests/72
 - Migrate project over to GitLab


# v1.3.3 - 2018-2-12

 - Only shim `Array.from` when it isn't available natively


# v1.3.2 - 2016-11-9

 - Disable Selenium tests because we don't have a BrowserStack subscription anymore
 - Update Node.js engine to `4.8.6` in CircleCI config


# v1.3.1 - 2016-11-9

 - Update Node.js engine to `4.8.6` in package.json


# v1.3.0 - 2016-11-9

 - Slight readme fixes
 - Ignore SauceLabs log file


# v1.2.4 - 2016-6-6

 - Remove `libraryTarget: 'umd'` from webpack config


# v1.2.3 - 2016-2-9

 - Fix action bar items on IE11. IE11 doesn't support adding multiple class names at once `element.classList.add('foo', 'bar')` so we separated out the calls
 - Fixed shim usage from breaking change in [`array.from`](https://github.com/mathiasbynens/Array.from) that now uses es-shim API


# v1.2.2 - 2016-2-8

 - Update dependencies
 - Add package to npm [`gitter-sidecar`](https://www.npmjs.com/gitter-sidecar)
    - Add build for module/package version of Sidecar `npm run build-module`
 - Use root element fallback in case there isn't a `<body>` element


# v1.1.3 - 2015-11-5

 - Remove `border-left` when the target element is 100% width at mobile sized breakpoint.


# v1.1.2 - 2015-10-28

 - Add `Array.from` polyfill to support the output from babel with comprehensions. See [`gitterHQ/sidecar#28`](https://github.com/gitterHQ/sidecar/issues/28)
 - Update microsite docs


# v1.1.1 - 2015-10-22

 - Fix `options.targetElement` and `options.activationElement` to be able to accept a selector string. What this really means is that we fixed the underlying Fix `domUtility -> $` to return actual array(vs NodeList or HTMLCollection) when a selector string is passed in.


# v1.1.0 - 2015-10-19

 - Add `options` getter to public API
 - Add `custom-class-on-target` demo to address [#25](https://github.com/gitterHQ/sidecar/issues/25)
 - Action bar(`.gitter-chat-embed-action-bar`) is now in place when `gitter-sidecar-instance-started` and `gitter-chat-started` events are fired.
 - Update popout action bar item to standard `<a>` link
 - Add `examples/room-title-on-target` and `examples/custom-class-on-target`


# v1.0.1 - 2015-10-16

 - Update microsite copy snippet block script version to reference `package.json` so it is always up to date
 - Add Gitter badge to readme


# v1.0.0 - 2015-10-16

 - First production release


# v0.3.2 - 2015-10-16

 - Update `options.activationElement` so you can pass `true` and it will automatically create an element. This is to round off the API because we added `false` to disable the activation element.


# v0.3.1 - 2015-10-15

 - You can now pass `false` or `null` into `options.activationElement` to disable it
 - Add acceptable value types to options in `API.md`
 - Remove SVG sprite embed. Now using [`postcss-write-svg`](https://github.com/jonathantneal/postcss-write-svg) to write `background-image` SVG declarations right inside the CSS
 - Update unit tests. Now using Tape and [`selenium-webdriver`](https://www.npmjs.com/package/selenium-webdriver) instead of [`browserstack-webdriver`](https://www.npmjs.com/package/browserstack-webdriver). Cleaned up and separated out environments from tests itself.
 - Fixes for IE
    - Shim Symbol
    - Shim custom event constructors `new CustomEvent`
    - Shim `toggleClass` for second parameter(`force`) support: `element.classList.toggle('is-awesome', true || false)`


# v0.2.17 - 2015-10-2

 - Update unit tests
 - Reduce action white occlusion gradient background


# v0.2.16 - 2015-10-2

 - [Disabled tests temporarily](https://github.com/gitterHQ/sidecar/commit/287f648348e1d31caca0dbc6246523feb8307982)
 - Update action bar item hover/focus styles
 - Add `options.host` so you can provide any Gitter instance(`https://beta.gitter.im/` or `https://gitter.im/`)


# v0.2.14 - 2015-10-1

 - Update open chat button hover/focus styles
 - Change microsite room to [`gitterHQ/sidecar-demo`](https://gitter.im/gitterHQ/sidecar-demo)
 - Adjust action bar item vertical alignment (update icon viewbox bounds)


# v0.2.12 - 2015-9-30

 - Moved away from array-like `ElementStore`
 - Ensured `destroy` method works and cleaned up `examples/create-destroy-chat/`
 - Add comment header specifying the version


# v0.2.11 - 2015-9-28

 - Microsite visual tweaks and updates


# v0.2.9 - 2015-9-20

 - Add `microsite/` to showcase Sidecar and some getting started goodness
 - Change `options.container` to `options.targetElement`
 - Change `optionts.activation` to `options.activationElement`


# v0.2.5 - 2015-9-2

 - Listen to `.js-gitter-toggle-chat-button` elements for "activiation"(click) which can toggle the chat panel. You can also set `data-gitter-toggle-chat-state` to an explicit value of `true` or `false` to make a open and close button respectively. By default the value is `'toggle'`.
 - Add `dom-utility.js -> off` to remove event handlers


# v0.2.4 - 2015-9-1

 - Emit `gitter-sidecar-ready` event on `document` when the script has loaded: `document.addEventListener('gitter-sidecar-ready', function(e) { var Chat = e.detail.Chat; var chat = new Chat(/*opts*/); });`
 - Emit `gitter-sidecar-instance-started` event on `document` after a Sidecar chat instance is initialized: `document.addEventListener('gitter-sidecar-instance-started', function(e) { var chat = e.detail.chat; chat.toggleChat(true); });`
 - Emit `gitter-chat-started` event on container after a Sidecar chat instance is initialized: `document.querySelector('.gitter-chat-embed').addEventListener('gitter-chat-started', function(e) { var chat = e.detail.chat; chat.toggleChat(true); });`
 - Use [`es6-promise`](https://www.npmjs.com/package/es6-promise) instead of [`bluebird`](https://github.com/petkaantonov/bluebird) for the sake of file size
 - Stop using `bling.js` for DOM manipulation. Now using `dom-utility.js` which is fully encapsulated from the `window` world.
 - Now using `window.gitter` instead of `window.___gitter`


# v0.2.3 - 2015-8-31

 - `options.preload` defaults to `false`. Instead, we load the iframe after the "Open Chat" button is clicked and the aside is slid into place. This is to avoid the unnecessary strain to the Gitter servers for people who never click the open chat button, etc.
 - Add `.is-loading` state for when the iframe hasn't embedded yet but we are working on it. We don't add the iframe exactly on click because that causes jank in the slide in animation.


# v0.2.2 - 2015-8-27

 - `options.room` defaults to `undefined` and will throw an error if no room is specified
 - Using a custom PostCSS plugin and [`postcss-plugin-context`](https://github.com/postcss/postcss-plugin-context) to add `box-sizing: border-box;` to each rule: `@context border-box { /* ... */ }`
 - Use `<a>` element as the default generated activation element so that if the JS fails to execute, we still have it link through to the actual room.


# v0.2.1 - 2015-8-20

 - Update basic example(cosmetic)
 - Add `popout` action button that opens the room in a new tab.
 - Update snippets for setting options on the `window` object so it properly deep sets properties
 - Proper immutable default options property


# v0.2.0 - 2015-8-16

 - Now using `window.___gitter.chat.options` instead of `window.___gitterEmbedConfig`
 - Add `window.___gitter.chat.options.disableDefaultChat` to stop the default chat from just loading on the page when including the Sidecar script
 - Add `gitter.Chat.destroy` to clean up any elements created by the embed
 - Add `gitter.Chat.toggleChat` to toggle visibility between chat window and activation element
 - Add `options.preload` for whether the chat iframe should be loaded on page load
 - Change `options.activationElement` to `options.activation` which can be a dom element, promise, or a promise that resolves to a dom element.
 - Emit `gitter-chat-toggle` event on chat panel container element
 - Using symbols to make internal state and methods "private"

# v0.1.1 - 2015-8-11

 - Document options in Readme
    - Add `options.container`
    - Add `options.useStyles`
 - Add keyboard support
 - Add `/examples/` showing off different setups


# v0.1.0 - 2015-8-5

 - Initial release
