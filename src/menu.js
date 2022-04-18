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

export { menuContent as default };
