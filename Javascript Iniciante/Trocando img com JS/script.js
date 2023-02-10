function trocarImagem(filename,hairname){
    document.querySelector('.imagem').setAttribute('src','img/'+ filename);
    document.querySelector('.imagem').setAttribute('data-cabelo', hairname)
}
function pegarcabelo(){
    let cabelo = document.querySelector('.imagem').getAttribute('data-cabelo');
    alert(`A cor do cabelo e: ${cabelo}!`)
}