const box = document.getElementById('box');
let isDragging = false;

box.addEventListener('mousedown', (event) => {
  isDragging = true;
  console.log('Mouse down inside the box.');
});

box.addEventListener('mousemove', (event) => {
  if (isDragging) {
    console.log('Mouse is dragging inside the box.');
  }
});

document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    console.log('Mouse up after dragging inside the box.');
  }
});