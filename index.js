let drumButtons = document.querySelectorAll(".drum");
let numberOfDrumButtons = drumButtons.length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    drumButtons[i].addEventListener("click", function () {
        let buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
};

document.addEventListener("keydown", function () {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/crash.mp3").play();
            break;
        case "k":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case "l":
            new Audio("sounds/snare.mp3").play();
            break;
    }
};

function buttonAnimation (key) {
    let activeButton = document.querySelector(`.${key}`);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
};