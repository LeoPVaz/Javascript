let corda = document.querySelector(".corda");
let notas = document.querySelectorAll(".nota-corda");

notas.forEach((nota, index) => {
    nota.addEventListener("click", () => {
      for (let i = index + 1; i < notas.length; i++) {
        notas[i].classList.toggle("vibracao");
      }
    });
  });

// nota.forEach((nota, index) =>{
//     nota.addEventListener("click", () => {
//         if(nota.classList.add("vibracao")){
//             for(let i = index + 1; i < nota.clientHeight; i ++){
//         nota[i].classList.remove("vibracao");
//         }
//         }else{
//              for( let i = index +1; i < nota.length; i ++){
//         nota[i].classList.add("vibracao");
//         }
   
//         }
    

   
    
//     })
// });


// // Adiciona o evento de clique a cada nota
// notas.forEach((nota, index) => {
//     nota.addEventListener('click', () => {
//       // Remove a classe "vibrating" de todas as notas após a clicada
//       for (let i = index + 1; i < notas.length; i++) {
//         notas[i].classList.remove('vibrating');
//       }
  
//       // Adiciona a classe "vibrating" às notas após a clicada
//       for (let i = index + 1; i < notas.length; i++) {
//         notas[i].classList.add('vibrating');
//       }
//     });
//   });


// let corda = document.querySelector(".corda");
// let notas = corda.querySelectorAll(".nota-corda");

// notas.forEach((nota) => {
//   nota.addEventListener("click", () => {
//     nota.classList.toggle("vibracao");
//   });
// });