import { hideAllTiles } from "./3_yearFilter";
import { averageRating } from "./5_averageRating";
import { countTiles } from "./4_countTiles";

const names = document.getElementsByClassName("movie_name");
const tiles = document.getElementsByClassName("tile");

function searchHandler(search) {
	search.toLowerCase();

	hideAllTiles(); // ukrywa wszystkie kafelki

	//pokazuje kafelki przy ilosci znaków 3 lub więcej, oraz gdy wpisany ciąg znaku zawiera się w nazwie filmu
	for (let i = 0; i < tiles.length; i++) {
		if (names[i].innerHTML.toLowerCase().includes(search)) {
			names[i].parentNode.hidden = false;
		}
	}

	countTiles(); // aktualizacja elementu wyswietlającego liczbę kafelków
	averageRating(); // aktualizacja elementu wyswietlającego średnią ocen
}

// pokazuje wsyztskie kafelki // obsługa wyświetlania gdy skasujemy wartość z pola wyszukiwarki
function showAllTiles() {
	for (let i = 0; i < tiles.length; i++) {
		names[i].parentNode.hidden = false;
	}
}

export { searchHandler, showAllTiles };
