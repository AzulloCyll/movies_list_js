import { colorTiles } from "./1_movielist";

// po nazwie rosnąco
function sortA_up() {
	const tilesElements = document.getElementsByClassName("tile");
	let tiles = Array.from(tilesElements);

	tiles.sort((tile1, tile2) => {
		let name1 = tile1.querySelector(".movie_name").innerHTML;
		let name2 = tile2.querySelector(".movie_name").innerHTML;
		return name1.localeCompare(name2);
	});

	for (let i in tiles) {
		tiles[i].remove();
	}

	showSorted(tiles);
}

// po nazwie malejąco
function sortA_down() {
	const tilesElements = document.getElementsByClassName("tile");
	let tiles = Array.from(tilesElements);

	tiles.sort((tile1, tile2) => {
		let name1 = tile1.querySelector(".movie_name").innerHTML;
		let name2 = tile2.querySelector(".movie_name").innerHTML;
		return name2.localeCompare(name1);
	});

	for (let i in tiles) {
		tiles[i].remove();
	}
	showSorted(tiles);
}

//po dacie rosnąco
function sortY_up() {
	const tilesElements = document.getElementsByClassName("tile");
	let tiles = Array.from(tilesElements);

	tiles.sort((tile1, tile2) => {
		let name1 = tile1.querySelector(".movie_year").innerHTML;
		let name2 = tile2.querySelector(".movie_year").innerHTML;
		return name1.localeCompare(name2);
	});

	for (let i in tiles) {
		tiles[i].remove();
	}
	showSorted(tiles);
}

//po dacie malejąco
function sortY_down() {
	const tilesElements = document.getElementsByClassName("tile");
	let tiles = Array.from(tilesElements);

	tiles.sort((tile1, tile2) => {
		let name1 = tile1.querySelector(".movie_year").innerHTML;
		let name2 = tile2.querySelector(".movie_year").innerHTML;
		return name2.localeCompare(name1);
	});

	for (let i in tiles) {
		tiles[i].remove();
	}
	showSorted(tiles);
}

//pokazuje ułożone kafelki
function showSorted(tiles) {
	for (let i = 0; i < tiles.length; i++) {
		const movieName = tiles[i].querySelector(".movie_name");
		const movieImage = tiles[i].querySelector(".movie_image");
		const movieYear = tiles[i].querySelector(".movie_year");
		const movieStars = tiles[i].querySelector(".movie_stars");
		const tile = document.createElement("div");
		main.append(tile);
		tile.className = "tile";
		tile.append(movieYear, movieImage, movieName, movieStars);
	}
	colorTiles();
}

export { sortA_up, sortY_up, sortA_down, sortY_down };
