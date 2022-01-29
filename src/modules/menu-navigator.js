export default class MenuNavigator {
  constructor(links, options) {
    this.linksInner = document.querySelectorAll(links);

    if (!options) {
      this.options = {
        behavior: "smooth",
        block: "start",
      };
    } else {
      this.options = options;
    }
  }

  moveSectionTo(event) {
    event.preventDefault();

    const hashLink = event.target.getAttribute("href");
    const section = document.querySelector(hashLink);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInner.forEach((link) => {
      link.addEventListener("click", this.moveSectionTo.bind(this));
    });
  }

  init() {
    if (this.linksInner.length) {
      this.addLinkEvent();
      return this;
    }
  }
}
