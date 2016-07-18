var answers = [];
var qtitle = [];
var qtitle1 = [],
    qans1 = [];
var qtitle2 = [],
    qans2 = [];
var qtitle3 = [],
    qans3 = [];
var qinfo = [];
var currentNumber = 1;

function setQuizQuestion(questionNumber) {
    // Set main question title
    document.getElementById("question").innerHTML = qtitle[questionNumber];

    // Set answer titles and descriptions
    document.getElementById("ans1" + "_title").innerHTML = qtitle1[questionNumber];
    document.getElementById("ans1" + "_desc").innerHTML = qans1[questionNumber];
    document.getElementById("ans2" + "_title").innerHTML = qtitle2[questionNumber];
    document.getElementById("ans2" + "_desc").innerHTML = qans2[questionNumber];
    document.getElementById("ans3" + "_title").innerHTML = qtitle3[questionNumber];
    document.getElementById("ans3" + "_desc").innerHTML = qans3[questionNumber];

    // Set question info
    document.getElementById("info_text").innerHTML = qinfo[questionNumber];
}

function saveAnswer(elementId) {
    answers.push(document.getElementById(elementId).textContent.toLowerCase());
}

function nextQuestion() {
    if (currentNumber < 11) {
        setQuizQuestion(currentNumber);
        currentNumber = currentNumber + 1;
        console.log(answers);
    }
}

document.getElementById("ans1").addEventListener("click", function() {
    saveAnswer("ans1_title");
    nextQuestion();
}, false);

document.getElementById("ans2").addEventListener("click", function() {
    saveAnswer("ans2_title");
    nextQuestion();
}, false);

document.getElementById("ans3").addEventListener("click", function() {
    saveAnswer("ans3_title");
    nextQuestion();
}, false);

window.onload = function() {
  setQuizQuestion(0);
}
