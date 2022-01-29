/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tab_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tab-menu.js */ \"./src/modules/tab-menu.js\");\n/* harmony import */ var _modules_acordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/acordion.js */ \"./src/modules/acordion.js\");\n/* harmony import */ var _modules_menu_navigator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu-navigator.js */ \"./src/modules/menu-navigator.js\");\n/* harmony import */ var _modules_animate_section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/animate-section.js */ \"./src/modules/animate-section.js\");\n/* harmony import */ var _modules_back_top_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/back-top.js */ \"./src/modules/back-top.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_tooltips_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tooltips.js */ \"./src/modules/tooltips.js\");\n/* harmony import */ var _modules_dropdown_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/dropdown.js */ \"./src/modules/dropdown.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./src/modules/menu-mobile.js\");\n/* harmony import */ var _modules_animetionNumbers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/animetionNumbers.js */ \"./src/modules/animetionNumbers.js\");\n/* harmony import */ var _modules_workflow_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/workflow.js */ \"./src/modules/workflow.js\");\n// @ts-nocheck\n\n\n\n\n\n\n\n\n\n\n\nvar softScroll = new _modules_menu_navigator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.menu a[href^=\"#\"');\nsoftScroll.init();\nvar accordion = new _modules_acordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-accordion=\"faq-list\"] dt');\naccordion.init();\n(0,_modules_tab_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_animate_section_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_back_top_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_tooltips_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_dropdown_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_animetionNumbers_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_workflow_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n//# sourceURL=webpack://fantastic-animals/./src/index.js?");

/***/ }),

/***/ "./src/modules/acordion.js":
/*!*********************************!*\
  !*** ./src/modules/acordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\n// @ts-nocheck\nvar Accordion = /*#__PURE__*/function () {\n  function Accordion(list) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Accordion);\n\n    this.listInner = document.querySelectorAll(list);\n    this.firsElment = this.listInner[0];\n    this.nextElementSibling = this.firsElment.nextElementSibling;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Accordion, [{\n    key: \"addClass\",\n    value: function addClass() {\n      this.firsElment.classList.add(\"active\");\n      this.nextElementSibling.classList.add(\"active\");\n    }\n  }, {\n    key: \"tooggleAccordion\",\n    value: function tooggleAccordion(event) {\n      var item = event.currentTarget;\n      var itemSibling = item.nextElementSibling;\n      item.classList.toggle(\"active\");\n      itemSibling.classList.toggle(\"active\");\n      itemSibling.style.maxHeight = \"\".concat(itemSibling.scrollHeight, \"px\");\n    }\n  }, {\n    key: \"addListener\",\n    value: function addListener() {\n      var _this = this;\n\n      this.listInner.forEach(function (faq) {\n        return faq.addEventListener(\"click\", _this.tooggleAccordion.bind(_this));\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.listInner.length) {\n        this.addClass();\n        this.addListener();\n        return this;\n      }\n    }\n  }]);\n\n  return Accordion;\n}();\n\n\n\n//# sourceURL=webpack://fantastic-animals/./src/modules/acordion.js?");

/***/ }),

/***/ "./src/modules/animate-section.js":
/*!****************************************!*\
  !*** ./src/modules/animate-section.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animateSection)\n/* harmony export */ });\nvar sections = document.querySelectorAll('[data-animation]');\nvar windowHeight = window.innerHeight * 0.7;\nfunction animateSection() {\n  sections.forEach(function (section) {\n    var _section$getBoundingC = section.getBoundingClientRect(),\n        top = _section$getBoundingC.top;\n\n    var isSectionVisible = top - windowHeight < 0;\n\n    if (isSectionVisible) {\n      section.classList.add('activeAnimation');\n    } else if (section.classList.contains('activeAnimation')) {\n      section.classList.remove('activeAnimation');\n    }\n  });\n}\nwindow.addEventListener('scroll', animateSection);\n\n//# sourceURL=webpack://fantastic-animals/./src/modules/animate-section.js?");

/***/ }),

