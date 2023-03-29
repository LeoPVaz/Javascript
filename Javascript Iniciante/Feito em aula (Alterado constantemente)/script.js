// Descontruindo Objetos

// let pessoa = {
//     nome: "Anna",
//     sobrenome: "Leite",
//     // idade: 19,
//     social:{
//         facebook:"AnnaMilk",
//         instagram:{
//             url:"@annaMilk",
//             seguidores:9800
//         }
//     },

// };

// function nomeCompleto ({nome, sobrenome}){
//     return `${nome} ${sobrenome}`;
// }

// let {nome, sobrenome , idade = Math.floor(Math.random() * (20 - 10 + 1) + 10 ), social:{instagram:{url:instagram, seguidores}, facebook} } = pessoa;

// console.log(nomeCompleto(pessoa))

// console.log( `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade}, me siga no Instagram ${instagram} ou no Facebook ${facebook}, eu tenho ${seguidores} seguidores no Instagram.`)

// let numeros = [1,2,3,4];

// let outros = [...numeros, 5,6,7,8];

let info = {
    nome: "Anna",
    sobrenome: "Leite",
    idade: Math.floor(Math.random * (30 - 20) + 20)
}

let novaInfo = {
    ...info,
    ciade: "Brasilia",
    estado: "DF",
    pais: "Brasil"
}

console.log(Object.keys(novaInfo));
console.log(Object.values(novaInfo));
console.log(Object.entries(novaInfo));


// function adicionar(nome,...novosNomes){

//     let conjuto = [
//         ...nome,
//         ...novosNomes
//     ];

//     return conjuto
// }

// let nome = ["Anna", "Julia", "Laura"];

// let outros = adicionar(nome, "Paulo", "Lucios","Arnold")

// console.log(outros)