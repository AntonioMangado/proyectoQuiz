const correctAnswers = [
  {
    name: "q1",
    value: "gta"
  },
  {
    name: "q2",
    value: "2017"
  },
  {
    name: "q3",
    value: "link"
  },
  {
    name: "q4",
    value: "sc2"
  },
  {
    name: "q5",
    value: "enix"
  },
  {
    
    name: "q6",
    value: "amnesia"
  },
  {
    name: "q7",
    value: "2013"
  },
  {
    name: "q8",
    value: "unch4"
  },
  {
    name: "q9",
    value: "minecraft"
  },
  {
    name: "q10",
    value: "fps"
  },
]


let answerButtons = document.querySelectorAll(".answer-box");

for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener("click", function changeColor() {
      answerButtons[i].style.backgroundColor = "#08D9D6";
  });
}


//VALIDACION DE FORMULARIO
let form = document.getElementById("vg-quiz");
form.addEventListener("submit", function(event){

  missingQuestions = ""
  event.preventDefault();
  console.log("Has enviado el formulario!");
  console.log(event);

//VALIDACION PREGUNTA 1
    if (event.target[0].checked == false && event.target[1].checked == false && event.target[2].checked == false && event.target[3].checked == false) {
      missingQuestions += "1";
    }

//VALIDACION PREGUNTA 2
    if (event.target[4].checked == false && event.target[5].checked == false && event.target[6].checked == false && event.target[7].checked == false) {
      missingQuestions += " 2"
    }

//VALIDACION PREGUNTA 3
    if (event.target[8].checked == false && event.target[9].checked == false && event.target[10].checked == false && event.target[11].checked == false) {
      missingQuestions += " 3"
    }

//VALIDACION PREGUNTA 4
    if (event.target[12].checked == false && event.target[13].checked == false && event.target[14].checked == false && event.target[15].checked == false) {
      missingQuestions += " 4"
    }

//VALIDACION PREGUNTA 5
    if (event.target[16].checked == false && event.target[17].checked == false && event.target[18].checked == false && event.target[19].checked == false) {
      missingQuestions += " 5"
    }

//VALIDACION PREGUNTA 6
    if (event.target[20].checked == false && event.target[21].checked == false && event.target[22].checked == false && event.target[23].checked == false) {
      missingQuestions += " 6"
    }

//VALIDACION PREGUNTA 7
    if (event.target[24].checked == false && event.target[25].checked == false && event.target[26].checked == false && event.target[27].checked == false) {
      missingQuestions += " 7"
    }

//VALIDACION PREGUNTA 8
    if (event.target[28].checked == false && event.target[29].checked == false && event.target[30].checked == false && event.target[31].checked == false) {
      missingQuestions += " 8"
    }

//VALIDACION PREGUNTA 9
    if (event.target[32].checked == false && event.target[33].checked == false && event.target[34].checked == false && event.target[35].checked == false) {
      missingQuestions += " 9"
    }

//VALIDACION PREGUNTA 10
    if (event.target[36].checked == false && event.target[37].checked == false && event.target[38].checked == false && event.target[39].checked == false) {
      missingQuestions += " 10"
    }

    if (missingQuestions.length >= 1) {
      let text = document.createTextNode(`Responde a las siguientes preguntas para guardar: ${missingQuestions}`)
      let p = document.createElement("p")
      p.appendChild(text);

      let warningBox = document.querySelector(".warning-box");
      warningBox.appendChild(p);
     }
})