/***/ "./src/modules/animetionNumbers.js":
/*!*****************************************!*\
  !*** ./src/modules/animetionNumbers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animationNumberInit)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n\n// @ts-nocheck\nvar numbers = document.querySelectorAll('[data-number]');\nvar targetObserve = document.querySelector('.numbers');\nvar elementWithNumbers = [];\nvar observeElement;\nnumbers.forEach(function (number) {\n  var total = Number(number.innerText);\n  elementWithNumbers.push({\n    value: total,\n    element: number\n  });\n});\n\nfunction animete() {\n  var minValue = elementWithNumbers.reduce(function (acc, item) {\n    acc.push(item.value);\n    return [Math.min.apply(Math, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(acc))];\n  }, []);\n  elementWithNumbers.forEach(function (item) {\n    var total = item.value;\n    var element = item.element;\n    var increment = Math.floor(total / minValue[0]);\n    var start = 0;\n    var timer = setInterval(function () {\n      start += increment;\n      element.innerText = start;\n\n      if (start > total) {\n        element.innerText = total;\n        clearInterval(timer);\n      }\n    }, 100);\n  });\n}\n\nfunction _handleMutation(mutation) {\n  if (mutation && mutation[0].target.classList.contains('active')) {\n    observeElement.disconnect();\n    animete();\n  }\n}\n\nobserveElement = new MutationObserver(_handleMutation);\nobserveElement.observe(targetObserve, {\n  attributes: true\n});\nfunction animationNumberInit() {\n  animete();\n}\n\n//# sourceURL=webpack://fantastic-animals/./src/modules/animetionNumbers.js?");

/***/ }),

/***/ "./src/modules/back-top.js":
/*!*********************************!*\
  !*** ./src/modules/back-top.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ backTop)\n/* harmony export */ });\n// @ts-nocheck\nfunction backTop() {\n  window.addEventListener('scroll', function () {\n    var menu = document.querySelector('.menu');\n    var back = document.querySelector('.arrowUp');\n\n    if (window.scrollY > menu.clientHeight) {\n      back.style.opacity = 1;\n    } else {\n      back.style.opacity = 0;\n    }\n  });\n  var backTopEl = document.querySelector('#backTop');\n\n  function _handleTop() {\n    window.scrollTo({\n      top: 0,\n      behavior: 'smooth'\n    });\n  }\n\n  backTopEl.addEventListener('click', _handleTop);\n}\n\n//# sourceURL=webpack://fantastic-animals/./src/modules/back-top.js?");

/***/ }),

/***/ "./src/modules/dropdown.js":
/*!*********************************!*\
  !*** ./src/modules/dropdown.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ \"./src/utils/index.js\");\n\nvar listEvent = [\"click\", \"touchstart\"];\n\nfunction _handleDropdown(event) {\n  var _this = this;\n\n  event.preventDefault();\n  this.classList.add(\"active-dropdown\");\n  this.setAttribute(\"data-active\", \"clickHappend\");\n  (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.outSideEvent)(this, listEvent, function () {\n    _this.classList.remove(\"active-dropdown\");\n\n    _this.removeAttribute(\"data-active\");\n  });\n}\n\nfunction DropdownInit() {\n  var dropdown = document.querySelector(\"[data-dropdown]\");\n  if (!dropdown) return;\n  listEvent.forEach(function (useEvent) {\n    return dropdown.addEventListener(useEvent, _handleDropdown);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownInit);\n\n//# sourceURL=webpack://fantastic-animals/./src/modules/dropdown.js?");

/***/ }),

/***/ "./src/modules/menu-mobile.js":
/*!************************************!*\
  !*** ./src/modules/menu-mobile.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMobileInit)\n/* harmony export */ });\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ \"./src/utils/index.js\");\n\nvar menuButton = document.querySelector('[data-menu=\"button\"]');\nvar menuMobile = document.querySelector('[data-menu=\"list-mobile\"]');\nvar listEvent = [\"click\", \"touchstart\"];\n\nfunction toogleClass(event) {\n  event.target.classList.toggle(\"active\");\n  menuMobile.classList.toggle(\"active\");\n  (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.outSideEvent)(menuMobile, listEvent, function () {\n    menuButton.classList.remove(\"active\");\n    menuMobile.classList.remove(\"active\");\n  });\n}\n\nfunction menuMobileInit() {\n  menuButton.addEventListener(\"click\", toogleClass);\n}\n\n//# sourceURL=webpack://fantastic-animals/./src/modules/menu-mobile.js?");

/***/ }),

