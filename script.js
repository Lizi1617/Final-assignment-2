let burger = document.querySelector(".fa-bars");
let xmark = document.querySelector(".fa-xmark");
let header_nav = document.querySelector(".header_nav");

burger.addEventListener("click", () => {
  header_nav.classList.add("show");
  burger.style.display = "none";
  xmark.style.display = "block";
});

xmark.addEventListener("click", () => {
  header_nav.classList.remove("show");
  burger.style.display = "block";
  xmark.style.display = "none";
});