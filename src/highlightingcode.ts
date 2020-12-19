//Code highlighting
export const highlighting = () => {
	let prom = new Promise((res) => {
		hljs.initHighlightingOnLoad();
		setTimeout(() => {
			let span = document.querySelectorAll("span");
			res(span);
		}, 100);
	});
	prom.then((resp) => {
		resp.forEach((el) => {
			if (el.innerText == "dish") {
				el.classList.add("span");
			}
		});
	});
};