/***/ "./src/modules/menu-navigator.js":
/*!***************************************!*\
  !*** ./src/modules/menu-navigator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuNavigator)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar MenuNavigator = /*#__PURE__*/function () {\n  function MenuNavigator(links, options) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MenuNavigator);\n\n    this.linksInner = document.querySelectorAll(links);\n\n    if (!options) {\n      this.options = {\n        behavior: \"smooth\",\n        block: \"start\"\n      };\n    } else {\n      this.options = options;\n    }\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MenuNavigator, [{\n    key: \"moveSectionTo\",\n    value: function moveSectionTo(event) {\n      event.preventDefault();\n      var hashLink = event.target.getAttribute(\"href\");\n      var section = document.querySelector(hashLink);\n      section.scrollIntoView(this.options);\n    }\n  }, {\n    key: \"addLinkEvent\",\n    value: function addLinkEvent() {\n      var _this = this;\n\n      this.linksInner.forEach(function (link) {\n        link.addEventListener(\"click\", _this.moveSectionTo.bind(_this));\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.linksInner.length) {\n        this.addLinkEvent();\n        return this;\n      }\n    }\n  }]);\n\n  return MenuNavigator;\n}();\n\n\n\n//# sourceURL=webpack://fantastic-animals/./src/modules/menu-navigator.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar buttonLogin = document.querySelector('.menu-login button');\nvar buttonCloseModal = document.querySelector('.modal-go-out');\nvar sectionModal = document.querySelector('[data-modal=\"section\"]');\n\nfunction toogleModal(event) {\n  event.preventDefault();\n  event.target === this && sectionModal.classList.toggle('fadeIn');\n}\n\nfunction Modal() {\n  buttonLogin.addEventListener('click', toogleModal);\n  buttonCloseModal.addEventListener('click', toogleModal);\n  sectionModal.addEventListener('click', toogleModal);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n//# sourceURL=webpack://fantastic-animals/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/tab-menu.js":
/*!*********************************!*\
  !*** ./src/modules/tab-menu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabMenu = document.querySelectorAll(\"[data-tab='menu-tab'] li\");\nvar tabContent = document.querySelectorAll(\"[data-tab='content-tab'] section\");\n\nfunction activeTab() {\n  function activeTabe(index) {\n    return function () {\n      tabContent.forEach(function (section) {\n        return section.classList.remove('active');\n      });\n      tabContent[index].classList.add('active');\n    };\n  }\n\n  if (tabMenu.length && tabContent.length) {\n    tabMenu.forEach(function (tab, index) {\n      tab.addEventListener('click', activeTabe(index));\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activeTab);\n\n//# sourceURL=webpack://fantastic-animals/./src/modules/tab-menu.js?");

/***/ }),

/***/ "./src/modules/tooltips.js":
/*!*********************************!*\
  !*** ./src/modules/tooltips.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// @ts-nocheck\nvar tooltips = document.querySelectorAll('[data-tooltip]');\n\nfunction createTooltipBox(element) {\n  var tooltipBox = document.createElement('div');\n  var text = element.getAttribute('area-label');\n  tooltipBox.classList.add('tooltip');\n  tooltipBox.innerText = text;\n  document.body.appendChild(tooltipBox);\n  return tooltipBox;\n}\n\nvar updatetooltip = {\n  handleEvent: function handleEvent(event) {\n    this.tooltipBox.style.top = \"\".concat(event.pageY + 10, \"px\");\n    this.tooltipBox.style.left = \"\".concat(event.pageX + 10, \"px\");\n  }\n};\nvar removeTooltip = {\n  handleEvent: function handleEvent() {\n    this.tooltipBox.remove();\n    this.element.removeEventListener('mouseleave', removeTooltip);\n    this.element.removeEventListener('mousemove', updatetooltip);\n  }\n};\n\nfunction _handleMouseOver(event) {\n  if (event) {\n    var tooltipBox = createTooltipBox(this);\n    tooltipBox.textContent;\n    tooltipBox.style.top = \"\".concat(event.pageY, \"px\");\n    tooltipBox.style.left = \"\".concat(event.pageX, \"px\");\n    removeTooltip.tooltipBox = tooltipBox;\n    removeTooltip.element = this;\n    updatetooltip.tooltipBox = tooltipBox;\n    this.addEventListener('mouseleave', removeTooltip);\n    this.addEventListener('mousemove', updatetooltip);\n  }\n}\n\nif (tooltips.length) {\n  tooltips.forEach(function (tooltip) {\n    return tooltip.addEventListener('mouseover', _handleMouseOver);\n  });\n}\n\nfunction TooltipInit() {\n  _handleMouseOver();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TooltipInit);\n\n//# sourceURL=webpack://fantastic-animals/./src/modules/tooltips.js?");

/***/ }),

