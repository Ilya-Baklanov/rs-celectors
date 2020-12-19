"use strict";
exports.__esModule = true;
var determinationlevel_js_1 = require("../src/determinationlevel.js");
var determinationlevel_js_2 = require("../src/determinationlevel.js");
var levelzone_js_1 = require("../src/levelzone.js");
var levelzone_js_2 = require("../src/levelzone.js");
//Get DOM elements
var winSelector = determinationlevel_js_2.determinationWinningSelector();
var Input = document.getElementById("input-css");
var helpBtn = document.getElementById("help-btn");
var resetProgressBtn = document.getElementById("reset-progress-btn");
var levelsList = document.querySelectorAll(".level-number");
//Create win animation
var winAnimation = function (allDish, startNumberDish) {
    allDish[startNumberDish].classList.add("win-animation");
    if (startNumberDish < allDish.length - 1) {
        setTimeout(function () { return winAnimation(allDish, startNumberDish + 1); }, 150);
    }
};
//Checking all completed levels
var checkWinLevels = function () {
    var _true = 0;
    var _false = 0;
    levelsList.forEach(function (el) {
        if (!el.classList.contains("highlight-winning-level")) {
            localStorage.setItem("WIN", "false");
            _false += 1;
        }
        else {
            _true += 1;
        }
    });
    if (_true === levelzone_js_2.amountLevels && _false === 0) {
        return true;
    }
};
//Checking correctness of the selectors
var checkWin = function (winSelector) {
    if (Input.value === winSelector &&
        +determinationlevel_js_1.determinationLevel() === levelzone_js_2.amountLevels &&
        checkWinLevels()) {
        var allDish = document.querySelectorAll(".dish");
        winAnimation(allDish, 0);
        localStorage.setItem("levelWin", "true");
        winHighlightsLevels();
        alert("You win!!!");
    }
    else if (Input.value === winSelector) {
        var allDish = document.querySelectorAll(".dish");
        winAnimation(allDish, 0);
        localStorage.setItem("levelWin", "true");
        winHighlightsLevels();
        levelzone_js_1.nextLevel();
        Input.value = "";
    }
    else {
        var gameZone_1 = document.querySelector(".game-zone");
        gameZone_1.classList.add("wibro");
        setTimeout(function () {
            gameZone_1.classList.remove("wibro");
        }, 1000);
    }
};
//Saving completed levels
var determinationWinLevel = function () {
    var currentLevel = determinationlevel_js_1.determinationLevel();
    if (localStorage.getItem("winningLevelNumber") === null &&
        localStorage.getItem("levelWin") === "true") {
        localStorage.setItem("winningLevelNumber", currentLevel);
        return localStorage.getItem("winningLevelNumber").split(",");
    }
    else if (localStorage.getItem("levelWin") === "true") {
        var winningLevelNumber = localStorage
            .getItem("winningLevelNumber")
            .split(",");
        winningLevelNumber.push(currentLevel);
        localStorage.setItem("winningLevelNumber", winningLevelNumber.join(","));
        return localStorage.getItem("winningLevelNumber").split(",");
    }
    else {
        return localStorage.getItem("winningLevelNumber").split(",");
    }
};
//highlighting of the completed level
var winHighlightsLevels = function () {
    var winningLevelNumber = determinationWinLevel();
    winningLevelNumber.forEach(function (el) {
        levelsList[+el - 1].classList.add("highlight-winning-level");
    });
};
if (localStorage.getItem("winningLevelNumber") !== null) {
    winHighlightsLevels();
}
//Create Reset button
resetProgressBtn.addEventListener("click", function () {
    localStorage.clear();
});
//Checking correctness of the selector by pressing Enter
Input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        winSelector = determinationlevel_js_2.determinationWinningSelector();
        checkWin(winSelector);
    }
});
//Save level number with help-mark
var determinationHelpMarkForLevel = function () {
    var currentLevel = determinationlevel_js_1.determinationLevel();
    if (localStorage.getItem("levelWithHelpMark") === null &&
        localStorage.getItem("helpOn") === "true") {
        localStorage.setItem("levelWithHelpMark", currentLevel);
        return localStorage.getItem("levelWithHelpMark").split(",");
    }
    else if (localStorage.getItem("helpOn") === "true") {
        var levelWithHelpMark = localStorage
            .getItem("levelWithHelpMark")
            .split(",");
        levelWithHelpMark.push(currentLevel);
        localStorage.setItem("levelWithHelpMark", levelWithHelpMark.join(","));
        return localStorage.getItem("levelWithHelpMark").split(",");
    }
    else {
        return localStorage.getItem("levelWithHelpMark").split(",");
    }
};
//Marking hint usage
var signHelpMarkForLevel = function () {
    var currentLevel = determinationlevel_js_1.determinationLevel();
    var levelWithHelpMark = determinationHelpMarkForLevel();
    levelWithHelpMark.forEach(function (el) {
        if (!levelsList[+el - 1].innerText.split(" ").includes("(with")) {
            levelsList[+el - 1].innerHTML += " (with help)";
        }
    });
};
if (localStorage.getItem("levelWithHelpMark") !== null) {
    signHelpMarkForLevel();
}
//Create help button
var help = function (winSelector, startString) {
    Input.value += winSelector[startString];
    if (startString < winSelector.length - 1) {
        setTimeout(function () { return help(winSelector, startString + 1); }, 170);
    }
};
helpBtn.addEventListener("click", function () {
    winSelector = determinationlevel_js_2.determinationWinningSelector();
    Input.value = "";
    help(winSelector, 0);
    localStorage.setItem("helpOn", "true");
    determinationHelpMarkForLevel();
});
