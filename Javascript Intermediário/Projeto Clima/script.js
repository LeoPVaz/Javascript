document.querySelector(".busca").addEventListener("submit", async (event) => {
    event.preventDefault();

    let input = document.querySelector("#searchInput").value

    console.log(input)

    if (input !== "") {
        showWarning("Carregando...")

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=95d0315c872e0cbb81184f16031efd30&units=metric&lang=pt_br`;

        let resultado = await fetch(url);
        let json = await resultado.json();

        console.log(json);
    }
})

function showWarning(msg) {
    document.querySelector(".aviso").innerHTML = msg;
}