/***/ "./src/modules/workflow.js":
/*!*********************************!*\
  !*** ./src/modules/workflow.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ workflowInit)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n\n\n// @ts-nocheck\nfunction checkWork() {\n  var dayWeek = document.querySelector('[data-dayWeek]');\n  var time = document.querySelector('[data-time]');\n  var workDays = dayWeek.dataset.dayweek.split(',').map(Number);\n\n  var _time$dataset$time$sp = time.dataset.time.split(',').map(Number),\n      _time$dataset$time$sp2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_time$dataset$time$sp, 2),\n      startWork = _time$dataset$time$sp2[0],\n      endWork = _time$dataset$time$sp2[1];\n\n  var dateNow = new Date();\n  var todayDay = dateNow.getDay();\n  var todayTime = dateNow.getHours();\n  var isWorkToday = workDays.includes(todayDay);\n  var openWork = startWork <= todayTime && endWork > todayTime;\n  var weWork = isWorkToday && openWork;\n\n  if (weWork) {\n    dayWeek.parentElement.classList.add('isWorking');\n  }\n}\n\nfunction workflowInit() {\n  checkWork();\n}\n\n//# sourceURL=webpack://fantastic-animals/./src/modules/workflow.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"outSideEvent\": () => (/* reexport safe */ _outSideEvent_outSideEvent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"clickOutSide\": () => (/* reexport safe */ _outSideclick_outSideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _outSideclick_outSideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outSideclick/outSideClick.js */ \"./src/utils/outSideclick/outSideClick.js\");\n/* harmony import */ var _outSideEvent_outSideEvent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outSideEvent/outSideEvent.js */ \"./src/utils/outSideEvent/outSideEvent.js\");\n\n\n\n\n//# sourceURL=webpack://fantastic-animals/./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/outSideEvent/outSideEvent.js":
/*!************************************************!*\
  !*** ./src/utils/outSideEvent/outSideEvent.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outSideEvent)\n/* harmony export */ });\nfunction outSideEvent(element, callback) {\n  var events = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n  var html = document.documentElement;\n  var outside = 'data-outsite';\n  if (events.length < 0) events.push('click');\n  element.setAttribute(outside, '');\n\n  function _handleEventOutSide(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach(function (evt) {\n        return html.removeEventListener(evt, _handleEventOutSide);\n      });\n      callback();\n    }\n  }\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (event) {\n      return setTimeout(function () {\n        return html.addEventListener(event, _handleEventOutSide);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://fantastic-animals/./src/utils/outSideEvent/outSideEvent.js?");

/***/ }),

/***/ "./src/utils/outSideclick/outSideClick.js":
/*!************************************************!*\
  !*** ./src/utils/outSideclick/outSideClick.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickOutSide)\n/* harmony export */ });\nvar activeDropdowm = {\n  handleEvent: function handleEvent(_ref) {\n    var target = _ref.target;\n\n    if (!this.element.contains(target)) {\n      this.callback();\n      this.element.removeAttribute('data-active');\n    }\n\n    this.element.removeEventListener(this.useEvent, activeDropdowm);\n  }\n};\nfunction clickOutSide(element, callback) {\n  var useEvent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'click';\n  var html = document.documentElement;\n  element.setAttribute('data-active', 'true');\n  var isActiveELemt = element.hasAttribute('data-active');\n\n  if (isActiveELemt) {\n    activeDropdowm.element = element;\n    activeDropdowm.callback = callback;\n    activeDropdowm.useEvent = useEvent;\n    html.addEventListener(useEvent, activeDropdowm);\n  }\n}\n\n//# sourceURL=webpack://fantastic-animals/./src/utils/outSideclick/outSideClick.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayLikeToArray)\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\n//# sourceURL=webpack://fantastic-animals/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithHoles)\n/* harmony export */ });\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\n//# sourceURL=webpack://fantastic-animals/./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithoutHoles)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}\n\n//# sourceURL=webpack://fantastic-animals/./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://fantastic-animals/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://fantastic-animals/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArray)\n/* harmony export */ });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\n\n//# sourceURL=webpack://fantastic-animals/./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArrayLimit)\n/* harmony export */ });\nfunction _iterableToArrayLimit(arr, i) {\n  var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n\n  if (_i == null) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n\n  var _s, _e;\n\n  try {\n    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\n//# sourceURL=webpack://fantastic-animals/./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableRest)\n/* harmony export */ });\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://fantastic-animals/./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableSpread)\n/* harmony export */ });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://fantastic-animals/./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _slicedToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js\");\n/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js\");\n\n\n\n\nfunction _slicedToArray(arr, i) {\n  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack://fantastic-animals/./node_modules/@babel/runtime/helpers/esm/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toConsumableArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack://fantastic-animals/./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _unsupportedIterableToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n}\n\n//# sourceURL=webpack://fantastic-animals/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;