export default function outSideEvent(element, callback, events = []) {
  const html = document.documentElement;
  const outside = 'data-outsite';

  if (events.length < 0) events.push('click');

  element.setAttribute(outside, '');

  function _handleEventOutSide(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((evt) => html.removeEventListener(evt, _handleEventOutSide));
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((event) => setTimeout(() => html.addEventListener(event, _handleEventOutSide)));
  }
}
