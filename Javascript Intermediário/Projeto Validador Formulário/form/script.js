let Validador = {
    handleSubmit: (event) => {
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll("input");

        Validador.clearErrors();

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let check = Validador.checkInput(input);
            if (check !== true) {
                send = false;
                Validador.showErro(input, check);
            }
        }

        if (send) {
            form.submit()
        }
    },
    checkInput: (input) => {
        let rules = input.getAttribute("data-rules");
        if (rules !== null) {
            rules = rules.split("|");
            for (let k in rules) {
                let rDetails = rules[k].split("=");

                min = 2
                switch (rDetails[0]) {
                    case "required":
                        if (input.value == "") {
                            return "Campo obrigatorio"
                        }
                        break;
                    case "min":
                        break;
                }
            }
        }

        return true
    },
    showErro: (input, error) => {
        input.style.borderColor = "#FF0000";
        let erroElement = document.createElement("div");
        erroElement.classList.add("error");
        erroElement.innerHTML = error;

        input.parentElement.insertBefore(erroElement, input.ElementSibling)
    },
    clearErrors: () => {
        let inputs = form.querySelectorAll("input");
        for(i = 0; i < inputs.length; i++){
            inputs[i].style = "";
        }

        let erroElement = document.querySelectorAll(".error");
        for (i = 0; i < erroElement.length; i++){
            erroElement[i].remove();
        }
    }
};

let form = document.querySelector(".validador");
form.addEventListener("submit", Validador.handleSubmit);