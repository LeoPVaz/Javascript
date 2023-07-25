// Inicial Data
let currentColor = "black";
let canDraw = false;
let mouseX = 0;
let mouseY = 0;
let lastUsedColor = "";
let lastUsedNonEraserColor = "black";

let screen = document.querySelector("#tela");
let ctx = screen.getContext("2d");

// Events
document.querySelectorAll(".colorArea .color").forEach(item => {
    item.addEventListener("input", colorInputEvent);
    // item.addEventListener("click", colorClickEvent);

});

document.querySelector(".last-color").addEventListener("click", selectLastUsedColor);

document.querySelector(".eraser").addEventListener("click", () => toggleEraser(true));


screen.addEventListener("mousedown", mouseDownEvent);
screen.addEventListener("mousemove", mouseMoveEvent);
screen.addEventListener("mouseup", mauseUpEvent);
document.querySelector(".clear").addEventListener("click", claerScreen);

// Functions
function colorInputEvent(e) {
    currentColor = e.target.value;
    lastUsedColor = currentColor;

}

function selectLastUsedColor() {
    currentColor = lastUsedColor
    if (lastUsedColor !== "white") {
        document.querySelector(".last-color").style.backgroundColor = currentColor;
    }

}

// function colorClickEvent(e) {
//     let color = e.target.getAttribute("data-color");
//     currentColor = color;
//     document.querySelector(".color.active").classList.remove("active");
//     e.target.classList.add("active");
// }

function toggleEraser(erase) {
    isErasing = erase;

    if (isErasing) {
        currentColor = "white";
    }
}



function mouseDownEvent(e) {
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
    document.querySelector(".last-color").style.backgroundColor = currentColor;


}

function mouseMoveEvent(e) {
    if (canDraw) {
        draw(e.pageX, e.pageY);
    }
}

function mauseUpEvent() {
    canDraw = false;
}

function draw(x, y) {
    let pointX = x - screen.offsetLeft;
    let pointy = y - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.linejoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointy);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointy;
}

function claerScreen() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}