// let d = new Date();

// d.setDate(d.getDate() + 542)

// let novoValor = d;

// var div = document.querySelector("#minhaDiv");

// div.innerHTML += `<h1> ${novoValor} </h1>`;

// console.log(novoValor);
// let timer;

// function comecar(){
//     timer = setInterval(showTime, 1000) ;
// }
// function parar(){
//     clearInterval(timer);
// }



// function showTime() {
//     let d = new Date();
//     let h = d.getHours();
//     let m = d.getMinutes();
//     let s = d.getSeconds();
//     let txt = h + ":" + m + ":" + s;

//     document.querySelector(".demo").innerHTML =`<h2> ${txt} </h2>`;
// }

let timer;
function rodar(){
    timer =setTimeout(function(){
        document.querySelector(".demo").innerHTML= "Rodou!";
    }, 2000);
}
function parar(){
    clearInterval(timer);
}