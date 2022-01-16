import { outSideEvent } from '../utils/index.js';

const menuButton = document.querySelector('[data-menu="button"]');
const menuMobile = document.querySelector('[data-menu="list-mobile"]');

const listEvent = ['click', 'touchstart'];

function toogleClass(event) {
  event.target.classList.toggle('active');
  menuMobile.classList.toggle('active');

  outSideEvent(menuMobile, listEvent, () => {
    menuButton.classList.remove('active');
    menuMobile.classList.remove('active');
  });
}

export default function menuMobileInit() {
  menuButton.addEventListener('click', toogleClass);
}
