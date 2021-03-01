import "core-js/stable";
import "regenerator-runtime/runtime";
import "what-input";
//import { createFocusTrap } from "focus-trap";

import data from "../data/movies.json"; //import pliku json

import {
	createTile,
	switchCollumns,
	onResizeHandler,
	colorTiles,
} from "./1_movielist.js";

import { showHide } from "./2_menu.js";
import { generateSelectOptions } from "./3_yearFilter.js";
import { countTiles } from "./4_countTiles";
import { averageRating } from "./5_averageRating";
import { renderCloud, renderAllMoviesButton } from "./6_tagCloud";
import { searchHandler, showAllTiles } from "./7_search.js";
import { nightMode, normalMode } from "./8_nightMode";
import { sortA_up, sortY_up, sortA_down, sortY_down } from "./9_sort";

let movies = data.movies; //zmienna w której przechowywany jest obiekt z filmami

//wyswietlanie kafelków
for (let movie of movies) {
	createTile(movie.name, movie.img);
}

// obsługa przycisku zmiany kolumn
switchCollumns(main);

//zmiana na mobilną wersję
const rwdElement = document.getElementsByClassName("rwd")[0];
// Inicjalizacja na start
onResizeHandler(rwdElement);

window.addEventListener("resize", function () {
	onResizeHandler(rwdElement);
});

colorTiles(); //początkowa inicjalizacja koloru kafelków
showHide(); // obsługa menu hamburger
generateSelectOptions(select); // utworzenie i obsługa filtrowania po latach
countTiles(); //liczy ile jest wyswietlonych filmów
averageRating(); //oblicza średnią z wyśewietlanych filmów // inicjalizacja

//wyszukiwarka
search.oninput = function (event) {
	if (event.target.value.length >= 3) {
		searchHandler(event.target.value);
	} else {
		showAllTiles();
	}
};

renderCloud(); // wyświetlenie chmury tagów

//obsługa filtrowania po chmurze tagów
const links = document.getElementsByClassName("cloud-link");
for (let i = 0; i < links.length; i++) {
	links[i].onclick = function (event) {
		searchHandler(event.target.textContent);
	};
}

renderAllMoviesButton(); //button pokazujący wszystkie filmy

const sortAButton = document.getElementById("sort-a");
const sortYButton = document.getElementById("sort-y");

sortAButton.onclick = function (event) {
	let icon = event.target.querySelector(".fas");

	if (icon.classList.contains("fa-sort-up")) {
		icon.classList.remove("fa-sort-up");
		icon.classList.add("fa-sort-down");
		sortA_up();
	} else {
		icon.classList.remove("fa-sort-down");
		icon.classList.add("fa-sort-up");
		sortA_down();
	}
};

sortYButton.onclick = function (event) {
	let icon = event.target.querySelector(".fas");

	if (icon.classList.contains("fa-sort-up")) {
		icon.classList.remove("fa-sort-up");
		icon.classList.add("fa-sort-down");
		sortY_up();
	} else {
		icon.classList.remove("fa-sort-down");
		icon.classList.add("fa-sort-up");
		sortY_down();
	}
};

// obsługa tryby nocnego/dziennego
const mode = document.getElementById("mode");
mode.onclick = function (event) {
	if (event.target.textContent == "Tryb nocny") {
		nightMode();
		event.target.textContent = "Tryb dzienny";
	} else if ((event.target.textContent = "Tryb dzienny")) {
		normalMode();
		event.target.textContent = "Tryb nocny";
	}
};

export { movies };
