import { outSideEvent } from "../utils/index.js";

const listEvent = ["click", "touchstart"];

function _handleDropdown(event) {
  event.preventDefault();
  this.classList.add("active-dropdown");
  this.setAttribute("data-active", "clickHappend");
  outSideEvent(this, listEvent, () => {
    this.classList.remove("active-dropdown");
    this.removeAttribute("data-active");
  });
}

function DropdownInit() {
  const dropdown = document.querySelector("[data-dropdown]");
  if (!dropdown) return;

  listEvent.forEach((useEvent) =>
    dropdown.addEventListener(useEvent, _handleDropdown)
  );
}
export default DropdownInit;
