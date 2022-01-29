// @ts-nocheck
export default class Accordion {
  constructor(list) {
    this.listInner = document.querySelectorAll(list);
    this.firsElment = this.listInner[0];
    this.nextElementSibling = this.firsElment.nextElementSibling;
  }

  addClass() {
    this.firsElment.classList.add("active");
    this.nextElementSibling.classList.add("active");
  }

  tooggleAccordion(event) {
    const item = event.currentTarget;
    const { nextElementSibling: itemSibling } = item;
    item.classList.toggle("active");
    itemSibling.classList.toggle("active");
    itemSibling.style.maxHeight = `${itemSibling.scrollHeight}px`;
  }

  addListener() {
    this.listInner.forEach((faq) =>
      faq.addEventListener("click", this.tooggleAccordion.bind(this))
    );
  }

  init() {
    if (this.listInner.length) {
      this.addClass();
      this.addListener();
      return this;
    }
  }
}
