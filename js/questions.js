qtitle.push("1. What is your *NIX operating system skill level?");
qtitle1.push("Beginner");
qans1.push("You have never used a BSD or GNU/Linux operating system before, or have used one very little.");
qtitle2.push("Intermediate");
qans2.push("You have used a BSD or GNU/Linux operating system before, and have a fair amount of relevant technical knowledge.");
qtitle3.push("Expert");
qans3.push("You are quite knowledable about the inner workings of a BSD or GNU/Linux system.");
qinfo.push("N/A");

qtitle.push("2. How do you prefer your software?");
qtitle1.push("Stable");
qans1.push("Software is rock-solid and nearly never crashes, but can be fairly outdated.");
qtitle2.push("Inbetween");
qans2.push("A mix between being updated and stable, low number of crashes while still getting new features and fixes.");
qtitle3.push("Up-to-date");
qans3.push("Software is hot off the presses and can have new features and improvements, but has unstable tendencies.");
qinfo.push("If you rely on Linux for a job, you should go for stable software.");

qtitle.push("3. How much preinstalled software do you want?");
qtitle1.push("Minimal");
qans1.push("Included just the bare essentials, I will install my own software.");
qtitle2.push("Average");
qans2.push("Includes software for common computing tasks such as web browsing, document editing, and music/video playback.");
qtitle3.push("Specialized");
qans3.push("Includes specialized software for creating virtual machines, programming, video editing, 3d modeling, etc, by default.");
qinfo.push("N/A");

qtitle.push("4. Do you prefer GNU/Linux or BSD?");
qtitle1.push("GNU/Linux");
qans1.push("GNU/Linux is often more supported and is better for beginners, as it is more popular.");
qtitle2.push("Either");
qans2.push("You have no preference between GNU/Linux and a BSD distribution.");
qtitle3.push("BSD");
qans3.push("BSD is a better choice if your concern is security or running on old or exotic hardware.");
qinfo.push("You may want to research the differences, or just choose \"either\"");

qtitle.push("5. Do you want systemd in your distro?");
qtitle1.push("Yes");
qans1.push("You want systemd to be installed. Systemd generally has better support than its alternatives.");
qtitle2.push("Either");
qans2.push("You are undecided, don't care, or don't know what systemd is.");
qtitle3.push("No");
qans3.push("You want to avoid systemd in favor of an alternative such as runit or openrc. Choose this if you previously answered \"BSD\".");
qinfo.push("To learn about why some want to avoid systemd; visit without-systemd.org");

qtitle.push("6. Do you want an operating system that is light on resources?");
qtitle1.push("Yes");
qans1.push("You have an old or slow computer, or just want something as light and fast as possible.");
qtitle2.push("Maybe");
qans2.push("Your PC is not that fast or a little old, you want something lightweight but not to make sacrifices for it.");
qtitle3.push("No");
qans3.push("You don't need to focus on finding a lightweight operating system.");
qinfo.push("This question mainly determines what desktop environment will be best.");

qtitle.push("7. Do you want your distro to come with a graphical user interface installed?");
qtitle1.push("Yes");
qans1.push("I want a GUI installed by default. Beginners should choose this.");
qtitle2.push("Maybe");
qans2.push("I have no preference, either way works for me.");
qtitle3.push("No");
qans3.push("I want to install and configure my own.");
qinfo.push("N/A");

qtitle.push("8. Do you want all of your software to be free?");
qtitle1.push("Yes");
qans1.push("I want to avoid every bit of proprietary software");
qtitle2.push("Maybe");
qans2.push("I prefer to stick to free software, but some proprietary software is alright with me.");
qtitle3.push("No");
qans3.push("I hate freedom, let all the corporations steal my privacy and strip away my rights.");
qinfo.push("By \"free\" we mean as in freedom, not as in price; learn more at fsf.org");

qtitle.push("9. Do you mind compiling software from source code?");
qtitle1.push("Yes");
qans1.push("I don't want to have to compile anything, binaries only please. Beginners should choose this.");
qtitle2.push("Maybe");
qans2.push("Compiling is alright with me, but I don't want to have to compile everything.");
qtitle3.push("No");
qans3.push("I prefer to compile things, I'd prefer to compile most software on my computer.");
qinfo.push("Compiling is the process of turning source code into \"binaries\" your computer can run.");

qtitle.push("10. Do you prefer command line or graphical user interfaces?");
qtitle1.push("Command-Line");
qans1.push("You prefer programs to be command line based, accessed from the terminal.");
qtitle2.push("Either");
qans2.push("You are happy with command line or graphical programs.");
qtitle3.push("Graphical");
qans3.push("You prefer programs to have graphical user interfaces (GUIs). Recommended for beginners.");
qinfo.push("For more info on CLI vs GUI: computerhope.com/issues/ch000619.htm");

qtitle.push("11. Do you want your distro to have an installer or do you want to install it manually?");
qtitle1.push("Installer");
qans1.push("You want an installer to walk you through installation and configuration. Recommended for beginners.");
qtitle2.push("Either");
qans2.push("You are fine with manual installation or installers.");
qtitle3.push("Manual");
qans3.push("I want to install and configure my distro myself.");
qinfo.push("N/A")
