// sticky header
const pageTop = document.querySelector(".page-top");

function headerObserver() {
  const options = {
    rootMargin: "0px",
    threshold: 1.0,
  };

  let observer = new IntersectionObserver(([e]) => {
    const action = e.intersectionRatio === 0 ? "add" : "remove";
    document.documentElement.classList[action]("is-scroll");
  }, options);

  observer.observe(pageTop);
}

headerObserver();

//responsive menu
const headerNav = document.querySelector(".header-menu");
const burgerMenu = document.querySelector(".burger-menu-container");
const body = document.body;

burgerMenu.addEventListener("click", () => {
  body.classList.toggle("menu-active");
});
document.addEventListener("click", (e) => {
  const $el = e.target;
  if ($el.tagName === "A" && $el.hash.startsWith("#")) {
    body.classList.remove("menu-active");
  }
});

// glide
document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    autoplay: 3500,
    hoverpause: true,
    perView: 3,
    animationDuration: 800,
    animationTimingFunc: "ease-in-out",
    breakpoints: {
      990: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      468: {
        perView: 1,
      },
    },
  }).mount();
});

//modal
const modal = document.getElementById("modal");
const btn = document.querySelector(".openModal");
const span = document.getElementById("closeModal");

btn.onclick = function () {
  modal.classList.add("show");
};

span.onclick = function () {
  modal.classList.remove("show");
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove("show");
  }
};
