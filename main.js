/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactContent)
/* harmony export */ });
const contactContent = (function () {
  "use strict";

  const mainEl = document.createElement("main");
  mainEl.classList.add("contact-content");
  mainEl.innerHTML = `
  <h2 class="contact-heading">Contact Us</h2>
  <address class="contact-information">
    <ul>
      <li>
        <span>Visit us at:</span>
        123 Main Street, Summerville, NY 76234
      </li>
      <li>
        <span>Email:</span>
        <a href="mailto:jim@rock.com">iwannaeat@roastburgers.com</a>
      </li>
      <li>
        <span>Phone Number:</span>
        <a href="tel:+13115552368">(311) 555-2368</a>
      </li>
    </ul>
  </address>
  `;

  return {
    mainEl,
  };
})();




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeContent)
/* harmony export */ });
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");


const homeContent = (function () {
  "use strict";

  const mainEl = document.createElement("main");
  mainEl.classList.add("home-content");
  mainEl.innerHTML = `
  <h2 class="home-content-heading">
    Hungry
    <span>?</span>
  </h2>
  <p>
    Free drink & fries
    <span>|</span>
    No waiting
    <span>|</span>
    Door opens at 9 pm
  </p>
  <a class="view-menu-btn" href="#">View menu</a>
  `;

  return { mainEl };
})();

document.addEventListener("DOMContentLoaded", _page_load__WEBPACK_IMPORTED_MODULE_0__["default"], {
  once: true,
});




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuContent)
/* harmony export */ });
const menuContent = (function () {
  "use strict";

  const mainEl = document.createElement("main");
  mainEl.classList.add("menu-content");
  mainEl.innerHTML = `
  <section class="menu">
    <h2 class="menu-heading">Beef Burgers</h2>
    <dl class="menu-list">
      <dt class="menu-item-title">
        <span>Beef Burger</span>
        <span>$5</span>
      </dt>
      <dd class="menu-item-description">
        Beef Patty, Onions, Tomatoes, Pickles, Lettuce, Ketchup, Mayo,
        Mustard
      </dd>
      <dt class="menu-item-title">
        <span>Cheese Burger</span>
        <span>$6</span>
      </dt>
      <dd class="menu-item-description">
        Beef Patty, Chedder Cheese, Grilled Onions, Tomatoes, Pickles,
        Lettuce, Ketchup, Mayo, Mustard
      </dd>
      <dt class="menu-item-title">
        <span>Beef Bacon</span>
        <span>$7</span>
      </dt>
      <dd class="menu-item-description">
        Beef Patty, Chedder Cheese, Beef Bacon, Grilled Onions, Tomatoes,
        Pickles, Lettuce, Ketchup, Mayo, Mustard
      </dd>
      <dt class="menu-item-title">
        <span>Creamy Mushroom</span>
        <span>$8</span>
      </dt>
      <dd class="menu-item-description">
        Beef Patty, Cream of Mushroom, Mozza Cheese, Grilled Onions, Mayo
      </dd>
      <dt class="menu-item-title">
        <span>Hawaiian Burger</span>
        <span>$9</span>
      </dt>
      <dd class="menu-item-description">
        Beef Patty, Grilled Pineapple, Mozza Cheese, Onions, Tomatoes,
        Lettuce, Mayo, BBQ Sause
      </dd>
    </dl>
  </section>
  <section class="menu">
    <h2 class="menu-heading">Chicken Burgers</h2>
    <dl class="menu-list">
      <dt class="menu-item-title">
        <span>Spicy Tandoori</span>
        <span>$5</span>
      </dt>
      <dd class="menu-item-description">
        Tandoori Chicken, Chedder Cheese, Grilled Onions & Tomatoes,
        Lettuce, Pickles, Garlic Sause, Mayo
      </dd>
      <dt class="menu-item-title">
        <span>Spicy Buffalo</span>
        <span>$6</span>
      </dt>
      <dd class="menu-item-description">
        Crispy Chicken, Mozza Cheese, Grilled Onions & Tomatoes, Lettuce,
        Garlic Sause, Buffalo Sause, Mayo
      </dd>
      <dt class="menu-item-title">
        <span>BBQ Chicken</span>
        <span>$7</span>
      </dt>
      <dd class="menu-item-description">
        Grilled Chicken, Mozza Cheese, Grilled Onions, Lettuce, Mayo, BBQ
        Sause
      </dd>
      <dt class="menu-item-title">
        <span>Crispy Chicken</span>
        <span>$8</span>
      </dt>
      <dd class="menu-item-description">
        Crispy Chicken, Chedder Cheese, Grilled Onions & Tomatoes,
        Lettuce, Pickles, Garlic Sause, Mayo, Chipotle Sause
      </dd>
      <dt class="menu-item-title">
        <span>Chicken Paradise</span>
        <span>$9</span>
      </dt>
      <dd class="menu-item-description">
        Grilled Chicken, Mozza Cheese, Grilled Pineapple, Lettuce, Onions,
        Jalapenos, Mayo, Garlic Sause
      </dd>
    </dl>
  </section>
  `;

  return { mainEl };
})();




