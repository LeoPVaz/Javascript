let d = new Date();

d.setDate(d.getDate() + 542)

let novoValor = d;

var div = document.querySelector("#minhaDiv");

div.innerHTML += `<h1> ${novoValor} </h1>`;

console.log(novoValor);