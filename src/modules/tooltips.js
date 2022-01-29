// @ts-nocheck

class TooltipInit {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    this.updatetooltip = this.updatetooltip.bind(this);
    this.removeTooltip = this.removeTooltip.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  createTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("area-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  updatetooltip(event) {
    this.tooltipBox.style.top = `${event.pageY + 10}px`;
    const checkMoveTooltip =
      event.pageX + this.tooltipBox.clientWidth > event.target.clientWidth;
    if (checkMoveTooltip) {
      const positionX = event.pageX - this.tooltipBox.clientWidth;
      this.tooltipBox.style.left = `${positionX}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 10}px`;
    }
  }

  removeTooltip({ currentTarget }) {
    this.tooltipBox.remove();

    currentTarget.removeEventListener("mouseleave", this.removeTooltip);
    currentTarget.removeEventListener("mousemove", this.updatetooltip);
  }

  handleMouseOver({ currentTarget }) {
    this.createTooltipBox(currentTarget);
    currentTarget.addEventListener("mouseleave", this.removeTooltip);
    currentTarget.addEventListener("mousemove", this.updatetooltip);
  }

  addTooltipsEvents() {
    this.tooltips.forEach((tooltip) =>
      tooltip.addEventListener("mouseover", this.handleMouseOver)
    );
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvents();
    }
  }
}

export default TooltipInit;
