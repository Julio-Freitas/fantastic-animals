// @ts-nocheck
import TabMenu from "./modules/tab-nav.js";
import Accordion from "./modules/acordion.js";
import MenuNavigator from "./modules/menu-navigator.js";
import animateSection from "./modules/animate-section.js";
import backTop from "./modules/back-top.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltips.js";
import DropdownInit from "./modules/dropdown.js";
import menuMobileInit from "./modules/menu-mobile.js";
import AnimateNumbers from "./modules/animetionNumbers.js";
import workflowInit from "./modules/workflow.js";

const softScroll = new MenuNavigator('.menu a[href^="#"');
softScroll.init();

const accordion = new Accordion('[data-accordion="faq-list"] dt');
accordion.init();

const tabMenu = new TabMenu(
  "[data-tab='menu-tab'] li",
  "[data-tab='content-tab'] section"
);
tabMenu.init();

// const tooltips = document.querySelectorAll('[data-tooltip]');
const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();
animateSection();
backTop();
Modal();

DropdownInit();
menuMobileInit();
const animateNumbers = new AnimateNumbers(
  "[data-number]",
  ".numbers",
  "activeAnimation"
);
animateNumbers.init();

workflowInit();
