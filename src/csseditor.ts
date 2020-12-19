import { determinationLevel } from "../src/determinationlevel.js";
import { determinationWinningSelector } from "../src/determinationlevel.js";
import { nextLevel } from "../src/levelzone.js";
import { amountLevels } from "../src/levelzone.js";

//Get DOM elements
let winSelector = determinationWinningSelector();
const Input = document.getElementById("input-css");
const helpBtn = document.getElementById("help-btn");
const resetProgressBtn = document.getElementById("reset-progress-btn");
const levelsList: NodeListOf<Element> = document.querySelectorAll(".level-number");

//Create win animation
const winAnimation = (allDish: NodeListOf<Element>, startNumberDish: number) => {
	allDish[startNumberDish].classList.add("win-animation");
	if (startNumberDish < allDish.length - 1) {
		setTimeout(() => winAnimation(allDish, startNumberDish + 1), 150);
	}
};

//Checking all completed levels
const checkWinLevels = () => {
	let _true = 0;
	let _false = 0;
	levelsList.forEach((el) => {
		if (!el.classList.contains("highlight-winning-level")) {
			localStorage.setItem("WIN", "false");
			_false += 1;
		} else {
			_true += 1;
		}
	});
	if (_true === amountLevels && _false === 0) {
		return true;
	}
};

//Checking correctness of the selectors
const checkWin = (winSelector: string) => {
	if (
		Input.value === winSelector &&
		+determinationLevel() === amountLevels &&
		checkWinLevels()
	) {
		const allDish = document.querySelectorAll(".dish");
		winAnimation(allDish, 0);
		localStorage.setItem("levelWin", "true");
		winHighlightsLevels();
		alert("You win!!!");
	} else if (Input.value === winSelector) {
		const allDish = document.querySelectorAll(".dish");
		winAnimation(allDish, 0);
		localStorage.setItem("levelWin", "true");
		winHighlightsLevels();
		nextLevel();
		Input.value = "";
	} else {
		let gameZone = document.querySelector(".game-zone");
		gameZone.classList.add("wibro");
		setTimeout(() => {
			gameZone.classList.remove("wibro");
		}, 1000);
	}
};

//Saving completed levels
const determinationWinLevel = () => {
	const currentLevel = determinationLevel();
	if (
		localStorage.getItem("winningLevelNumber") === null &&
		localStorage.getItem("levelWin") === "true"
	) {
		localStorage.setItem("winningLevelNumber", currentLevel);
		return localStorage.getItem("winningLevelNumber").split(",");
	} else if (localStorage.getItem("levelWin") === "true") {
		let winningLevelNumber = localStorage
			.getItem("winningLevelNumber")
			.split(",");
		winningLevelNumber.push(currentLevel);
		localStorage.setItem("winningLevelNumber", winningLevelNumber.join(","));
		return localStorage.getItem("winningLevelNumber").split(",");
	} else {
		return localStorage.getItem("winningLevelNumber").split(",");
	}
};

//highlighting of the completed level
const winHighlightsLevels = () => {
	let winningLevelNumber = determinationWinLevel();
	winningLevelNumber.forEach((el) => {
		levelsList[+el - 1].classList.add("highlight-winning-level");
	});
};
if (localStorage.getItem("winningLevelNumber") !== null) {
	winHighlightsLevels();
}

//Create Reset button
resetProgressBtn.addEventListener("click", () => {
	localStorage.clear();
});

//Checking correctness of the selector by pressing Enter
Input.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		winSelector = determinationWinningSelector();
		checkWin(winSelector);
	}
});

//Save level number with help-mark
const determinationHelpMarkForLevel = () => {
	const currentLevel = determinationLevel();
	if (
		localStorage.getItem("levelWithHelpMark") === null &&
		localStorage.getItem("helpOn") === "true"
	) {
		localStorage.setItem("levelWithHelpMark", currentLevel);
		return localStorage.getItem("levelWithHelpMark").split(",");
	} else if (localStorage.getItem("helpOn") === "true") {
		let levelWithHelpMark = localStorage
			.getItem("levelWithHelpMark")
			.split(",");
		levelWithHelpMark.push(currentLevel);
		localStorage.setItem("levelWithHelpMark", levelWithHelpMark.join(","));
		return localStorage.getItem("levelWithHelpMark").split(",");
	} else {
		return localStorage.getItem("levelWithHelpMark").split(",");
	}
};

//Marking hint usage
const signHelpMarkForLevel = () => {
	const currentLevel = determinationLevel();
	let levelWithHelpMark = determinationHelpMarkForLevel();
	levelWithHelpMark.forEach((el) => {
		if (!levelsList[+el - 1].innerText.split(" ").includes("(with")) {
			levelsList[+el - 1].innerHTML += ` (with help)`;
		}
	});
};
if (localStorage.getItem("levelWithHelpMark") !== null) {
	signHelpMarkForLevel();
}

//Create help button
const help = (winSelector: string, startString: number) => {
	Input.value += winSelector[startString];
	if (startString < winSelector.length - 1) {
		setTimeout(() => help(winSelector, startString + 1), 170);
	}
};
helpBtn.addEventListener("click", () => {
	winSelector = determinationWinningSelector();
	Input.value = "";
	help(winSelector, 0);
	localStorage.setItem("helpOn", "true");
	determinationHelpMarkForLevel();
});
