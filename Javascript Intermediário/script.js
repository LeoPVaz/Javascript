function validar() {
    var valor = document.getElementById("numero").value;

    if (valor.length > 2) {
        alert("Você digitou um numero com mais de dois algarisomo!")
        return false;
    } else {
        return true;
    }
}