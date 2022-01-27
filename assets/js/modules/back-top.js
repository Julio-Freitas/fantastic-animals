// @ts-nocheck
export default function backTop() {
  window.addEventListener('scroll', () => {
    const menu = document.querySelector('.menu');
    const back = document.querySelector('.arrowUp');
    if (window.scrollY > menu.clientHeight) {
      back.style.opacity = 1;
    } else {
      back.style.opacity = 0;
    }
  });

  const backTopEl = document.querySelector('#backTop');

  function _handleTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  backTopEl.addEventListener('click', _handleTop);
}
