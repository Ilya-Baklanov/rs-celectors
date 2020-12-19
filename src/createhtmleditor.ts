import { determinationLevel } from "./determinationlevel.js";
import { levels } from "./levels.js";

//Create html-editor
export class HTMLEditor {
	FirstElement = document.getElementById("one");
	SecondElement = document.getElementById("two");
	ThirdElement = document.getElementById("three");
	FourthElement = document.getElementById("four");
	FifthElement = document.getElementById("five");
	createHTMLEditor = (level: string) => {
		const htmlBlock = document.querySelectorAll(".html-block");
		htmlBlock.forEach((el) => {
			el.innerText = "";
		});
		let counter = 0;
		for (let key in levels[`level${level}`]) {
			htmlBlock[counter].innerText = levels[`level${level}`][key];
			counter += 1;
			if (counter === levels[`level${level}`].amountItems) {
				break;
			}
		}
	};
}

//Create code hint
const addCodeHint = (dish:Element, htmlBlock: Element) => {
	const codeHint = document.createElement("div");
	codeHint.classList.toggle("code-hint");
	codeHint.innerText = htmlBlock.innerText;
	dish.appendChild(codeHint);
};

//highlighting the selected dish
export const highlightsCurrentDish = () => {
	const dishs = document.querySelectorAll(".dish");
	const htmlBlock = document.querySelectorAll(".html-block");
	htmlBlock.forEach((el, ind) => {
		if (el.childElementCount !== 0) {
			el.addEventListener("mouseenter", () => {
				el.classList.add("chosen");
				dishs[ind].classList.add("chosen");
				addCodeHint(dishs[ind], el);
			});
			el.addEventListener("mouseleave", () => {
				el.classList.remove("chosen");
				dishs[ind].classList.remove("chosen");
				dishs[ind].removeChild(dishs[ind].lastChild);
			});
		}
	});
};

//highlighting the selected code
export const highlightsCurrentHtmlCode = () => {
	const dishs = document.querySelectorAll(".dish");
	const htmlBlock = document.querySelectorAll(".html-block");
	dishs.forEach((el, ind) => {
		el.addEventListener("mouseenter", () => {
			el.classList.add("chosen");
			htmlBlock[ind].classList.add("chosen");
			addCodeHint(el, htmlBlock[ind]);
		});
		el.addEventListener("mouseleave", () => {
			el.classList.remove("chosen");
			htmlBlock[ind].classList.remove("chosen");
			el.removeChild(el.lastChild);
		});
	});
};
