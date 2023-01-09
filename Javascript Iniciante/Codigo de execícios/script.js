function media() {
    var nota1 = parseFloat(document.querySelector(".nota1").value);
    var nota2 = parseFloat(document.querySelector(".nota2").value);
    var nota3 = parseFloat(document.querySelector(".nota3").value);
    var nota4 = parseFloat(document.querySelector(".nota4").value);
    var nota5 = parseFloat(document.querySelector(".nota5").value);

    let resutado = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

    var resutadoElemento = document.getElementById("resultado");

    resutadoElemento.innerHTML = "Media dos Alunos: " + resutado;

    console.log("Media dos alunos: " + resutado)

};



console.log("OK")