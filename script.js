let hexCss = document.querySelector(".hexCss");
let rgbaCss = document.querySelector(".rgbCss");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector("body");


function getInputValue(){
  body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
  hexCss.textContent = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
  rgbaCss.textContent = body.style.background
}

color1.addEventListener("input", getInputValue);
color2.addEventListener("input", getInputValue);
