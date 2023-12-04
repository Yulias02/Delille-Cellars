const wrapper = document.querySelector('.featured-prod-slider');

let pressed = false;
let startX = 0;

wrapper.addEventListener('mousedown', function (e) {
  pressed = true;
  startX = e.clientX;
  this.style.cursor = 'grabbing';
});

wrapper.addEventListener('touchstart', function (e) {
  pressed = true;
  startX = e.touches[0].clientX;
  this.style.cursor = 'grabbing';
});

wrapper.addEventListener('mouseleave', function () {
  pressed = false;
});

window.addEventListener('mouseup', function () {
  pressed = false;
  wrapper.style.cursor = 'grab';
});

wrapper.addEventListener('touchend', function () {
  pressed = false;
  wrapper.style.cursor = 'grab';
});

wrapper.addEventListener('mousemove', function (e) {
  if (!pressed) {
    return;
  }
  this.scrollLeft += startX - e.clientX;
});

wrapper.addEventListener('touchmove', function (e) {
  if (!pressed) {
    return;
  }
  this.scrollLeft += startX - e.touches[0].clientX;
});
