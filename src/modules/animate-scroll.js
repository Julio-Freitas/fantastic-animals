import { debounce } from "../utils";
export default class AnimateScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHeight = window.innerHeight * 0.65;
    this.checkDistance = debounce(this.checkDistance.bind(this), 150);
  }

  getDistanceSection() {
    this.distance = [...this.sections].map((section) => ({
      element: section,
      distance: Math.floor(section.offsetTop - this.windowHeight),
    }));
  }

  toogleClassAnimate({ element, distance }) {
    if (window.pageYOffset > distance) {
      element.classList.add("activeAnimation");
    } else if (element.classList.contains("activeAnimation")) {
      element.classList.remove("activeAnimation");
    }
  }

  checkDistance() {
    this.distance.forEach(this.toogleClassAnimate);
  }

  animateWithScroll() {
    this.getDistanceSection();
    this.checkDistance();
    window.addEventListener("scroll", this.checkDistance);
  }

  init() {
    this.animateWithScroll();
  }
}
