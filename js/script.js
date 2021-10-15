var buttonElement = document.querySelector('.button') 
var popupContainersElement = document.querySelector('.popup-containers')
var closedButtonElement = document.querySelector('.closed')

buttonElement.addEventListener(
    'click', function () {
        popupContainersElement.classList.remove('popup-containers-hidden')
    }
)

closedButtonElement.addEventListener(
    'click', function () {
        popupContainersElement.classList.add('popup-containers-hidden')
    }
) 
popupContainersElement.addEventListener(
    'click', function () {
        popupContainersElement.classList.add('popup-containers-hidden')
    }
) 

var slider = document.querySelector('.slider-list')
var slides = document.querySelectorAll('.slider-item')
var nextSliderButtonElement = document.querySelector('.slider-button-next')
var prevSliderButtonElement = document.querySelector('.slider-button-prev')

if (slider) {
    slides.forEach(function (slide, i) {
        slide.style.left = `calc(${100 * i}% + ${160 * i}px)`
    })
    
    var activeIndex = 0
    var currentLeft = 0
    nextSliderButtonElement.addEventListener('click', function () {
        slides.forEach(function(slide, i){
            if (slide.classList.contains('active')) {
                activeIndex = i + 1 
                slide.classList.remove('active')
            }
        })
        if (slides[activeIndex]) {
            slides[activeIndex].classList.add('active')
        } else { 
            activeIndex = 0
            slides[activeIndex].classList.add('active')
        }
        currentLeft = 62 * activeIndex
        slider.style.left = `-${currentLeft}%`
    })
    prevSliderButtonElement.addEventListener('click', () => {
        slides.forEach(function(slide, i){
            if (slide.classList.contains('active')) {
                activeIndex = i - 1
                slide.classList.remove('active')
            }
        })
        if (slides[activeIndex]) {
            slides[activeIndex].classList.add('active')
        } else {
            activeIndex = slides.length - 1
            slides[activeIndex].classList.add('active')
        }
        slider.style.left = `${currentLeft - (62 * activeIndex)}%`
    })
}