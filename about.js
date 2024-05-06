document.addEventListener("DOMContentLoaded", () => {
  const hobbyCards = document.querySelectorAll(".hobby-card");

  hobbyCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.backgroundColor = "silver"; 
    });

    card.addEventListener("mouseleave", () => {
      card.style.backgroundColor = "#f9f9f9"; 
    });
  });
});
