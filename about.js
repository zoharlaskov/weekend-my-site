document.addEventListener("DOMContentLoaded", () => {
  const hobbyCards = document.querySelectorAll(".hobby-card");

  hobbyCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.backgroundColor = "silver"; // light cyan on hover
    });

    card.addEventListener("mouseleave", () => {
      card.style.backgroundColor = "#f9f9f9"; // default color
    });
  });
});
