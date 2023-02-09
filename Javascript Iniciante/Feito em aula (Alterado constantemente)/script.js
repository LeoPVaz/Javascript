function clicou() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            alert(`Titulo do Primero post: ${json[0].title}`)
        })
        .catch((error) => {
            console.log("Deu Problema!");
            console.log(error);
        })
        .finally(() => {
            alert("Acabou tudo!")
        })
}

function inserir() {
    fetch("https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                title: "Titulo de Texto",
                body: "Corpo de Teste",
                userId: 2
            })
        }
    )
    .then((response)=>{
        return response.json();
    })
    .then((json) => {
        console.log(json);
    });
}

document.querySelector("#botao").addEventListener('click', clicou)
document.querySelector("#inserir").addEventListener('click', inserir)