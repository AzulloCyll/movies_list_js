import { colorTiles } from "./1_movielist";
import { countTiles } from "./4_countTiles";
import { averageRating } from "./5_averageRating";

const select = document.getElementById("select");
const tiles = document.getElementsByClassName("tile");

// tworzy element select i dodaje do niego unikalne lata
function generateSelectOptions() {
	// usuń najpierw opcje jeśli jakieś były
	// ma zastosowanie kiedy dodam swój nowy film, który ma rok wydania inny niż dostępne ddo tej pory opcje
	const options = document.getElementsByClassName("year_option");
	while (options.length > 0) {
		options[0].remove();
	}

	// pobiera wszystkie elementy o klasie "movie_year"
	const yearsElem = document.getElementsByClassName("movie_year");
	const yearsElemArr = Array.from(yearsElem);

	// tworzy nową macierz gdzie znajdują się wszystkie lata
	const years = [];
	for (let i in yearsElemArr) {
		years[i] = yearsElemArr[i].innerHTML;
	}

	const uniqeYears = [...new Set(years)]; //tworzy macierz unikalnych lat usuwając elementy powtarzające się
	uniqeYears.sort((a, b) => a - b); // sortuje tablicę

	// tworzy elementy option i wrzuca je do DOM
	for (let i in uniqeYears) {
		const selectEl = document.createElement("option");
		selectEl.innerHTML = uniqeYears[i];
		selectEl.classList.add("year_option");
		select.append(selectEl);
	}
}

// używa funkcji filterTiles aby wyszukać i pokazać kafelki z danego roku, albo wszystkie
select.onchange = function (event) {
	if (event.target.value != "Wszystkie") {
		let search = event.target.value;
		filterTiles(search);
	} else {
		for (let i = 0; i < tiles.length; i++) {
			tiles[i].hidden = false;
		}
	}
	countTiles(); // aktualizacja licznika kafelków
	averageRating(); // aktualizacja średniej ocen
	colorTiles(); // kolorowanie kafelków od nowa
};

// pokazuje filmy zgodne z
function filterTiles(search) {
	hideAllTiles(); // ukrywam najpierw wszystkie kafelki z filmami

	const years = document.getElementsByClassName("movie_year");
	const tiles = document.getElementsByClassName("tile");

	//następnie pokazuję tylko te których element z rokiem wydania zgadza się z wartością "search" podanej jako parametr
	for (let i = 0; i < tiles.length; i++) {
		if (years[i].innerHTML.includes(search)) {
			years[i].parentNode.hidden = false;
		}
	}
	colorTiles(); // aktualizacja kolorów kafelków
	averageRating(); // aktualizacja średniej ocen
	countTiles(); // kolorowanie kafelków od nowa
}

// funkcja pomocnicza ukrywająca wszystkei kafelki
function hideAllTiles() {
	for (let i = 0; i < tiles.length; i++) {
		tiles[i].hidden = true;
	}
}

export { generateSelectOptions, hideAllTiles };
