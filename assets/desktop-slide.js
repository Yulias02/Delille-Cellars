const wrapper = document.querySelector('.featured-prod-slider')

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
  pressed = true
  startX = e.clientX
  this.style.cursor = 'grabbing'
})

wrapper.addEventListener('mouseleave', function (e) {
  pressed = false
  this.style.cursor = 'grab'
})

window.addEventListener('mouseup', function (e) {
  pressed = false
  wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
  if (!pressed) {
    return
  }

  this.scrollLeft += startX - e.clientX
})

wrapper.addEventListener('touchstart', function (e) {
  pressed = true
  startX = e.touches[0].clientX
})

wrapper.addEventListener('touchend', function (e) {
  pressed = false
})

wrapper.addEventListener('touchmove', function (e) {
  if (!pressed) {
    return
  }

  this.scrollLeft += startX - e.touches[0].clientX
})

