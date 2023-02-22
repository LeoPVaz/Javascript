//Primero Grupo
document.querySelector(".texto").offsetWidth;
document.querySelector(".texto").offsetHeight;
// leva em consideração não só a largura do elemento e altura mas também as dimensões do scroll, da borda e do padding.

//Segundo Grupo
document.querySelector(".texto").clientWidth;
document.querySelector(".texto").clientHeight;
// Pega as dimensões do conteudo e do padding, não pega as dimensões da barra de rolagem nem a borda nem a margem.

//Terceiro Grupo
document.querySelector(".texto").scrollWidth;
document.querySelector(".texto").scrollHeight;
// Ele pegar o valor total do conteudo, ou seja o tamanho real do conteudo.

//Distâncias e Scroll Suave
document.querySelector(".texto").scrollTop;
document.querySelector(".texto").scrollLeft;
// Seleciona o scroll do elemento sendo scrollTop: para o scroll na vertical, scrollLeft o scroll na horizontal.

//Temos também como selecionar o scroll da pagia:
window.scrollY;
window.scrollX;
// Dessa forma pegando o scroll da tela, sendo scrollY para a vertical e scrollX para horizontal.

//Podemos manicular o scroll:
document.querySelector(".texto").scrollTo(0, 0);
window.scrollTo(0, 0);
// Usando scrollTo() podemos manicular a possição do scroll sendo o eixo X a piremeira declaração e o y a segunda.

function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function botaoScroll(){
    if(window.scrollY === 0){
        document.querySelector(".scrollbutton").style.display = "none";
    }else{
        document.querySelector(".scrollbutton").style.display = "block";
    }
}
window.addEventListener('scroll', botaoScroll);