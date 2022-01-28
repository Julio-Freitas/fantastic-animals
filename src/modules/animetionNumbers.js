// @ts-nocheck
const numbers = document.querySelectorAll('[data-number]');
const targetObserve = document.querySelector('.numbers');
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
  if (mutation && mutation[0].target.classList.contains('active')) {
    observeElement.disconnect();
    animete();
  }
}

observeElement = new MutationObserver(_handleMutation);

observeElement.observe(targetObserve, { attributes: true });

export default function animationNumberInit() {
  animete();
}
