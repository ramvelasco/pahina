// ======================//
// PAH/NA homepage script
// ======================//

// === 1. Mobile menu (hamburger button) ===

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
  // when the button is clicked, show or hide the menu
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("open");

    // tell screen readers if the menu is open or closed
    const isOpen = navLinks.classList.contains("open");
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });
}

// === 2. Color swatches on the product cards ===

// clicking a color highlights it (only one per card)
const allCards = document.querySelectorAll(".home-product-card");

allCards.forEach(function (card) {
  const swatches = card.querySelectorAll(".swatch");

  swatches.forEach(function (swatch) {
    swatch.setAttribute("aria-pressed", "false"); // starting state for screen readers

    swatch.addEventListener("click", function () {
      // remove the highlight from the other swatches in this card
      swatches.forEach(function (s) {
        s.classList.remove("selected");
        s.setAttribute("aria-pressed", "false");
      });
      // highlight the one that was clicked
      swatch.classList.add("selected");
      swatch.setAttribute("aria-pressed", "true");
    });
  });
});

// === 3. Footer year ===
// updates the year automatically
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
