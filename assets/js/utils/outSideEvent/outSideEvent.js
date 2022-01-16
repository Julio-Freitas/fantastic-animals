export default function outSideEvent(element, events = [], callback) {
  const html = document.documentElement;
  const outside = 'data-outsite';

  if (events.length < 0) events.push('click');

  if (!element.hasAttribute(outside)) {
    events.forEach((event) =>
      setTimeout(() => html.addEventListener(event, _handleEventOutSide))
    );
  }

  element.setAttribute(outside, '');

  function _handleEventOutSide(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((event) =>
        html.removeEventListener(event, _handleEventOutSide)
      );
      callback();
    }
  }
}
