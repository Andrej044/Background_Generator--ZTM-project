let hexCss = document.querySelector(".hexCss");
let rgbaCss = document.querySelector(".rgbCss");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector("body");

// input values equal CSS background-image property 
// start
let rgb = window.getComputedStyle(body).getPropertyValue("background-image");
rgb = rgb.replace(/[^\d,]/g, '').split(',');

color1.value = rgbToHex(Number(rgb[1]), Number(rgb[2]), Number(rgb[3]));
color2.value = rgbToHex(Number(rgb[4]), Number(rgb[5]), Number(rgb[6]));

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
//end



function getInputValue(){
  body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
  hexCss.textContent = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
  rgbaCss.textContent = body.style.background
}

color1.addEventListener("input", getInputValue);
color2.addEventListener("input", getInputValue);
