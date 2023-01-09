const caucular = () => {
    const carga = document.getElementById("carga").value;
    const series = document.getElementById("series").value;
    const repeticoes = document.getElementById("repeticoes").value;

    const soma = parseFloat(carga) * parseFloat(series) * parseFloat(repeticoes);

    document.getElementById("resultado").innerHTML = "Resultado: " + soma;

};
