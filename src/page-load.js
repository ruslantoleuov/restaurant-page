import homeContent from "./index";
import menuContent from "./menu";
import contactContent from "./contact";

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
    mainEl.innerHTML = menuContent.mainEl.innerHTML;
  };

  navListEl.addEventListener("click", function (e) {
    if (e.target !== navListEl) {
      const mainEl = document.querySelector("main");

      mainEl.classList.remove(mainEl.className);

      switch (e.target.textContent) {
        case "Home":
          mainEl.classList.add("home-content");
          mainEl.innerHTML = homeContent.mainEl.innerHTML;
          viewMenuBtn = document.querySelector(".view-menu-btn");
          viewMenuBtn.addEventListener("click", replaceInnerHTMLToMenuContent, {
            once: true,
          });
          break;
        case "Menu":
          mainEl.classList.add("menu-content");
          mainEl.innerHTML = menuContent.mainEl.innerHTML;
          break;
        case "Contact":
          mainEl.classList.add("contact-content");
          mainEl.innerHTML = contactContent.mainEl.innerHTML;
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

export { pageLoaded as default };
