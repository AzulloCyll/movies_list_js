import { colorTiles } from "./1_movielist";
import { countTiles } from "./4_countTiles";
import { averageRating } from "./5_averageRating";

const select = document.getElementById("select");
const tiles = document.getElementsByClassName("tile");

// tworze element select i dodaje do niego unikalne lata
function generateSelectOptions() {
	//usuń najpierw opcje jeśli jakieś były

	const options = document.getElementsByClassName("year_option");
	while (options.length > 0) {
		options[0].remove();
	}

	const yearsElem = document.getElementsByClassName("movie_year");
	const yearsElemArr = Array.from(yearsElem);
	const years = [];
	for (let i in yearsElemArr) {
		years[i] = yearsElemArr[i].innerHTML;
	}
	const uniqeYears = [...new Set(years)]; //macierz unikalnych lat
	uniqeYears.sort((a, b) => a - b);
	for (let i in uniqeYears) {
		const selectEl = document.createElement("option");
		selectEl.innerHTML = uniqeYears[i];
		selectEl.classList.add("year_option");
		select.append(selectEl);
	}
}

//pokaż wszystkie filmy
select.onchange = function (event) {
	if (event.target.value != "Wszystkie") {
		let search = event.target.value;
		filterTiles(search, event);
	} else {
		for (let i = 0; i < tiles.length; i++) {
			tiles[i].hidden = false;
		}
	}
	countTiles();
	averageRating();
	colorTiles();
};

//pokazuje filmy zgodne
function filterTiles(search) {
	hideAllTiles(); //ukrywam wszystkie kafelki z filmami

	const years = document.getElementsByClassName("movie_year");
	const tiles = document.getElementsByClassName("tile");

	for (let i = 0; i < tiles.length; i++) {
		if (years[i].innerHTML.includes(search)) {
			years[i].parentNode.hidden = false;
		}
	}
	colorTiles(); // aktualizacja kolorów kafelków
	countTiles();
	averageRating();
}

function hideAllTiles() {
	for (let i = 0; i < tiles.length; i++) {
		tiles[i].hidden = true;
	}
}

export { generateSelectOptions, hideAllTiles };