/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoaded)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




const pageLoaded = function () {
  "use strict";

  const contentEl = document.getElementById("content");

  const headerEl = document.createElement("header");
  headerEl.classList.add("header");
  headerEl.innerHTML = `
  <h1 class="logo">
    <svg viewBox="0 0 24 24">
      <path
        d="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z"
      />
    </svg>
    Roast
  </h1>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item"><a href="#">Home</a></li>
      <li class="nav-item"><a href="#">Menu</a></li>
      <li class="nav-item"><a href="#">Contact</a></li>
    </ul>
  </nav>
  `;

  const mainEl = document.createElement("main");
  mainEl.classList.add("home-content");
  mainEl.innerHTML = `
  <h2 class="home-content-heading">
    Hungry
    <span>?</span>
  </h2>
  <p>
    Free drink & fries
    <span>|</span>
    No waiting
    <span>|</span>
    Door opens at 9 pm
  </p>
  <a class="view-menu-btn" href="#">View menu</a>
  `;

  const footerEl = document.createElement("footer");
  footerEl.classList.add("footer");
  footerEl.innerHTML = `
  Copyright &copy; 2022 Ruslan Toleuov
  <a
    href="https://github.com/ruslantoleuov"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg class="github-icon" viewBox="0 0 20 19.51549">
      <path
        d="M 10,0 A 10,10 0 0 0 0,10 c 0,4.42 2.87,8.17 6.84,9.5 0.5,0.08 0.66,-0.23 0.66,-0.5 0,-0.23 0,-0.86 0,-1.69 C 4.73,17.91 4.14,15.97 4.14,15.97 3.68,14.81 3.03,14.5 3.03,14.5 2.12,13.88 3.1,13.9 3.1,13.9 c 1,0.07 1.53,1.03 1.53,1.03 C 5.5,16.45 6.97,16 7.54,15.76 7.63,15.11 7.89,14.67 8.17,14.42 5.95,14.17 3.62,13.31 3.62,9.5 3.62,8.39 4,7.5 4.65,6.79 4.55,6.54 4.2,5.5 4.75,4.15 c 0,0 0.84,-0.27 2.75,1.02 0.79,-0.22 1.65,-0.33 2.5,-0.33 0.85,0 1.71,0.11 2.5,0.33 1.91,-1.29 2.75,-1.02 2.75,-1.02 0.55,1.35 0.2,2.39 0.1,2.64 0.65,0.71 1.03,1.6 1.03,2.71 0,3.82 -2.34,4.66 -4.57,4.91 0.36,0.31 0.69,0.92 0.69,1.85 0,1.34 0,2.42 0,2.74 0,0.27 0.16,0.59 0.67,0.5 C 17.14,18.16 20,14.42 20,10 A 10,10 0 0 0 10,0 Z"
      />
    </svg>
  </a>
  `;

  contentEl.append(headerEl, mainEl, footerEl);

  const navListEl = document.querySelector(".nav-list");
  let viewMenuBtn = document.querySelector(".view-menu-btn");

  const replaceInnerHTMLToMenuContent = function () {
    const mainEl = document.querySelector("main");
    mainEl.classList.remove(mainEl.className);
    mainEl.classList.add("menu-content");
    mainEl.innerHTML = _menu__WEBPACK_IMPORTED_MODULE_1__["default"].mainEl.innerHTML;
  };

  navListEl.addEventListener("click", function (e) {
    if (e.target !== navListEl) {
      const mainEl = document.querySelector("main");

      mainEl.classList.remove(mainEl.className);

      switch (e.target.textContent) {
        case "Home":
          mainEl.classList.add("home-content");
          mainEl.innerHTML = _index__WEBPACK_IMPORTED_MODULE_0__["default"].mainEl.innerHTML;
          viewMenuBtn = document.querySelector(".view-menu-btn");
          viewMenuBtn.addEventListener("click", replaceInnerHTMLToMenuContent, {
            once: true,
          });
          break;
        case "Menu":
          mainEl.classList.add("menu-content");
          mainEl.innerHTML = _menu__WEBPACK_IMPORTED_MODULE_1__["default"].mainEl.innerHTML;
          break;
        case "Contact":
          mainEl.classList.add("contact-content");
          mainEl.innerHTML = _contact__WEBPACK_IMPORTED_MODULE_2__["default"].mainEl.innerHTML;
          break;
        default:
          break;
      }
    }
  });

  viewMenuBtn.addEventListener("click", replaceInnerHTMLToMenuContent, {
    once: true,
  });
};




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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhY3RDb250ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgY29uc3QgbWFpbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1haW5FbC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250ZW50XCIpO1xuICBtYWluRWwuaW5uZXJIVE1MID0gYFxuICA8aDIgY2xhc3M9XCJjb250YWN0LWhlYWRpbmdcIj5Db250YWN0IFVzPC9oMj5cbiAgPGFkZHJlc3MgY2xhc3M9XCJjb250YWN0LWluZm9ybWF0aW9uXCI+XG4gICAgPHVsPlxuICAgICAgPGxpPlxuICAgICAgICA8c3Bhbj5WaXNpdCB1cyBhdDo8L3NwYW4+XG4gICAgICAgIDEyMyBNYWluIFN0cmVldCwgU3VtbWVydmlsbGUsIE5ZIDc2MjM0XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8c3Bhbj5FbWFpbDo8L3NwYW4+XG4gICAgICAgIDxhIGhyZWY9XCJtYWlsdG86amltQHJvY2suY29tXCI+aXdhbm5hZWF0QHJvYXN0YnVyZ2Vycy5jb208L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8c3Bhbj5QaG9uZSBOdW1iZXI6PC9zcGFuPlxuICAgICAgICA8YSBocmVmPVwidGVsOisxMzExNTU1MjM2OFwiPigzMTEpIDU1NS0yMzY4PC9hPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICA8L2FkZHJlc3M+XG4gIGA7XG5cbiAgcmV0dXJuIHtcbiAgICBtYWluRWwsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBjb250YWN0Q29udGVudCBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgcGFnZUxvYWRlZCBmcm9tIFwiLi9wYWdlLWxvYWRcIjtcblxuY29uc3QgaG9tZUNvbnRlbnQgPSAoZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBjb25zdCBtYWluRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbkVsLmNsYXNzTGlzdC5hZGQoXCJob21lLWNvbnRlbnRcIik7XG4gIG1haW5FbC5pbm5lckhUTUwgPSBgXG4gIDxoMiBjbGFzcz1cImhvbWUtY29udGVudC1oZWFkaW5nXCI+XG4gICAgSHVuZ3J5XG4gICAgPHNwYW4+Pzwvc3Bhbj5cbiAgPC9oMj5cbiAgPHA+XG4gICAgRnJlZSBkcmluayAmIGZyaWVzXG4gICAgPHNwYW4+fDwvc3Bhbj5cbiAgICBObyB3YWl0aW5nXG4gICAgPHNwYW4+fDwvc3Bhbj5cbiAgICBEb29yIG9wZW5zIGF0IDkgcG1cbiAgPC9wPlxuICA8YSBjbGFzcz1cInZpZXctbWVudS1idG5cIiBocmVmPVwiI1wiPlZpZXcgbWVudTwvYT5cbiAgYDtcblxuICByZXR1cm4geyBtYWluRWwgfTtcbn0pKCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHBhZ2VMb2FkZWQsIHtcbiAgb25jZTogdHJ1ZSxcbn0pO1xuXG5leHBvcnQgeyBob21lQ29udGVudCBhcyBkZWZhdWx0IH07XG4iLCJjb25zdCBtZW51Q29udGVudCA9IChmdW5jdGlvbiAoKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGNvbnN0IG1haW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBtYWluRWwuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGVudFwiKTtcbiAgbWFpbkVsLmlubmVySFRNTCA9IGBcbiAgPHNlY3Rpb24gY2xhc3M9XCJtZW51XCI+XG4gICAgPGgyIGNsYXNzPVwibWVudS1oZWFkaW5nXCI+QmVlZiBCdXJnZXJzPC9oMj5cbiAgICA8ZGwgY2xhc3M9XCJtZW51LWxpc3RcIj5cbiAgICAgIDxkdCBjbGFzcz1cIm1lbnUtaXRlbS10aXRsZVwiPlxuICAgICAgICA8c3Bhbj5CZWVmIEJ1cmdlcjwvc3Bhbj5cbiAgICAgICAgPHNwYW4+JDU8L3NwYW4+XG4gICAgICA8L2R0PlxuICAgICAgPGRkIGNsYXNzPVwibWVudS1pdGVtLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgIEJlZWYgUGF0dHksIE9uaW9ucywgVG9tYXRvZXMsIFBpY2tsZXMsIExldHR1Y2UsIEtldGNodXAsIE1heW8sXG4gICAgICAgIE11c3RhcmRcbiAgICAgIDwvZGQ+XG4gICAgICA8ZHQgY2xhc3M9XCJtZW51LWl0ZW0tdGl0bGVcIj5cbiAgICAgICAgPHNwYW4+Q2hlZXNlIEJ1cmdlcjwvc3Bhbj5cbiAgICAgICAgPHNwYW4+JDY8L3NwYW4+XG4gICAgICA8L2R0PlxuICAgICAgPGRkIGNsYXNzPVwibWVudS1pdGVtLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgIEJlZWYgUGF0dHksIENoZWRkZXIgQ2hlZXNlLCBHcmlsbGVkIE9uaW9ucywgVG9tYXRvZXMsIFBpY2tsZXMsXG4gICAgICAgIExldHR1Y2UsIEtldGNodXAsIE1heW8sIE11c3RhcmRcbiAgICAgIDwvZGQ+XG4gICAgICA8ZHQgY2xhc3M9XCJtZW51LWl0ZW0tdGl0bGVcIj5cbiAgICAgICAgPHNwYW4+QmVlZiBCYWNvbjwvc3Bhbj5cbiAgICAgICAgPHNwYW4+JDc8L3NwYW4+XG4gICAgICA8L2R0PlxuICAgICAgPGRkIGNsYXNzPVwibWVudS1pdGVtLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgIEJlZWYgUGF0dHksIENoZWRkZXIgQ2hlZXNlLCBCZWVmIEJhY29uLCBHcmlsbGVkIE9uaW9ucywgVG9tYXRvZXMsXG4gICAgICAgIFBpY2tsZXMsIExldHR1Y2UsIEtldGNodXAsIE1heW8sIE11c3RhcmRcbiAgICAgIDwvZGQ+XG4gICAgICA8ZHQgY2xhc3M9XCJtZW51LWl0ZW0tdGl0bGVcIj5cbiAgICAgICAgPHNwYW4+Q3JlYW15IE11c2hyb29tPC9zcGFuPlxuICAgICAgICA8c3Bhbj4kODwvc3Bhbj5cbiAgICAgIDwvZHQ+XG4gICAgICA8ZGQgY2xhc3M9XCJtZW51LWl0ZW0tZGVzY3JpcHRpb25cIj5cbiAgICAgICAgQmVlZiBQYXR0eSwgQ3JlYW0gb2YgTXVzaHJvb20sIE1venphIENoZWVzZSwgR3JpbGxlZCBPbmlvbnMsIE1heW9cbiAgICAgIDwvZGQ+XG4gICAgICA8ZHQgY2xhc3M9XCJtZW51LWl0ZW0tdGl0bGVcIj5cbiAgICAgICAgPHNwYW4+SGF3YWlpYW4gQnVyZ2VyPC9zcGFuPlxuICAgICAgICA8c3Bhbj4kOTwvc3Bhbj5cbiAgICAgIDwvZHQ+XG4gICAgICA8ZGQgY2xhc3M9XCJtZW51LWl0ZW0tZGVzY3JpcHRpb25cIj5cbiAgICAgICAgQmVlZiBQYXR0eSwgR3JpbGxlZCBQaW5lYXBwbGUsIE1venphIENoZWVzZSwgT25pb25zLCBUb21hdG9lcyxcbiAgICAgICAgTGV0dHVjZSwgTWF5bywgQkJRIFNhdXNlXG4gICAgICA8L2RkPlxuICAgIDwvZGw+XG4gIDwvc2VjdGlvbj5cbiAgPHNlY3Rpb24gY2xhc3M9XCJtZW51XCI+XG4gICAgPGgyIGNsYXNzPVwibWVudS1oZWFkaW5nXCI+Q2hpY2tlbiBCdXJnZXJzPC9oMj5cbiAgICA8ZGwgY2xhc3M9XCJtZW51LWxpc3RcIj5cbiAgICAgIDxkdCBjbGFzcz1cIm1lbnUtaXRlbS10aXRsZVwiPlxuICAgICAgICA8c3Bhbj5TcGljeSBUYW5kb29yaTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+JDU8L3NwYW4+XG4gICAgICA8L2R0PlxuICAgICAgPGRkIGNsYXNzPVwibWVudS1pdGVtLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgIFRhbmRvb3JpIENoaWNrZW4sIENoZWRkZXIgQ2hlZXNlLCBHcmlsbGVkIE9uaW9ucyAmIFRvbWF0b2VzLFxuICAgICAgICBMZXR0dWNlLCBQaWNrbGVzLCBHYXJsaWMgU2F1c2UsIE1heW9cbiAgICAgIDwvZGQ+XG4gICAgICA8ZHQgY2xhc3M9XCJtZW51LWl0ZW0tdGl0bGVcIj5cbiAgICAgICAgPHNwYW4+U3BpY3kgQnVmZmFsbzwvc3Bhbj5cbiAgICAgICAgPHNwYW4+JDY8L3NwYW4+XG4gICAgICA8L2R0PlxuICAgICAgPGRkIGNsYXNzPVwibWVudS1pdGVtLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgIENyaXNweSBDaGlja2VuLCBNb3p6YSBDaGVlc2UsIEdyaWxsZWQgT25pb25zICYgVG9tYXRvZXMsIExldHR1Y2UsXG4gICAgICAgIEdhcmxpYyBTYXVzZSwgQnVmZmFsbyBTYXVzZSwgTWF5b1xuICAgICAgPC9kZD5cbiAgICAgIDxkdCBjbGFzcz1cIm1lbnUtaXRlbS10aXRsZVwiPlxuICAgICAgICA8c3Bhbj5CQlEgQ2hpY2tlbjwvc3Bhbj5cbiAgICAgICAgPHNwYW4+JDc8L3NwYW4+XG4gICAgICA8L2R0PlxuICAgICAgPGRkIGNsYXNzPVwibWVudS1pdGVtLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgIEdyaWxsZWQgQ2hpY2tlbiwgTW96emEgQ2hlZXNlLCBHcmlsbGVkIE9uaW9ucywgTGV0dHVjZSwgTWF5bywgQkJRXG4gICAgICAgIFNhdXNlXG4gICAgICA8L2RkPlxuICAgICAgPGR0IGNsYXNzPVwibWVudS1pdGVtLXRpdGxlXCI+XG4gICAgICAgIDxzcGFuPkNyaXNweSBDaGlja2VuPC9zcGFuPlxuICAgICAgICA8c3Bhbj4kODwvc3Bhbj5cbiAgICAgIDwvZHQ+XG4gICAgICA8ZGQgY2xhc3M9XCJtZW51LWl0ZW0tZGVzY3JpcHRpb25cIj5cbiAgICAgICAgQ3Jpc3B5IENoaWNrZW4sIENoZWRkZXIgQ2hlZXNlLCBHcmlsbGVkIE9uaW9ucyAmIFRvbWF0b2VzLFxuICAgICAgICBMZXR0dWNlLCBQaWNrbGVzLCBHYXJsaWMgU2F1c2UsIE1heW8sIENoaXBvdGxlIFNhdXNlXG4gICAgICA8L2RkPlxuICAgICAgPGR0IGNsYXNzPVwibWVudS1pdGVtLXRpdGxlXCI+XG4gICAgICAgIDxzcGFuPkNoaWNrZW4gUGFyYWRpc2U8L3NwYW4+XG4gICAgICAgIDxzcGFuPiQ5PC9zcGFuPlxuICAgICAgPC9kdD5cbiAgICAgIDxkZCBjbGFzcz1cIm1lbnUtaXRlbS1kZXNjcmlwdGlvblwiPlxuICAgICAgICBHcmlsbGVkIENoaWNrZW4sIE1venphIENoZWVzZSwgR3JpbGxlZCBQaW5lYXBwbGUsIExldHR1Y2UsIE9uaW9ucyxcbiAgICAgICAgSmFsYXBlbm9zLCBNYXlvLCBHYXJsaWMgU2F1c2VcbiAgICAgIDwvZGQ+XG4gICAgPC9kbD5cbiAgPC9zZWN0aW9uPlxuICBgO1xuXG4gIHJldHVybiB7IG1haW5FbCB9O1xufSkoKTtcblxuZXhwb3J0IHsgbWVudUNvbnRlbnQgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IGhvbWVDb250ZW50IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgbWVudUNvbnRlbnQgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGNvbnRhY3RDb250ZW50IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuY29uc3QgcGFnZUxvYWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgY29uc3QgY29udGVudEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnN0IGhlYWRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgaGVhZGVyRWwuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgaGVhZGVyRWwuaW5uZXJIVE1MID0gYFxuICA8aDEgY2xhc3M9XCJsb2dvXCI+XG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE3LjY2IDExLjJDMTcuNDMgMTAuOSAxNy4xNSAxMC42NCAxNi44OSAxMC4zOEMxNi4yMiA5Ljc4IDE1LjQ2IDkuMzUgMTQuODIgOC43MkMxMy4zMyA3LjI2IDEzIDQuODUgMTMuOTUgM0MxMyAzLjIzIDEyLjE3IDMuNzUgMTEuNDYgNC4zMkM4Ljg3IDYuNCA3Ljg1IDEwLjA3IDkuMDcgMTMuMjJDOS4xMSAxMy4zMiA5LjE1IDEzLjQyIDkuMTUgMTMuNTVDOS4xNSAxMy43NyA5IDEzLjk3IDguOCAxNC4wNUM4LjU3IDE0LjE1IDguMzMgMTQuMDkgOC4xNCAxMy45M0M4LjA4IDEzLjg4IDguMDQgMTMuODMgOCAxMy43NkM2Ljg3IDEyLjMzIDYuNjkgMTAuMjggNy40NSA4LjY0QzUuNzggMTAgNC44NyAxMi4zIDUgMTQuNDdDNS4wNiAxNC45NyA1LjEyIDE1LjQ3IDUuMjkgMTUuOTdDNS40MyAxNi41NyA1LjcgMTcuMTcgNiAxNy43QzcuMDggMTkuNDMgOC45NSAyMC42NyAxMC45NiAyMC45MkMxMy4xIDIxLjE5IDE1LjM5IDIwLjggMTcuMDMgMTkuMzJDMTguODYgMTcuNjYgMTkuNSAxNSAxOC41NiAxMi43MkwxOC40MyAxMi40NkMxOC4yMiAxMiAxNy42NiAxMS4yIDE3LjY2IDExLjJNMTQuNSAxNy41QzE0LjIyIDE3Ljc0IDEzLjc2IDE4IDEzLjQgMTguMUMxMi4yOCAxOC41IDExLjE2IDE3Ljk0IDEwLjUgMTcuMjhDMTEuNjkgMTcgMTIuNCAxNi4xMiAxMi42MSAxNS4yM0MxMi43OCAxNC40MyAxMi40NiAxMy43NyAxMi4zMyAxM0MxMi4yMSAxMi4yNiAxMi4yMyAxMS42MyAxMi41IDEwLjk0QzEyLjY5IDExLjMyIDEyLjg5IDExLjcgMTMuMTMgMTJDMTMuOSAxMyAxNS4xMSAxMy40NCAxNS4zNyAxNC44QzE1LjQxIDE0Ljk0IDE1LjQzIDE1LjA4IDE1LjQzIDE1LjIzQzE1LjQ2IDE2LjA1IDE1LjEgMTYuOTUgMTQuNSAxNy41SDE0LjVaXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICAgUm9hc3RcbiAgPC9oMT5cbiAgPG5hdiBjbGFzcz1cIm5hdlwiPlxuICAgIDx1bCBjbGFzcz1cIm5hdi1saXN0XCI+XG4gICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPjxhIGhyZWY9XCIjXCI+SG9tZTwvYT48L2xpPlxuICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj48YSBocmVmPVwiI1wiPk1lbnU8L2E+PC9saT5cbiAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+PGEgaHJlZj1cIiNcIj5Db250YWN0PC9hPjwvbGk+XG4gICAgPC91bD5cbiAgPC9uYXY+XG4gIGA7XG5cbiAgY29uc3QgbWFpbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1haW5FbC5jbGFzc0xpc3QuYWRkKFwiaG9tZS1jb250ZW50XCIpO1xuICBtYWluRWwuaW5uZXJIVE1MID0gYFxuICA8aDIgY2xhc3M9XCJob21lLWNvbnRlbnQtaGVhZGluZ1wiPlxuICAgIEh1bmdyeVxuICAgIDxzcGFuPj88L3NwYW4+XG4gIDwvaDI+XG4gIDxwPlxuICAgIEZyZWUgZHJpbmsgJiBmcmllc1xuICAgIDxzcGFuPnw8L3NwYW4+XG4gICAgTm8gd2FpdGluZ1xuICAgIDxzcGFuPnw8L3NwYW4+XG4gICAgRG9vciBvcGVucyBhdCA5IHBtXG4gIDwvcD5cbiAgPGEgY2xhc3M9XCJ2aWV3LW1lbnUtYnRuXCIgaHJlZj1cIiNcIj5WaWV3IG1lbnU8L2E+XG4gIGA7XG5cbiAgY29uc3QgZm9vdGVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBmb290ZXJFbC5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICBmb290ZXJFbC5pbm5lckhUTUwgPSBgXG4gIENvcHlyaWdodCAmY29weTsgMjAyMiBSdXNsYW4gVG9sZXVvdlxuICA8YVxuICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcnVzbGFudG9sZXVvdlwiXG4gICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgPlxuICAgIDxzdmcgY2xhc3M9XCJnaXRodWItaWNvblwiIHZpZXdCb3g9XCIwIDAgMjAgMTkuNTE1NDlcIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNIDEwLDAgQSAxMCwxMCAwIDAgMCAwLDEwIGMgMCw0LjQyIDIuODcsOC4xNyA2Ljg0LDkuNSAwLjUsMC4wOCAwLjY2LC0wLjIzIDAuNjYsLTAuNSAwLC0wLjIzIDAsLTAuODYgMCwtMS42OSBDIDQuNzMsMTcuOTEgNC4xNCwxNS45NyA0LjE0LDE1Ljk3IDMuNjgsMTQuODEgMy4wMywxNC41IDMuMDMsMTQuNSAyLjEyLDEzLjg4IDMuMSwxMy45IDMuMSwxMy45IGMgMSwwLjA3IDEuNTMsMS4wMyAxLjUzLDEuMDMgQyA1LjUsMTYuNDUgNi45NywxNiA3LjU0LDE1Ljc2IDcuNjMsMTUuMTEgNy44OSwxNC42NyA4LjE3LDE0LjQyIDUuOTUsMTQuMTcgMy42MiwxMy4zMSAzLjYyLDkuNSAzLjYyLDguMzkgNCw3LjUgNC42NSw2Ljc5IDQuNTUsNi41NCA0LjIsNS41IDQuNzUsNC4xNSBjIDAsMCAwLjg0LC0wLjI3IDIuNzUsMS4wMiAwLjc5LC0wLjIyIDEuNjUsLTAuMzMgMi41LC0wLjMzIDAuODUsMCAxLjcxLDAuMTEgMi41LDAuMzMgMS45MSwtMS4yOSAyLjc1LC0xLjAyIDIuNzUsLTEuMDIgMC41NSwxLjM1IDAuMiwyLjM5IDAuMSwyLjY0IDAuNjUsMC43MSAxLjAzLDEuNiAxLjAzLDIuNzEgMCwzLjgyIC0yLjM0LDQuNjYgLTQuNTcsNC45MSAwLjM2LDAuMzEgMC42OSwwLjkyIDAuNjksMS44NSAwLDEuMzQgMCwyLjQyIDAsMi43NCAwLDAuMjcgMC4xNiwwLjU5IDAuNjcsMC41IEMgMTcuMTQsMTguMTYgMjAsMTQuNDIgMjAsMTAgQSAxMCwxMCAwIDAgMCAxMCwwIFpcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgPC9hPlxuICBgO1xuXG4gIGNvbnRlbnRFbC5hcHBlbmQoaGVhZGVyRWwsIG1haW5FbCwgZm9vdGVyRWwpO1xuXG4gIGNvbnN0IG5hdkxpc3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWxpc3RcIik7XG4gIGxldCB2aWV3TWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlldy1tZW51LWJ0blwiKTtcblxuICBjb25zdCByZXBsYWNlSW5uZXJIVE1MVG9NZW51Q29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBtYWluRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBtYWluRWwuY2xhc3NMaXN0LnJlbW92ZShtYWluRWwuY2xhc3NOYW1lKTtcbiAgICBtYWluRWwuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGVudFwiKTtcbiAgICBtYWluRWwuaW5uZXJIVE1MID0gbWVudUNvbnRlbnQubWFpbkVsLmlubmVySFRNTDtcbiAgfTtcblxuICBuYXZMaXN0RWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICE9PSBuYXZMaXN0RWwpIHtcbiAgICAgIGNvbnN0IG1haW5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuXG4gICAgICBtYWluRWwuY2xhc3NMaXN0LnJlbW92ZShtYWluRWwuY2xhc3NOYW1lKTtcblxuICAgICAgc3dpdGNoIChlLnRhcmdldC50ZXh0Q29udGVudCkge1xuICAgICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgICAgIG1haW5FbC5jbGFzc0xpc3QuYWRkKFwiaG9tZS1jb250ZW50XCIpO1xuICAgICAgICAgIG1haW5FbC5pbm5lckhUTUwgPSBob21lQ29udGVudC5tYWluRWwuaW5uZXJIVE1MO1xuICAgICAgICAgIHZpZXdNZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWV3LW1lbnUtYnRuXCIpO1xuICAgICAgICAgIHZpZXdNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXBsYWNlSW5uZXJIVE1MVG9NZW51Q29udGVudCwge1xuICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIk1lbnVcIjpcbiAgICAgICAgICBtYWluRWwuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGVudFwiKTtcbiAgICAgICAgICBtYWluRWwuaW5uZXJIVE1MID0gbWVudUNvbnRlbnQubWFpbkVsLmlubmVySFRNTDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkNvbnRhY3RcIjpcbiAgICAgICAgICBtYWluRWwuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY29udGVudFwiKTtcbiAgICAgICAgICBtYWluRWwuaW5uZXJIVE1MID0gY29udGFjdENvbnRlbnQubWFpbkVsLmlubmVySFRNTDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHZpZXdNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXBsYWNlSW5uZXJIVE1MVG9NZW51Q29udGVudCwge1xuICAgIG9uY2U6IHRydWUsXG4gIH0pO1xufTtcblxuZXhwb3J0IHsgcGFnZUxvYWRlZCBhcyBkZWZhdWx0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9