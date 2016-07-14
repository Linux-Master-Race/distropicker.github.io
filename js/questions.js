function setq1() {
	setQuestion("1. What is your *NIX operating system skill level?");
	setAns(1, "Beginner", "You have never used a BSD or GNU/Linux operating system before, or used one very little.");
	setAns(2, "Intermediate", "You have used a BSD or GNU/Linux operating system before, and have a fair amount of relevant technical knowledge.");
	setAns(3, "Expert", "You are quite knowledable about the inner workings of a BSD or GNU/Linux system.");
	setInfo("N/A");
}

function setq2() {
	setQuestion("2. How do you prefer your software?");
	setAns(1, "Stable", "Software is rock-solid and nearly never crashes, but can be fairly outdated.");
	setAns(2, "Inbetween", "A mix between being updated and stable");
	setAns(3, "Up-to-date", "Software is hot off the presses and can have new features and improvements, but has unstable tendencies.");
	setInfo("If you rely on Linux for a job, you should go for stable software.");
}

function setq3() {
 	setQuestion("3. How much preinstalled software do you want?");
	setAns(1, "Minimal", "Included just the bare essentials, I will install my own software.");
	setAns(2, "Average", "Includes software to enable common computing tasks such as web browsing, document editing, and music/video playback.");
	setAns(3, "Specialized", "Includes software to do most computing tasks, may include specialized software for creating virtual machines, programming, video editing, 3d modeling, etc.");
	setInfo("N/A");
}
