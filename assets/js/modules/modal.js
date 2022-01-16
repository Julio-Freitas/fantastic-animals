const buttonLogin = document.querySelector('.menu-login button');
const buttonCloseModal = document.querySelector('.modal-go-out');
const sectionModal = document.querySelector('[data-modal="section"]');

function toogleModal(event) {
  event.preventDefault();
  event.target === this && sectionModal.classList.toggle('fadeIn');
}

function Modal() {
  buttonLogin.addEventListener('click', toogleModal);
  buttonCloseModal.addEventListener('click', toogleModal);
  sectionModal.addEventListener('click', toogleModal);
}

export default Modal;
