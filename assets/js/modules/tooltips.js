// @ts-nocheck
const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.length &&
  tooltips.forEach((tooltip) =>
    tooltip.addEventListener('mouseover', _handleMouseOver)
  );

function _handleMouseOver(event) {
  if (event) {
    const tooltipBox = createTooltipBox(this);
    tooltipBox.textContent;
    tooltipBox.style.top = `${event.pageY}px`;
    tooltipBox.style.left = `${event.pageX}px`;
    removeTooltip.tooltipBox = tooltipBox;
    removeTooltip.element = this;
    updatetooltip.tooltipBox = tooltipBox;
    this.addEventListener('mouseleave', removeTooltip);
    this.addEventListener('mousemove', updatetooltip);
  }
}

const removeTooltip = {
  handleEvent() {
    this.tooltipBox.remove();
    this.element.removeEventListener('mouseleave', removeTooltip);
    this.element.removeEventListener('mousemove', updatetooltip);
  },
};

const updatetooltip = {
  handleEvent(event) {
    this.tooltipBox.style.top = `${event.pageY + 10}px`;
    this.tooltipBox.style.left = `${event.pageX + 10}px`;
  },
};

function createTooltipBox(element) {
  const tooltipBox = document.createElement('div');
  const text = element.getAttribute('area-label');
  tooltipBox.classList.add('tooltip');
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  return tooltipBox;
}

function TooltipInit() {
  _handleMouseOver();
}
export default TooltipInit;
