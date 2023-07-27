// Initial Data
let currentQuestion = 0;

showQuestion();

// functions
function showQuestion() {
    if (questions[currentQuestion]) {
        let q = questions[currentQuestion];

        let pct = Math.floor((currentQuestion / questions.length) * 100);

        document.querySelector(".scoreArea").style.display = "none";
        document.querySelector(".questionArea").style.display = "block";

        document.querySelector(".question").innerHTML = q.question;

        let optionsHtml = "";
        for (let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span> ${q.options}</div>`;
        }
        document.querySelector(".options").innerHTML = optionsHtml;

        document.querySelectorAll(".options .option").forEach(item => {
            item.addEventListener("click", optionClickEvent);
        })

    } else {

    }
}

function optionClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute("data-op"));

    if (questions[currentQuestion].answer === clickedOption) {
        correctAnswers++;
    }

    currentQuestion++;
    showQuestion()
}