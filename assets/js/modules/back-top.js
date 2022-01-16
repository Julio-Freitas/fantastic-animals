// @ts-nocheck
export default function backTop() {
  window.addEventListener('scroll', (event) => {
    const menu = document.querySelector('.menu');
    const back = document.querySelector('.arrowUp');
    if (window.scrollY > menu.clientHeight) {
      back.style.opacity = 1;
    } else {
      back.style.opacity = 0;
    }
  });

  const backTop = document.querySelector('#backTop');

  function _handleTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  backTop.addEventListener('click', _handleTop);
}
