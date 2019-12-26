const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImg(imgNumber) {
    const image = new Image();
    switch (imgNumber) {
        case 0 :
            image.src = `images/Beans.jpg`
            break;
        case 1 :
            image.src = `images/Bridge.jpg`
            break;
        case 2 :
            image.src = `images/Cocoa.jpg`
            break;
        case 3 :
            image.src = `images/Coffee.jpg`
            break;
        default :
            image.src = `images/Stairs.jpg`
    }
    image.classList.add("bgImage");
    body.appendChild(image);
}

function getRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = getRandom();
    paintImg(randomNumber);
}

init();