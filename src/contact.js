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

export { contactContent as default };
