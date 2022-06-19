"use strict";
function changeBackgroundColor() {
    let newColor = colors[Math.floor(Math.random() * colorsIndex)];
    while (body.style.backgroundColor == newColor) {
        newColor = colors[Math.floor(Math.random() * colorsIndex)];
    }
    body.style.backgroundColor = newColor;
    color.innerHTML = newColor;
    color.style.color = newColor;
}
let body = document.getElementById("body");
let colors = ["blue", "green", "orange", "purple", "red", "yellow", "pink"];
let colorsIndex = colors.length - 1;
let color = document.getElementById("colorId");
let btn = document.getElementById("colorBtn");
btn.addEventListener("click", changeBackgroundColor);
