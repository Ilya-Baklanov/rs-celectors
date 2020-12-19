"use strict";
exports.__esModule = true;
exports.highlighting = void 0;
//Code highlighting
var highlighting = function () {
    var prom = new Promise(function (res) {
        hljs.initHighlightingOnLoad();
        setTimeout(function () {
            var span = document.querySelectorAll("span");
            res(span);
        }, 100);
    });
    prom.then(function (resp) {
        resp.forEach(function (el) {
            if (el.innerText == "dish") {
                el.classList.add("span");
            }
        });
    });
};
exports.highlighting = highlighting;
