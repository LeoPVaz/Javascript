document.querySelector(".busca").addEventListener("submit", async (event) => {
    event.preventDefault();

    let input = document.querySelector("#searchInput").value

    console.log(input)

    if (input !== "") {
        claerInfo();
        
        showWarning("Carregando...")
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=95d0315c872e0cbb81184f16031efd30&units=metric&lang=pt_br`;

        let resultado = await fetch(url);
        let json = await resultado.json();

        console.log(json)

        if (json.cod === 200) {
            
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                max: json.main.temp_max,
                min: json.main.temp_min,
                sensacao:json.main.feels_like,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            });
            tempBk(json.main.temp);
        } else {
            claerInfo();
            showWarning("Não emcontramos esta localização.");
        }
    } else {
        claerInfo()
    }
});

function tempBk(temperatura){
    if( temperatura >= 30){
         document.querySelector("body").style.backgroundColor = "red";
    }else if(temperatura >= 20){
        document.querySelector("body").style.backgroundColor = "orange";
    }else {
        document.querySelector("body").style.backgroundColor = "blue";
    }
}

function showInfo(json) {
    showWarning("");

    document.querySelector(".titulo").innerHTML = `${json.name}, ${json.country}`;
    document.querySelector(".tempInfo").innerHTML = `${json.temp} <sup>°C</sup>`;
    document.querySelector(".senInfo").innerHTML = `${json.sensacao}<sup>°C</sup>`;
    document.querySelector(".minInfo").innerHTML = `${json.min} <sup>°C</sup>`;
    document.querySelector(".maxInfo").innerHTML = `${json.max} <sup>°C</sup>`;


    document.querySelector(".ventoInfo").innerHTML = `${json.windSpeed} <span>km/h</span>`;

    document.querySelector(".temp img").setAttribute("src", `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);


    document.querySelector(".ventoPonto").style.transform = `rotate(${json.windAngle - 90}deg)`

    document.querySelector(".resultado").style.display = "block";

}

function claerInfo() {
    showWarning("");
    document.querySelector(".resultado").style.display = "none";
}

function showWarning(msg) {
    document.querySelector(".aviso").innerHTML = msg;
}