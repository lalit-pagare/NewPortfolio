const nav = document.querySelector("nav");
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp: 0.07,
});

const heading = document.querySelector("h1");
const cursor = document.querySelector("#cursor");
const text = document.querySelector("#change-text");
document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + -12 + "px";
  cursor.style.top = dets.y + -12 + "px";
  // console.log(dets);
});
document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + -12 + "px";
  cursor.style.top = dets.y + -12 + "px";
  // console.log(dets);
});
heading.addEventListener("mousemove", function () {
  document.querySelector("#cursor").style.height = "40px";
  document.querySelector("#cursor").style.width = "40px";
});
nav.addEventListener("mousemove", function () {
  document.querySelector("#cursor").style.height = "25px";
  document.querySelector("#cursor").style.width = "25px";
});
const para = document.querySelector("p");
para.addEventListener("mousemove", function () {
  document.querySelector("#cursor").style.height = "25px";
  document.querySelector("#cursor").style.width = "25px";
});
