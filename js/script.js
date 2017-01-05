// TEMPORARY UNDER CONSTRUCTION NOTIFY BAR

var rectangle = document.getElementById("rectangle");
var closeLink = document.getElementById("close");

setTimeout(showRectangle, 1500);

closeLink.onclick = hideRectangle;

function showRectangle() {
  rectangle.classList.remove("hidden");
}

function hideRectangle() {
  rectangle.classList.add("hidden");
}