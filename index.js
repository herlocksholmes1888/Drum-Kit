document.querySelectorAll(".drum").forEach((item) => {
    item.addEventListener("click", playSound);
});

document.addEventListener("keydown", playSound);

function playSound() {
    alert("I was clicked!");
}