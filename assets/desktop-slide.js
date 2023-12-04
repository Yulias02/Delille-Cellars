// const wrapper = document.querySelector('.featured-prod-slider')

// let pressed = false
// let startX = 0

// wrapper.addEventListener('mousedown', function (e) {
//   pressed = true
//   startX = e.clientX
//   this.style.cursor = 'grabbing'
// })

// wrapper.addEventListener('mouseleave', function (e) {
//   pressed = false
// })

// window.addEventListener('mouseup', function (e) {
//   pressed = false
//   wrapper.style.cursor = 'grab'
// })

// wrapper.addEventListener('mousemove', function (e) {
//   if(!pressed) {
//     return
//   }

//   this.scrollLeft += startX - e.clientX
// })

/*
  This JS is from the following project:
  https://github.com/bushblade/Full-Screen-Touch-Slider
*/

const slider = document.querySelector('.featured-prod-slider'),
  slides = Array.from(document.querySelectorAll('.featured-slide'))

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img')
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())

  // Touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)

})

// Disable context menu
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true

  }
}

function touchEnd() {
  isDragging = false


  const movedBy = currentTranslate - prevTranslate

  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

  slider.classList.remove('grabbing')
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}



function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
}