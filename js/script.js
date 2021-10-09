var buttonElement = document.querySelector ('.button') 
var popupContainersElement = document.querySelector ('.popup-containers')

buttonElement .addEventListener (
    '.click', function () {
        popupContainersElement.classList.remove ('.popup-containers-hidden')
    }
)