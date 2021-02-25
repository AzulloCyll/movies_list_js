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

const body = document.body;
const movies = data.movies; //zmienna w której przechowywany jest obiekt z filmami

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

export { movies };
