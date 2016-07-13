function click() {
	console.log("test");
}
var btn1 = document.getElementById("ans1");
var btn2 = document.getElementById("ans2");
var btn3 = document.getElementById("ans3");
btn1.addEventListener("click", click, false);

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

function q1() {
	setQuestion("What is your *NIX operating system skill level?");
	setAns(1, "Beginner", "You have never used a BSD or GNU/Linux operating system before, or used one very little.");
	setAns(2, "Intermediate", "You have used a BSD or GNU/Linux operating system before, and have a fair amount of relevant technical knowledge.");
	setAns(3, "Expert", "You are quite knowledable about the inner workings of a BSD or GNU/Linux system.");
	setInfo("N/A");
}

q1();
