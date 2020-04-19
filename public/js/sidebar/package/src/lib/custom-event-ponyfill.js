// via https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
export default function CustomEvent (event, {
  bubbles = false,
  cancelable = false,
  detail = undefined
}) {
  let evt;
  try {
    evt = new window.CustomEvent(event, {
        bubbles,
        cancelable,
        detail
    });
  } catch (e) {
    // For IE11-
    evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, bubbles, cancelable, detail);
  }

  return evt;
}

CustomEvent.prototype = window.Event.prototype;
