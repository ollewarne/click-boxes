const score = document.getElementById("score");
const grid = document.getElementById("grid");
let scoreCount = 0;


grid.addEventListener('click', (event) => {
    if (event.target.classList.contains("item")) {
        if (event.target.style.backgroundColor === "green") {
            scoreCount++
            score.textContent = scoreCount;
            event.target.style.backgroundColor = "red";
        }
    }
})

const boxTimer = setInterval(changeColor, 1000)

function changeColor() {
    let randIndex = Math.floor(Math.random() * grid.children.length)
    let item = [...grid.children][randIndex]
    item.style.backgroundColor = "green";
    setTimeout(changeBackColor, 500, item)
}

function changeBackColor(element) {
    element.style.backgroundColor = "red";
}
