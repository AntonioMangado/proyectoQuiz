let answerButtons = document.querySelectorAll(".answer-box");



for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener("click", function changeColor() {
    if (boton == true) {
        answerButtons[i].style.backgroundColor = "#5FD068"
    } else {
        answerButtons[i].style.backgroundColor = "#FE0000"
    }
    ;
  });
}
