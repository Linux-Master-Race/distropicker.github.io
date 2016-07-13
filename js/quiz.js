var q1_ans;

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
	q1_ans = document.getElementById(elementId).textContent.toLowerCase();
	console.log(q1_ans);
}

function setupHandlers() {
	document.getElementById("ans1").addEventListener("click", function() {
		saveAnswer("ans1_title");
	}, false);

	document.getElementById("ans2").addEventListener("click", function() {
		saveAnswer("ans2_title");
	}, false);

	document.getElementById("ans3").addEventListener("click", function() {
		saveAnswer("ans3_title");
	}, false);
}

function setq1() {
	setQuestion("What is your *NIX operating system skill level?");
	setAns(1, "Beginner", "You have never used a BSD or GNU/Linux operating system before, or used one very little.");
	setAns(2, "Intermediate", "You have used a BSD or GNU/Linux operating system before, and have a fair amount of relevant technical knowledge.");
	setAns(3, "Expert", "You are quite knowledable about the inner workings of a BSD or GNU/Linux system.");
	setInfo("N/A");
}

setupHandlers();
setq1();
