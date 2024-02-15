document.querySelectorAll(".drum").forEach((item) => {
    item.addEventListener("click", playSound);
});

document.addEventListener("keydown", playSound);

function playSound(event) {
    var choice;

    if (event.type === "keydown") {
        choice = event.key.toLowerCase();
    } else if (event.type === "click") {
        choice = this.innerHTML;
    } else {
        return;
    }

    switch(choice) {
        case "w":
            //var wAudio = new Audio();
            //wAudio.play();
            alert("You've clicked W!");
        break;

        case "a":
            //var aAudio = new Audio();
            //aAudio.play();
            alert("You've clicked A!"); 
        break;

        case "d":
            //var dAudio = new Audio();
            //dAudio.play();
            alert("You've clicked D!");
        break;

        case "j":
            //var jAudio = new Audio();
            //jAudio.play();
            alert("You've clicked J!");
        break;

        case "k":
            //var kAudio = new Audio();
            //kAudio.play();
            alert("You've clicked K!");
        break;

        case "l":
            //var lAudio = new Audio();
            //lAudio.play();
            alert("You've clicked L!");
        break;

        default:
            break;
    }
}