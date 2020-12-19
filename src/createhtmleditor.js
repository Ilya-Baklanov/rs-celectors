"use strict";
exports.__esModule = true;
exports.highlightsCurrentHtmlCode = exports.highlightsCurrentDish = exports.HTMLEditor = void 0;
var levels_js_1 = require("./levels.js");
//Create html-editor
var HTMLEditor = /** @class */ (function () {
    function HTMLEditor() {
        this.FirstElement = document.getElementById("one");
        this.SecondElement = document.getElementById("two");
        this.ThirdElement = document.getElementById("three");
        this.FourthElement = document.getElementById("four");
        this.FifthElement = document.getElementById("five");
        this.createHTMLEditor = function (level) {
            var htmlBlock = document.querySelectorAll(".html-block");
            htmlBlock.forEach(function (el) {
                el.innerText = "";
            });
            var counter = 0;
            for (var key in levels_js_1.levels["level" + level]) {
                htmlBlock[counter].innerText = levels_js_1.levels["level" + level][key];
                counter += 1;
                if (counter === levels_js_1.levels["level" + level].amountItems) {
                    break;
                }
            }
        };
    }
    return HTMLEditor;
}());
exports.HTMLEditor = HTMLEditor;
//Create code hint
var addCodeHint = function (dish, htmlBlock) {
    var codeHint = document.createElement("div");
    codeHint.classList.toggle("code-hint");
    codeHint.innerText = htmlBlock.innerText;
    dish.appendChild(codeHint);
};
//highlighting the selected dish
var highlightsCurrentDish = function () {
    var dishs = document.querySelectorAll(".dish");
    var htmlBlock = document.querySelectorAll(".html-block");
    htmlBlock.forEach(function (el, ind) {
        if (el.childElementCount !== 0) {
            el.addEventListener("mouseenter", function () {
                el.classList.add("chosen");
                dishs[ind].classList.add("chosen");
                addCodeHint(dishs[ind], el);
            });
            el.addEventListener("mouseleave", function () {
                el.classList.remove("chosen");
                dishs[ind].classList.remove("chosen");
                dishs[ind].removeChild(dishs[ind].lastChild);
            });
        }
    });
};
exports.highlightsCurrentDish = highlightsCurrentDish;
//highlighting the selected code
var highlightsCurrentHtmlCode = function () {
    var dishs = document.querySelectorAll(".dish");
    var htmlBlock = document.querySelectorAll(".html-block");
    dishs.forEach(function (el, ind) {
        el.addEventListener("mouseenter", function () {
            el.classList.add("chosen");
            htmlBlock[ind].classList.add("chosen");
            addCodeHint(el, htmlBlock[ind]);
        });
        el.addEventListener("mouseleave", function () {
            el.classList.remove("chosen");
            htmlBlock[ind].classList.remove("chosen");
            el.removeChild(el.lastChild);
        });
    });
};
exports.highlightsCurrentHtmlCode = highlightsCurrentHtmlCode;
