var rows = 3;
var columns = 3;

var currTile;
var otherTile; // blank title

var turns = 0;

var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Função para gerar um número aleatório entre -1 e 1
function randomCompare() {
    return Math.random() - 0.5;
}

var element7 = imgOrder.splice(6, 1)[0];

// Randomize os elementos do array utilizando a função de comparação aleatória
imgOrder.sort(randomCompare);

imgOrder.splice(6, 0, element7);

console.log(imgOrder);

window.onload = function () {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            //<img id = "0-0">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "assets/" + imgOrder.shift() + ".png";

            document.getElementById("board").append(tile);

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

            document.getElementById("board").append(tile);

        }
    }
}

function dragStart() {
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this;
}

function dragEnd() {

    if(!otherTile.src.includes("assets/7.png")){
        return;
    }

    let currCoords = currTile.id.split("-");
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = r == r2 && c2 == c - 1;
    let moveRight = r == r2 && c2 == c + 1;

    let moveUp = c == c2 && r2 == r - 1;
    let moveDown = c == c2 && r2 == r + 1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;

        document.getElementById("turns").innerText = turns;
    }

}