class TabNav {
  constructor(tabMenu, tabContent) {
    this.tabMenuInner = document.querySelectorAll(tabMenu);
    this.tabContent = document.querySelectorAll(tabContent);
  }

  toogleActive(index) {
    return () => {
      this.tabContent.forEach((section) => section.classList.remove("active"));
      this.tabContent[index].classList.add("active");
    };
  }

  handleEvent() {
    this.tabMenuInner.forEach((tab, index) =>
      tab.addEventListener("click", this.toogleActive(index))
    );
  }

  init() {
    if (this.tabMenuInner.length && this.tabContent.length) {
      this.handleEvent();
      return this;
    }
  }
}

export default TabNav;
