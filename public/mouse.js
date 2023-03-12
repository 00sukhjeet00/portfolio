let coords = { x: 0, y: 0 };
const circels = document.querySelectorAll(".circle");
const colors = [
  "#9333ea",
  "#8a40ee",
  "#814af1",
  "#7853f4",
  "#705bf6",
  "#6762f7",
  "#5e68f8",
  "#566ef9",
  "#4e73f9",
  "#4679f8",
  "#407df7",
  "#3b82f6",
];
circels.forEach(function (elem, index) {
  elem.x = 0;
  elem.y = 0;
  elem.style.backgroundColor = colors[index % colors.length];
});
window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});
function animaMouse() {
  circels.forEach(function (elem, index) {
    elem.style.left = coords.x - 12 + "px";
    elem.style.top = coords.y - 12 + "px";
    // elem.style.scale = (circels.length - index) / circels.length;
    elem.x = coords.x;
    elem.y = coords.y;
    const nextCircle = circels[index + 1] || circels[0];
    coords.x += (nextCircle.x - coords.x) * 0.6;
    coords.y += (nextCircle.y - coords.y) * 0.6;
  });
  requestAnimationFrame(animaMouse);
}
animaMouse();
