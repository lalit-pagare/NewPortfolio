const work = document.querySelector("#work");
const about = document.querySelector("#about");
const home = document.querySelector("#home");

work.addEventListener("click", function () {
  window.location.href = "./pages/work.html";
});
about.addEventListener("click", function () {
  window.location.href = "./pages/about.html";
});
home.addEventListener("click", function () {
  window.location.href = "./index.html";
});
