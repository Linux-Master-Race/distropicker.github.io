var answers = [];

function setQuestion(newText) {
	document.getElementById("question").innerHTML=newText;
}

function setAns(number, title, desc) {
	document.getElementById("ans" + number.toString() + "_title").innerHTML=title;
	document.getElementById("ans" + number.toString() + "_desc").innerHTML=desc;	
}

function setInfo(newText) {
	document.getElementById("info_text").innerHTML=newText;
}

function saveAnswer(elementId) {
	answers.push(document.getElementById(elementId).textContent.toLowerCase());
}

function nextQuestion() {
	currentNumber = Number(document.getElementById("question").textContent[0]);
	console.log(currentNumber);	
	
	if (currentNumber == 1)
		setq2();
	else if (currentNumber == 2)
		setq3();
	else if (currentNumber == 3)
		setq4();
	else if (currentNumber == 4)
		setq5();
}

function setupHandlers() {
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
}

setupHandlers();
setq1();
