const exp = document.querySelector("h1");
const quolomb = document.querySelector("#quolomb");
const nav = document.querySelector("nav");
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp: 0.07,
});

const cursor = document.querySelector("#cursor");
const text = document.querySelector("#change-text");
document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + -12 + "px";
  cursor.style.top = dets.y + -12 + "px";
  console.log(dets);
});
exp.addEventListener("mousemove", function () {
  document.querySelector("#cursor").style.height = "50px";
  document.querySelector("#cursor").style.width = "50px";
});
quolomb.addEventListener("mousemove", function () {
  document.querySelector("#cursor").style.height = "30px";
  document.querySelector("#cursor").style.width = "30px";
});
nav.addEventListener("mousemove", function () {
  document.querySelector("#cursor").style.height = "25px";
  document.querySelector("#cursor").style.width = "25px";
});
