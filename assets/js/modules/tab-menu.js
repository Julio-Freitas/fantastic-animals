const tabMenu = document.querySelectorAll("[data-tab='menu-tab'] li");
const tabContent = document.querySelectorAll(
  "[data-tab='content-tab'] section"
);

function activeTab() {
  if (tabMenu.length && tabContent.length) {
    function activeTabe(index) {
      return () => {
        tabContent.forEach((section) => section.classList.remove('active'));
        tabContent[index].classList.add('active');
      };
    }

    tabMenu.forEach((tab, index) => {
      tab.addEventListener('click', activeTabe(index));
    });
  }
}
export default activeTab;
