function media() {
    var nota1 = document.querySelector(".nota1");
    var nota2 = document.getElementsByClassName("nota2");
    var nota3 = document.querySelector(".nota3");
    var nota4 = document.getElementsByClassName("nota4");
    var nota5 = document.querySelector(".nota5");

    let resutado = nota1 + nota2 + nota3 + nota4 + nota5 / 5;

    console.log("Media dos alunos: " + resutado)

};

// button.addEventlistener("click",function(){
//     media();
// });

console.log("OK")