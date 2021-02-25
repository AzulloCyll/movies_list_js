// średnia ocen
import { countTiles } from "./4_countTiles";

let showInElement = document.getElementsByClassName("average-rating")[0];

function averageRating() {
	let starsCounter = 0;
	let visibleMoviesCounter = 0;
	visibleMoviesCounter = countTiles();
	const tilesEl = document.getElementsByClassName("tile");

	for (let i = 0; i < tilesEl.length; i++) {
		if (!tilesEl[i].hasAttribute("hidden")) {
			const stars = tilesEl[i].getElementsByClassName("star");
			starsCounter += stars.length;
		}
	}
	let rating = starsCounter / visibleMoviesCounter;
	showInElement.innerHTML = Math.round(rating);
}

export { averageRating };
