"use strict";

const star = document.querySelector(".star svg");
const btnStar = document.querySelector(".star");

const heart = document.querySelector(".heart svg");
const btnHeart = document.querySelector(".heart");

btnStar.addEventListener("click", function () {
  star.classList.toggle("like");
});

btnHeart.addEventListener("click", function () {
  heart.classList.toggle("like");
});
