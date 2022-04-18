import pageLoaded from "./page-load";

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

document.addEventListener("DOMContentLoaded", pageLoaded, {
  once: true,
});

export { homeContent as default };
