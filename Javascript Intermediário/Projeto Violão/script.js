// let corda = document.querySelector(".corda");
// let notas = document.querySelectorAll(".nota-corda");


let cordas = document.querySelectorAll(".corda");

cordas.forEach((corda) => {
  let notas = corda.querySelectorAll(".nota-corda");

  notas.forEach((nota, _index) => {
    nota.addEventListener("click", () => {
      let clickedNoteFound = false;

      for (let i = 0; i < notas.length; i++) {
        if (clickedNoteFound) {
          notas[i].classList.add("vibracao");
        }

        if (nota === notas[i]) {
          clickedNoteFound = true;
        }
      }

      nota.classList.remove("vibracao");

      setTimeout(() => {
        notas.forEach((nota) => {
          nota.classList.remove("vibracao");
        });
      }, 300);
      
    });
  });
});
