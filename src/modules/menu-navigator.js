export default function menuNavigator() {
  const linksMenu = document.querySelectorAll('.menu a[href^="#"');

  if (linksMenu.length < 0) return;
  function moveSectionTo(event) {
    event.preventDefault();

    const hashLink = event.target.getAttribute("href");
    const section = document.querySelector(hashLink);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksMenu.forEach((link) => {
    link.addEventListener("click", moveSectionTo);
  });
}
