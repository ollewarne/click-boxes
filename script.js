const score = document.getElementById("score");
const countDown = document.getElementById("timer");
const grid = document.getElementById("grid");
const startButton = document.getElementById("start-button");
let scoreCount = 0;
let roundTimer = 30;
let boxInterval;


grid.addEventListener('click', function handleEvent(event) {
    if (event.target.classList.contains("item")) {
        if (event.target.style.backgroundColor === "green") {
            scoreCount++
            score.textContent = scoreCount;
            event.target.style.backgroundColor = "red";
        }
    }
})

startButton.addEventListener('click', () => {
    boxInterval = setInterval(changeColor, 1000);
    startButton.style.display = "none";
});

function changeColor() {
    let randIndex = Math.floor(Math.random() * grid.children.length)
    let item = [...grid.children][randIndex]
    item.style.backgroundColor = "green";
    setTimeout(changeBackColor, 500, item)
    roundTimer--
    countDown.textContent = roundTimer;
    if (roundTimer === 0) stopGame();
}

function changeBackColor(element) {
    element.style.backgroundColor = "red";
}

function stopGame() {
    clearInterval(boxInterval);
    grid.removeEventListener(handleEvent);
}
