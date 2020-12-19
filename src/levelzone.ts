import { createGame } from "../src/index.js";
import { levels } from "../src/levels.js";
import { determinationLevel } from "../src/determinationlevel.js";

export const amountLevels: number = Object.keys(levels).length;

//Setup level counter
const currentLevel = determinationLevel();
let levelCounter: number = Number(currentLevel);

//Displaying current level in Header
const levelHeader = document.getElementById("current-level");
levelHeader.innerText = "Level: " + currentLevel;

//Create levels list
const levelsListContainer = document.querySelector(".level-zone__level-list");
const createLevelsList = () => {
	for (let i = 1; i <= amountLevels; i++) {
		let LevelsListItem = document.createElement("div");
		LevelsListItem.classList.add(`level-number`);
		LevelsListItem.innerText = `Level: ${i}`;
		levelsListContainer.appendChild(LevelsListItem);
	}
};
createLevelsList();

//Highlighting current level
const levelsList: NodeListOf<Element> = document.querySelectorAll(
	".level-number"
);
const highlightsCurrentLevel = () => {
	levelsList[Number(determinationLevel()) - 1].classList.add(
		"highlight-current-level"
	);
};
highlightsCurrentLevel();

//Level switching
const prevLevel = () => {
	if (levelCounter > 1) {
		levelCounter -= 1;
		localStorage.setItem("currentLevel", String(levelCounter));
		levelHeader.innerText = "Level: " + String(levelCounter);
		createGame();
		highlightsCurrentLevel();
	}
};
const prevBtn = document.getElementById("prev-btn");
prevBtn.addEventListener("click", prevLevel);
export const nextLevel = () => {
	if (levelCounter < amountLevels) {
		levelCounter += 1;
		localStorage.setItem("currentLevel", String(levelCounter));
		levelHeader.innerText = "Level: " + String(levelCounter);
		createGame();
		highlightsCurrentLevel();
		localStorage.setItem("levelWin", "false");
		localStorage.setItem("helpOn", "false");
	}
};
const nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", nextLevel);
