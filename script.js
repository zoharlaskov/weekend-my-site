document.addEventListener("DOMContentLoaded", function () {
  const starFilter = document.getElementById("star-filter");
  const reviews = document.querySelectorAll(".review");

  function filterReviews() {
    const selectedStars = starFilter.value;
    reviews.forEach((review) => {
      const reviewStars = review.getAttribute("data-stars");
      if (selectedStars === "all" || reviewStars === selectedStars) {
        review.classList.add("visible");
      } else {
        review.classList.remove("visible");
      }
    });
  }

  starFilter.addEventListener("change", filterReviews);

  filterReviews();
});

const stars = document.querySelectorAll(".star-rating .fa");
const ratingValue = document.getElementById("ratingValue");

function setRating(rating) {
  stars.forEach((star) => {
    const starRating = star.getAttribute("data-rating");
    star.classList.toggle("active", starRating <= rating);
  });
  ratingValue.textContent = rating;
}

stars.forEach((star) => {
  star.addEventListener("click", function () {
    const rating = this.getAttribute("data-rating");
    setRating(rating);
  });

  star.addEventListener("mouseover", function () {
    const rating = this.getAttribute("data-rating");
    stars.forEach((s) => {
      const starRating = s.getAttribute("data-rating");
      s.style.color = starRating <= rating ? "gold" : "lightgray";
    });
  });

  star.addEventListener("mouseout", function () {
    stars.forEach((s) => {
      s.style.color = s.classList.contains("active") ? "gold" : "lightgray";
    });
  });
});
const blocks = document.querySelectorAll(".services");

blocks.forEach((block) => {
  block.addEventListener("mouseenter", () => {
    console.log(`${block.id} hovered`);
    block.style.color = "yellow";
  });

  block.addEventListener("mouseleave", () => {
    console.log(`${block.id} left`);
    block.style.color = "white";
  });
});
