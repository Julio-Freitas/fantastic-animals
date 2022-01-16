// @ts-nocheck
export default function accordionInit() {
  const faqList = document.querySelectorAll('[data-accordion="faq-list"] dt');

  if (!faqList.length) {
    return;
  }
  const [firsElment] = faqList;
  const { nextElementSibling } = firsElment;

  firsElment.classList.add('active');
  nextElementSibling.classList.add('active');

  nextElementSibling.style.maxHeight = nextElementSibling.scrollHeight + 'px';

  function handlefaq(event) {
    const item = event.currentTarget;
    const { nextElementSibling } = item;

    item.classList.toggle('active');
    nextElementSibling.classList.toggle('active');
    nextElementSibling.style.maxHeight = nextElementSibling.scrollHeight + 'px';
  }

  faqList.forEach((faq) => {
    faq.addEventListener('click', handlefaq);
  });
}
