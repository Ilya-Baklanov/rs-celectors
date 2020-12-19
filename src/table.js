"use strict";
exports.__esModule = true;
exports.Table = void 0;
//Create items on table
var Table = /** @class */ (function () {
    function Table() {
        var _this = this;
        this.table = document.getElementById("table");
        this.createDish = function (amountItems) {
            var _loop_1 = function (i) {
                var dish = document.createElement("div");
                dish.classList.add("main-table-item");
                dish.classList.add("dish");
                var dishInside = document.createElement("div");
                dishInside.classList.add("main-table-item-inside");
                dish.appendChild(dishInside);
                dish.classList.add('init-animation');
                setTimeout(function () {
                    dish.classList.remove('init-animation');
                }, 777);
                _this.table.appendChild(dish);
            };
            for (var i = 0; i < amountItems; i++) {
                _loop_1(i);
            }
        };
        this.animating = function (dishNumberAnimated, typeItemAnimated) {
            var allDish = document.querySelectorAll(".dish");
            for (var i = 0; i < dishNumberAnimated.length; i++) {
                allDish[dishNumberAnimated[i]].classList.add("animated");
            }
            for (var i = 0; i < typeItemAnimated.length; i++) {
                document.querySelector("." + typeItemAnimated[i]).classList.add("animated");
            }
        };
        this.createItemInDish = function (dishNumberWithItem, typeItem) {
            var allDishInside = document.querySelectorAll(".main-table-item-inside");
            for (var i = 0; i < dishNumberWithItem.length; i++) {
                var img = document.createElement("img");
                img.setAttribute("src", "./assets/" + typeItem[i] + ".png");
                img.classList.add("item-in-dish", "" + typeItem[i]);
                allDishInside[dishNumberWithItem[i]].appendChild(img);
            }
        };
    }
    return Table;
}());
exports.Table = Table;
