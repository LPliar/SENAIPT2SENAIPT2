const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 400;

let score = 0;
document.getElementById("score").textContent = score;

let square = {
    x: Math.random() * (canvas.width - 30),
    y: Math.random() * (canvas.height - 30),
    size: 30,
    color: "red"
};

function drawSquare() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = square.color;
    ctx.fillRect(square.x, square.y, square.size, square.size);
}

function moveSquare() {
    square.x = Math.random() * (canvas.width - square.size);
    square.y = Math.random() * (canvas.height - square.size);
    drawSquare();
}

canvas.addEventListener("click", function(event) {
    let rect = canvas.getBoundingClientRect();
    let clickX = event.clientX - rect.left;
    let clickY = event.clientY - rect.top;

    if (
        clickX >= square.x &&
        clickX <= square.x + square.size &&
        clickY >= square.y &&
        clickY <= square.y + square.size
    ) {
        score++;
        document.getElementById("score").textContent = score;
        moveSquare();
    }
});

drawSquare();
