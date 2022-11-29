function clicou() {
    const button = document.querySelector('button');

    /*if (button.classList.contains("vermelho")) {
        button.classList.remove("vermelho");
        button.classList.add("azul");
    } else {
        button.classList.add("vermelho");
        button.classList.remove("azul");
    }*/


    if(button.classList.contains('vermelho')){
        button.classList.replace('vermelho', 'azul');
    }else{
        button.classList.replace("azul","vermelho")
    }
}

