const sections = document.querySelectorAll('[data-animation]');
const windowHeight = window.innerHeight * 0.7;

export default function animateSection() {
  sections.forEach((section) => {
    const { top } = section.getBoundingClientRect();
    const isSectionVisible = top - windowHeight < 0;
    if (isSectionVisible) {
      section.classList.add('activeAnimation');
    } else if (section.classList.contains('activeAnimation')) {
      section.classList.remove('activeAnimation');
    }
  });
}
window.addEventListener('scroll', animateSection);
