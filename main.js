// JavaScript code
window.onload = function () {
  addColor();
};

function createBox() {
  const box = document.createElement("div");
  box.classList.add("box");
  return box;
}

const container = document.querySelector(".container");

for (let i = 0; i < 9; i++) {
  const box = createBox();
  container.appendChild(box);
}

const btn = document.querySelector(".btn");

function randomHexColorCode() {
  var chars = "0123456789abcdef";
  var colorLength = 6;
  var color = "#";

  for (var i = 0; i < colorLength; i++) {
    var randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor + 1);
  }
  return color;
}

function addColor() {
  const randomColorBlock = document.querySelectorAll(".box");
  randomColorBlock.forEach((e) => {
    var newColor = randomHexColorCode();
    e.style.backgroundColor = newColor;
    e.innerHTML = newColor;
  });
}

btn.addEventListener("click", addColor);
