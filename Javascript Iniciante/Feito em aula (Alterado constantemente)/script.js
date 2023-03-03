let lista = ["Ovo", "Leite", "Chocolate em pó", "Farinha", "Fermento"];

lista[lista.length] = "Manteiga";

let res = lista.join("_");

var div = document.querySelector("#minhaDiv");

div.innerHTML += `<h1> ${res} </h1>`;

console.log(res);