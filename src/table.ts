//Create items on table
export class Table {
	table = document.getElementById("table");
	createDish = (amountItems: number) => {
		for (let i = 0; i < amountItems; i++) {
			const dish = document.createElement("div");
			dish.classList.add("main-table-item");
			dish.classList.add("dish");
			const dishInside = document.createElement("div");
			dishInside.classList.add("main-table-item-inside");
      dish.appendChild(dishInside);
      dish.classList.add('init-animation');
      setTimeout(() => {
        dish.classList.remove('init-animation');
      }, 777);
			this.table.appendChild(dish);
		}
	};
	animating = (dishNumberAnimated: Array<number>, typeItemAnimated: Array<string>) => {
		const allDish = document.querySelectorAll(".dish");
		for (let i = 0; i < dishNumberAnimated.length; i++) {
			allDish[dishNumberAnimated[i]].classList.add("animated");
		}
		for (let i = 0; i < typeItemAnimated.length; i++) {
			document.querySelector(`.${typeItemAnimated[i]}`).classList.add("animated");
		}
	};
	createItemInDish = (dishNumberWithItem: Array<number>, typeItem: Array<string>) => {
		const allDishInside = document.querySelectorAll(".main-table-item-inside");
		for (let i = 0; i < dishNumberWithItem.length; i++) {
			const img = document.createElement("img");
			img.setAttribute("src", `./assets/${typeItem[i]}.png`);
			img.classList.add(`item-in-dish`, `${typeItem[i]}`);
			allDishInside[dishNumberWithItem[i]].appendChild(img);
		}
	};
}
