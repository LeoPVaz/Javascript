let lista = [
    {id:1, nome:"Anna", sobrenome:"Schmidt"},
    {id:2, nome:"Julia", sobrenome:"Blanc"},
    {id:3, nome:"Laura", sobrenome:"Silva"}
];

let pessoa = lista.find(function(item){
    return (item.sobrenome == "Blanc") ? true : false;
})

const obj = JSON.stringify(lista)

var div = document.querySelector("#minhaDiv");

div.innerHTML += `<h1> ${obj} </h1>`;

console.log(pessoa);