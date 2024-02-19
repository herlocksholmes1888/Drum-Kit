document.querySelectorAll(".drum").forEach((item) => {
    item.addEventListener("click", function(){
        var clicked = this.innerHTML;
        playSound(clicked);
        pressedButton(clicked);
    });
});

document.addEventListener("keydown", function(event){
    playSound(event.key);
    pressedButton(event.key);
});

function playSound(choice) {
    switch(choice) {
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
            new Audio("sounds/snare.mp3").play();
            break;

        case "k":
            new Audio("sounds/crash.mp3").play();
            break;

        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;

        default:
            break;
    }
}

function pressedButton(currentButton) {
    var activeButton = document.querySelector("." + currentButton);
    activeButton.classList.add("pressed");
    setTimeout(function(){ activeButton.classList.remove("pressed") }, 100);
}