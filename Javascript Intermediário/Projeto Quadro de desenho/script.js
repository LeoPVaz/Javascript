// Inicial Data
let currentColor = "black";
let canDraw = false;
let moveX = 0;
let moveY = 0;
let lastUsedColor = "";

let screen = document.querySelector("#tela");
let ctx = screen.getContext("2d");

// Events
document.querySelectorAll(".colorArea .color").forEach(item => {
    item.addEventListener("input", colorInputEvent);

});

document.querySelector(".last-color").addEventListener("click", selectLastUsedColor);

document.querySelector(".eraser").addEventListener("click", () => toggleEraser(true));

window.addEventListener("resize", () => {
    updataCanvasSize();
    redrawCanvas();
})

screen.addEventListener("mousedown", mouseDownEvent);
screen.addEventListener("mousemove", mouseMoveEvent);
screen.addEventListener("mouseup", mauseUpEvent);
screen.addEventListener("touchstart", touchStartEvent);
screen.addEventListener("touchmove", touchMoveEvent);
screen.addEventListener("touchend", touchEndEvent);
document.querySelector(".clear").addEventListener("click", claerScreen);

// Functions

function updataCanvasSize() {
    screen.width = screen.offsetWidth;
    screen.height = screen.offsetHeight;
}

updataCanvasSize()

function redrawCanvas() {
    const imageDate = ctx.getImageData(0, 0, screen.width, screen.height);
    ctx.clearRect(0, 0, screen.width, screen.height);
    updataCanvasSize();
    ctx.putImageData(imageDate, 0, 0);
}

function colorInputEvent(e) {
    currentColor = e.target.value;
    lastUsedColor = currentColor;

}

function selectLastUsedColor() {
    currentColor = lastUsedColor

    document.querySelector(".last-color").style.backgroundColor = currentColor;


}


function toggleEraser(erase) {
    isErasing = erase;

    if (isErasing) {
        currentColor = "white";
    }
}



function mouseDownEvent(e) {
    canDraw = true;
    moveX = e.pageX - screen.offsetLeft;
    moveY = e.pageY - screen.offsetTop;
    document.querySelector(".last-color").style.backgroundColor = currentColor;


}

function mouseMoveEvent(e) {
    if (canDraw) {
        draw(e.pageX - screen.offsetLeft , e.pageY - screen.offsetTop);
    }
}

function mauseUpEvent() {
    canDraw = false;
}

function touchStartEvent(e){
    canDraw = true;
    moveX = e.touches[0].clientX - screen.offsetLeft;
    moveY = e.touches[0].clientY - screen.offsetTop;
}

function touchMoveEvent(e){
    if(canDraw){
        draw(e.touches[0].clientX - screen.offsetLeft, e.touches[0].clientY - screen.offsetTop);
        e.preventDefault();
    }
}

function touchEndEvent(){
    canDraw = false;
}

function draw(x, y) {
    // let pointX = x - screen.offsetLeft;
    // let pointy = y - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.linejoin = "round";
    ctx.moveTo(moveX, moveY);
    ctx.lineTo(x,y);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    moveX = x;
    moveY = y;
}

function claerScreen() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}