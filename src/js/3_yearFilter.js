import { movies } from "./index";
import { colorTiles } from "./1_movielist";
import { countTiles } from "./4_countTiles";
import { averageRating } from "./5_averageRating";

const select = document.getElementById("select");
const yearsElem = document.getElementsByClassName("movie_year");
const tiles = document.getElementsByClassName("tile");

// tworze element select i dodaje do niego unikalne lata
function generateSelectOptions(select) {
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
		select.append(selectEl);
	}
}

//pokaż wszystkie filmy
select.onchange = function (event) {
	if (event.target.value != "Wszystkie") {
		let year = event.target.value;
		filterTiles(year, event);
	} else {
		for (let i = 0; i < tiles.length; i++) {
			tiles[i].hidden = false;
		}
	}
	countTiles();
	averageRating();
	colorTiles();
};

function filterTiles(year) {
	hideAllTiles(); //ukrywam wszystkie kafelki z filmami

	const movieNames = [];

	for (let movie of movies) {
		movieNames.push(movie.name);
	}

	//tworzę macierz indexów filmów w których występuje dany rok
	let indexes = [];
	for (let movie of movies) {
		if (movie.name.includes(year)) {
			indexes.push(movieNames.indexOf(movie.name));
		}
	}

	//i wyswietlam je
	for (let i in indexes) {
		let tile = indexes[i]; //pojedynczy index kafelka do wyswietlena
		tiles[tile].hidden = false; //kafelek od indexu
	}
	countTiles();
	averageRating();
}

function hideAllTiles() {
	for (let i = 0; i < tiles.length; i++) {
		tiles[i].hidden = true;
	}
}

export { generateSelectOptions, hideAllTiles };
