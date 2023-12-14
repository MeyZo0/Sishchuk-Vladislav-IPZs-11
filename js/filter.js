const filterButton = document.querySelectorAll(".nav__button");
const filterableCard = document.querySelectorAll(".portfolio__li");

const filterCard = (e) => {

  filterableCard.forEach((card) => {
    card.classList.add("hide");

    if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
      card.classList.remove("hide");
    }
  });
};

filterButton.forEach((button) => button.addEventListener("click", filterCard));