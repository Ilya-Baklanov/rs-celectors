import { levels } from "./levels.js";
export const determinationLevel = () => {
	if (localStorage.getItem("currentLevel") === null) {
		localStorage.setItem("currentLevel", "1");
		return localStorage.getItem("currentLevel");
	} else {
		return localStorage.getItem("currentLevel");
	}
};
export const determinationWinningSelector = () => {
	const level = determinationLevel();
	return levels[`level${level}`].winSelector;
};
