// @ts-nocheck
import activeTab from "./modules/tab-menu.js";
import Accordion from "./modules/acordion.js";
import MenuNavigator from "./modules/menu-navigator.js";
import animateSection from "./modules/animate-section.js";
import backTop from "./modules/back-top.js";
import Modal from "./modules/modal.js";
import TooltipInit from "./modules/tooltips.js";
import DropdownInit from "./modules/dropdown.js";
import menuMobileInit from "./modules/menu-mobile.js";
import animationNumberInit from "./modules/animetionNumbers.js";
import workflowInit from "./modules/workflow.js";

const softScroll = new MenuNavigator('.menu a[href^="#"');
softScroll.init();

const accordion = new Accordion('[data-accordion="faq-list"] dt');
accordion.init();

activeTab();
animateSection();
backTop();
Modal();
TooltipInit();
DropdownInit();
menuMobileInit();
animationNumberInit();
workflowInit();
