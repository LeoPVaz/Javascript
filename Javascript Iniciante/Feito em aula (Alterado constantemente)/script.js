async function clicou() {
    // GET, POST, PUT, DELETE

    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let json = await response.json();
    alert(`Titulo do Primero post: ${json[0].title}`)
  
    alert("CLICOU!")
};

async function inserir() {
   let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: 'Titulo de teste',
            body: "Corpo de teste",
            userId: 2
        })
})};


document.querySelector("#botao").addEventListener('click', clicou)