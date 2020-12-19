"use strict";
exports.__esModule = true;
exports.determinationWinningSelector = exports.determinationLevel = void 0;
var levels_js_1 = require("./levels.js");
var determinationLevel = function () {
    if (localStorage.getItem("currentLevel") === null) {
        localStorage.setItem("currentLevel", "1");
        return localStorage.getItem("currentLevel");
    }
    else {
        return localStorage.getItem("currentLevel");
    }
};
exports.determinationLevel = determinationLevel;
var determinationWinningSelector = function () {
    var level = exports.determinationLevel();
    return levels_js_1.levels["level" + level].winSelector;
};
exports.determinationWinningSelector = determinationWinningSelector;
