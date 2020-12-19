"use strict";
exports.__esModule = true;
exports.nextLevel = exports.amountLevels = void 0;
var index_js_1 = require("../src/index.js");
var levels_js_1 = require("../src/levels.js");
var determinationlevel_js_1 = require("../src/determinationlevel.js");
exports.amountLevels = Object.keys(levels_js_1.levels).length;
//Setup level counter
var currentLevel = determinationlevel_js_1.determinationLevel();
var levelCounter = Number(currentLevel);
//Displaying current level in Header
var levelHeader = document.getElementById("current-level");
levelHeader.innerText = "Level: " + currentLevel;
//Create levels list
var levelsListContainer = document.querySelector(".level-zone__level-list");
var createLevelsList = function () {
    for (var i = 1; i <= exports.amountLevels; i++) {
        var LevelsListItem = document.createElement("div");
        LevelsListItem.classList.add("level-number");
        LevelsListItem.innerText = "Level: " + i;
        levelsListContainer.appendChild(LevelsListItem);
    }
};
createLevelsList();
//Highlighting current level
var levelsList = document.querySelectorAll(".level-number");
var highlightsCurrentLevel = function () {
    levelsList[Number(determinationlevel_js_1.determinationLevel()) - 1].classList.add("highlight-current-level");
};
highlightsCurrentLevel();
//Level switching
var prevLevel = function () {
    if (levelCounter > 1) {
        levelCounter -= 1;
        localStorage.setItem("currentLevel", String(levelCounter));
        levelHeader.innerText = "Level: " + String(levelCounter);
        index_js_1.createGame();
        highlightsCurrentLevel();
    }
};
var prevBtn = document.getElementById("prev-btn");
prevBtn.addEventListener("click", prevLevel);
var nextLevel = function () {
    if (levelCounter < exports.amountLevels) {
        levelCounter += 1;
        localStorage.setItem("currentLevel", String(levelCounter));
        levelHeader.innerText = "Level: " + String(levelCounter);
        index_js_1.createGame();
        highlightsCurrentLevel();
        localStorage.setItem("levelWin", "false");
        localStorage.setItem("helpOn", "false");
    }
};
exports.nextLevel = nextLevel;
var nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", exports.nextLevel);
