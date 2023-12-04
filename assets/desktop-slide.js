const wrapper = document.querySelector('.featured-prod-slider')

let pressed = false
let startX = 0

wrapper.addEventListener('touchstart', function (e) {
  pressed = true
  startX = e.touches[0].clientX
})

wrapper.addEventListener('touchend', function () {
  pressed = false
})

wrapper.addEventListener('touchmove', function (e) {
  if (!pressed || e.touches.length !== 1) {
    return
  }

  this.scrollLeft += startX - e.touches[0].clientX
  startX = e.touches[0].clientX
})