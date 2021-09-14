const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

// activeSlide is a counter of the position of the image in the array of slides//
let activeSlide = 0
// it sums an unit tho the counter if the right btn is clicked//
rightBtn.addEventListener('click', () => {
  activeSlide++
/* if the number of clicks to the right is more
 than the number of slides in the arrays of slides return the counter of clicks to the position*/

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }
  
  setBgToBody()
  setActiveSlides()

  
})

// it substracts an unit tho the counter if the right btn is clicked//
leftBtn.addEventListener('click', () => {
  activeSlide--
  
  if (activeSlide < 0 ) {
    activeSlide = slides.length - 1
    console.log(activeSlide)
  }
  console.log(slides.length)
  setBgToBody()
  setActiveSlides()
})

setBgToBody()


function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlides() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}
