// funkcja liczy ile jest wyświetlonych filmów
function countTiles() {
	const filmNumberEl = document.getElementsByClassName("film-nubmer")[0];
	const tiles = document.getElementsByClassName("tile");
	let number = 0;
	for (let i = 0; i < tiles.length; i++) {
		if (!tiles[i].hasAttribute("hidden")) {
			number += 1;
		}
	}
	filmNumberEl.textContent = number;
	return number;
}

export { countTiles };
