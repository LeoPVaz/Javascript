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

        }
    }
}

function dragStart(){
    currTile = this;
}

function dragOver(e){
    e.preventDefaut();
}

function dragEnter(e){
    e.preventDefaut();
}

function dragLeave(){

}

function dragDrop(){
    otherTile = this;
}

function dragEnd(){
    let currImg = currTile.src;
    let otherTile = otherTile.src;

    currTile.src = otherImg;
    otherImg.src = currImg;
}