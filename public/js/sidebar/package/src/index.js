// This is the entry point for the <script> tag window global friendly version: https://sidecar.gitter.im/
import CustomEvent from './lib/custom-event-ponyfill';
import Chat from './lib/chat.js';

const getOrDefaultKey = function(obj, key) {
  return obj[key] || (function() {
    obj[key] = {};
    return obj[key];
  })();
};

const sidecar = { Chat };
const windowGitter = {
  ...getOrDefaultKey(window, 'gitter'),
  ...sidecar
};

// Tell them that `sidecar` is loaded and ready
const event = new CustomEvent('gitter-sidecar-ready', {
  detail: sidecar
});
document.dispatchEvent(event);

// Create the default instance
if(!((windowGitter.chat || {}).options || {}).disableDefaultChat) {
  let windowGitterChat = getOrDefaultKey(windowGitter, 'chat');
  windowGitterChat.defaultChat = new Chat(windowGitterChat.options || {});
}

export default sidecar;
