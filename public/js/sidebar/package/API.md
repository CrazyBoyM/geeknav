
## Overview

Primarily sidecar has an activation element that will show sidecar and a target element where sidecar gets loaded. These elements are specified by default but can be customised (see below).

## UI Customisation

If you need a custom button or want to insert the chat in your own element, use the following setup:

 - Activation element: The "Open Chat" button
 - Target element: The wrapper element that the chat is embedded into

```html
<script>
  ((window.gitter = {}).chat = {}).options = {
    room: 'gitterHQ/sidecar',
    activationElement: '.my-special-button',
    targetElement: '.my-special-target-element'
  };
</script>
```


### Toggle Buttons

You can define toggle/open/close buttons in your page using the `.js-gitter-toggle-chat-button` class and an optional `data-gitter-toggle-chat-state` attribute. If you do not provide a `data-gitter-toggle-chat-state`, it will default to `'toggle'`. See the `examples/toggle-chat-class-buttons` example.

```html
<button class="js-gitter-toggle-chat-button">Toggle Chat</button>
<button class="js-gitter-toggle-chat-button" data-gitter-toggle-chat-state="true">Open Chat</button>
<button class="js-gitter-toggle-chat-button" data-gitter-toggle-chat-state="false">Close Chat</button>
```


## Examples

 - [Basic](https://gitlab.com/gitlab-org/gitter/sidecar/tree/master/examples/basic)
 - [Toggle chat, show/hide](https://gitlab.com/gitlab-org/gitter/sidecar/tree/master/examples/toggle-chat-class-buttons)
 - [Create and Destroy chat](https://gitlab.com/gitlab-org/gitter/sidecar/tree/master/examples/create-destroy-chat)


# Options

Set options with the global window option:

```html
<script>
  ((window.gitter = {}).chat = {}).options = {
    room: 'gitterHQ/sidecar'
  };
</script>
```

You can also override these options individually on the target element:

```html
<div
  class="gitter-chat-embed"
  data-room="gitterHQ/sidecar"
></div>
```


 - `options.room`: string - This is the Gitter room that sidecar will load (`gitterHQ/sidecar`)
    - Acceptable values: string
    - Default: `undefined`
 - `options.targetElement`: Where you want to embed the chat.
    - Acceptable values: Dom node, array of dom nodes, or a string selector
    - Default: Elements that match `'.gitter-chat-embed'`
 - `options.activationElement`: When `options.showChatByDefault` is `false`, this is the element you have to click/interact with to get the chat to actually embed, "Open Chat" button.
    - Acceptable values: Dom node, array of dom nodes, a string selector, or boolean
    - Default: `undefined`
    - Note: This will automatically get generated if you don't specify it (`undefined`, or `true`)
   - Note: Passing in `false` or `null` will disable the activation element
 - `options.showChatByDefault`: Whether to embed the chat on page load(true) or wait until the `options.activation` is resolved/clicked/interacted with(false).
    - Acceptable values: boolean
    - Default: `false`
    - Note: **Use with caution,** useful for use cases where you have a page dedicated to chat.
 - `options.useStyles`: This will embed CSS into your document to style the activation and target element. If you want to customise these, set this option to `false` and specify your own CSS.
    - Acceptable values: boolean
    - Default: `true`
 - `preload`: Whether the Gitter chat iframe should be loaded in when the chat embed instance is created(this is the page load for default embed)
    - Acceptable values: boolean
    - Default: `false`


### Window Options:

You can set any of the chat options above in this object as well

 - `window.gitter.chat.options.disableDefaultChat`: Stop the default chat from loading on the page when including the Sidecar script. *So you can handle the Gitter chat creation yourself.*
    - The default chat is stored on `window.gitter.chat.defaultChat`.


# API

## `gitter.Chat`


```js
var chat = new window.gitter.Chat(/* options */);`
```

 - `options` (getter): Get a readable copy of the options used for this chat instance
 - `toggleChat(isChatOpen)`: Function/method - Takes a boolean which toggles the visibility of the chat panel
    - This can be used an explicit show/hide method by passing in a explict show(true) or hide(false) boolean.
 - `destroy()`: Function/method - Clean-up and remove any elements created by the embed


## Events

Emitted on Document:

 - `gitter-sidecar-ready`: Emitted when the sidecar script has loaded and is available via `window.gitter`
 - `gitter-sidecar-instance-started`: Emitted after any Sidecar chat instance has initialized
    - Data: `chat`: The sidecar chat instance that was initialized

Emitted on Target Element:

 - `gitter-chat-toggle`: Emitted whenever the chat is opened or closed
    - Data: `state`: Whether it was opened(true) or closed(false)
 - `gitter-chat-started`: Emitted after the Sidecar chat instance has initialized
    - Data: `chat`: The sidecar chat instance that was initialized



*example:*
```js
document.querySelector('.gitter-chat-embed').addEventListener('gitter-chat-toggle', function(e) {
  console.log(e.detail.state ? 'Chat Opened' : 'Chat Closed');
});
```
