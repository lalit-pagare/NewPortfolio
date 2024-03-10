if (window.screen.width < "800") {
  document.querySelector("#mobile").style.display = "block";
  document.querySelector("#main").style.display = "none";
} else {
  document.querySelector("#mobile").style.display = "none";
  document.querySelector("#main").style.display = "block";
}
const bar1 = document.querySelector("#progress-bar1");
const bar2 = document.querySelector("#progress-bar2");
const bar3 = document.querySelector("#progress-bar3");
const bar4 = document.querySelector("#progress-bar4");
const bar5 = document.querySelector("#progress-bar5");
const bar6 = document.querySelector("#progress-bar6");
const bar7 = document.querySelector("#progress-bar7");
const bar8 = document.querySelector("#progress-bar8");
const bar9 = document.querySelector("#progress-bar9");
const bar10 = document.querySelector("#progress-bar10");
const bar11 = document.querySelector("#progress-bar11");
const bar12 = document.querySelector("#progress-bar12");
const bar13 = document.querySelector("#progress-bar13");
const bar14 = document.querySelector("#progress-bar14");
const bar15 = document.querySelector("#progress-bar15");
const bar16 = document.querySelector("#progress-bar16");
const bar17 = document.querySelector("#progress-bar17");
const bar18 = document.querySelector("#progress-bar18");
const bar19 = document.querySelector("#progress-bar19");
const bar20 = document.querySelector("#progress-bar20");
const bar21 = document.querySelector("#progress-bar21");
const bar22 = document.querySelector("#progress-bar22");
const bar23 = document.querySelector("#progress-bar23");
const heading = document.querySelector("h1");
const nav = document.querySelector("nav");
const social = document.querySelector("#social");
const navIcon = document.querySelector("li");

const secondPage = document.querySelector("#skills");
secondPage.addEventListener("mouseover", function () {
  bar1.style.width = "60%";
  bar2.style.width = "70%";
  bar3.style.width = "50%";

  bar4.style.width = "60%";
  bar5.style.width = "80%";
  bar6.style.width = "85%";

  bar7.style.width = "85%";
  bar8.style.width = "50%";
  bar9.style.width = "40%";

  bar10.style.width = "70%";
  setInterval(function () {
    bar11.style.width = "60%";
    bar12.style.width = "30%";
    bar13.style.width = "30%";

    bar14.style.width = "40%";
    bar15.style.width = "50%";
    bar16.style.width = "90%";

    bar17.style.width = "80%";
    bar18.style.width = "10%";
    bar19.style.width = "60%";

    bar20.style.width = "50%";
    bar21.style.width = "70%";
    bar22.style.width = "50%";
    bar23.style.width = "40%";
  }, 2000);
});

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

heading.addEventListener("mousemove", function () {
  document.querySelector("#cursor").style.height = "100px";
  document.querySelector("#cursor").style.width = "100px";
});
nav.addEventListener("mousemove", function () {
  document.querySelector("#cursor").style.height = "25px";
  document.querySelector("#cursor").style.width = "25px";
});
social.addEventListener("mousemove", function () {
  document.querySelector("#cursor").style.height = "25px";
  document.querySelector("#cursor").style.width = "25px";
});
secondPage.addEventListener("mousemove", function () {
  document.querySelector("#cursor").style.height = "30px";
  document.querySelector("#cursor").style.width = "30px";
  // document.querySelector("#cursor").style.zIndex = "3";
});
let test = [
  "FULL STACK WEB ",
  "MERN STACK WEB ",
  "FRONT-END WEB ",
  "BACK-END WEB ",
];
let endValue = 1;
isForward = true;
let index = 0;

let id = setInterval(function () {
  text.textContent = test[index].substring(0, endValue);
  if (isForward) {
    endValue++;
  } else {
    endValue--;
  }
  if (endValue > test.length + 20) {
    // console.log(test.length);
    // window.clearInterval(id);
    // endValue = 1;
    isForward = false;
  }
  if (endValue < 0) {
    isForward = true;
    index++;
  }
  if (index == test.length) {
    index = 0;
  }
}, 50);
