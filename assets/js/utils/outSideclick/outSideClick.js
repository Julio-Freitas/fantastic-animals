export default function clickOutSide(element, callback, useEvent) {
  if (!useEvent) {
    useEvent = 'click';
  }
  const html = document.documentElement;
  element.setAttribute('data-active', 'true');
  const isActiveELemt = element.hasAttribute('data-active');
  if (isActiveELemt) {
    activeDropdowm.element = element;
    activeDropdowm.callback = callback;
    activeDropdowm.useEvent = useEvent;
    html.addEventListener(useEvent, activeDropdowm);
  }
}

const activeDropdowm = {
  handleEvent({ target }) {
    if (!this.element.contains(target)) {
      this.callback();
      this.element.removeAttribute('data-active');
    }

    this.element.removeEventListener(this.useEvent, activeDropdowm);
  },
};
