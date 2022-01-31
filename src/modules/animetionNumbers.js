// @ts-nocheck
const numbers = document.querySelectorAll("[data-number]");
const targetObserve = document.querySelector(".numbers");
const elementWithNumbers = [];
let observeElement;

numbers.forEach((number) => {
  const total = Number(number.innerText);
  elementWithNumbers.push({
    value: total,
    element: number,
  });
});

function animete() {
  const minValue = elementWithNumbers.reduce((acc, item) => {
    acc.push(item.value);
    return [Math.min(...acc)];
  }, []);

  elementWithNumbers.forEach((item) => {
    const total = item.value;
    const { element } = item;
    const increment = Math.floor(total / minValue[0]);
    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      element.innerText = start;
      if (start > total) {
        element.innerText = total;
        clearInterval(timer);
      }
    }, 100);
  });
}

function _handleMutation(mutation) {
  if (mutation && mutation[0].target.classList.contains("active")) {
    observeElement.disconnect();
    animete();
  }
}

observeElement = new MutationObserver(_handleMutation);

observeElement.observe(targetObserve, { attributes: true });

function animationNumberInit() {
  animete();
}

export default class AnimateNumbers {
  constructor(numbers, targetObserve, classObserver) {
    this.numbers = document.querySelectorAll(numbers);
    this.targetObserve = document.querySelector(targetObserve);
    this._handleMutation = this._handleMutation.bind(this);
    this.classObserver = classObserver;
    this.elementWithNumbers = [];
  }

  incrementNumbersInelementWithNumbers() {
    this.numbers.forEach((number) => {
      const total = Number(number.innerText);
      this.elementWithNumbers.push({
        value: total,
        element: number,
      });
    });
  }

  static incrementNumbers(item, minValue) {
    const total = item.value;
    const { element } = item;
    const increment = Math.floor(total / minValue[0]);
    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      element.innerText = start;
      if (start > total) {
        element.innerText = total;
        clearInterval(timer);
      }
    }, 100);
  }

  animete() {
    this.incrementNumbersInelementWithNumbers();

    const minValue = this.elementWithNumbers.reduce((acc, item) => {
      acc.push(item.value);
      return [Math.min(...acc)];
    }, []);

    this.elementWithNumbers.forEach((number) =>
      this.constructor.incrementNumbers(number, minValue)
    );
  }

  _handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.classObserver)) {
      observeElement.disconnect();
      this.animete();
    }
  }

  addMutationObserver() {
    this.observeElement = new MutationObserver(this._handleMutation);
    this.observeElement.observe(this.targetObserve, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.targetObserve) {
      this.addMutationObserver();
    }
    return this;
  }
}
