function setq1() {
	setQuestion("1. What is your *NIX operating system skill level?");
	setAns(1, "Beginner", "You have never used a BSD or GNU/Linux operating system before, or have used one very little.");
	setAns(2, "Intermediate", "You have used a BSD or GNU/Linux operating system before, and have a fair amount of relevant technical knowledge.");
	setAns(3, "Expert", "You are quite knowledable about the inner workings of a BSD or GNU/Linux system.");
	setInfo("N/A");
}

function setq2() {
	setQuestion("2. How do you prefer your software?");
	setAns(1, "Stable", "Software is rock-solid and nearly never crashes, but can be fairly outdated.");
	setAns(2, "Inbetween", "A mix between being updated and stable, low number of crashes while still getting new features and fixes.");
	setAns(3, "Up-to-date", "Software is hot off the presses and can have new features and improvements, but has unstable tendencies.");
	setInfo("If you rely on Linux for a job, you should go for stable software.");
}

function setq3() {
 	setQuestion("3. How much preinstalled software do you want?");
	setAns(1, "Minimal", "Included just the bare essentials, I will install my own software.");
	setAns(2, "Average", "Includes software for common computing tasks such as web browsing, document editing, and music/video playback.");
	setAns(3, "Specialized", "Includes specialized software for creating virtual machines, programming, video editing, 3d modeling, etc, by default.");
	setInfo("N/A");
}

function setq4() {
	setQuestion("4. Do you prefer GNU/Linux or BSD?");
	setAns(1, "GNU/Linux", "GNU/Linux is often more supported and is better for beginners, as it is more popular.");
	setAns(2, "Either", "You have no preference between GNU/Linux and a BSD distribution.");
	setAns(3, "BSD", "BSD is a better choice if your concern is security or running on old or exotic hardware.");
	setInfo("You may want to research the differences, or just choose \"either\"");
}

function setq5() {
	setQuestion("5. Do you want SystemD in your distro?");
	setAns(1, "Yes", "You want SystemD to be installed. SystemD generally has better support than its alternatives.");
	setAns(2, "Either", "You are undecided, don't care, or don't know what SystemD is.");
	setAns(3, "No", "You want to avoid SystemD in favor of an alternative such as runit or openrc. Choose this if you previously answered \"BSD\".");
	setInfo("To learn about why some want to avoid SystemD; visit without-systemd.org");
}

function setq6() {
	setQuestion("6. Do you want an operating system that is light on resources?");
	setAns(1, "No", "You don't need to focus on finding a lightweight operating system.");
	setAns(2, "Maybe", "Your PC is not that fast or a little old, you want something lightweight but not to make sacrifices for it.");
	setAns(3, "Yes", "You have an old or slow computer, or just want something as light and fast as possible.");
	setInfo("This question mainly determines what desktop environment will be best.");
}

function setq7() {
	setQuestion("7. Do you want your distro to come with a graphical user interface installed?");
	setAns(1, "Yes", "I want a GUI installed by default. Beginners should choose this.");
	setAns(2, "Maybe", "I have no preference, either way works for me.");
	setAns(3, "No", "I want to install and configure my own.");
	setInfo("N/A");
}	

function setq8() {
	setQuestion("8. Do you want all of your software to be free?");
	setAns(1, "Yes", "I want to avoid every bit of proprietary software");
	setAns(2, "Maybe", "I prefer to stick to free software, but some proprietary software is alright with me.");
	setAns(3, "No", "I hate freedom, let all the corporations steal my privacy and strip away my rights.");
	setInfo("By \"free\" we mean as in freedom, not as in price; learn more at fsf.org");
}

function setq9() {
	setQuestion("9. Do you mind compiling software from source code?");
	setAns(1, "Yes", "I don't want to have to compile anything, binaries only please. Beginners should choose this.");
	setAns(2, "Maybe", "Compiling is alright with me, but I don't want to have to compile everything.");
	setAns(3, "No", "I prefer to compile things, I'd prefer to compile most software on my computer.");
	setInfo("Compiling is the process of turning source code into \"binaries\" your computer can run.");
}
