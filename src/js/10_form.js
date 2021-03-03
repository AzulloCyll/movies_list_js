import { colorTiles, createTile } from "./1_movielist";
import { countTiles } from "./4_countTiles";
import { averageRating } from "./5_averageRating";
import { generateSelectOptions } from "./3_yearFilter";

function addMovie(movies, movie) {
	// zmenić w funkcję losującą
	const max = movies.length + 1;
	let randomIndex = Math.floor(Math.random() * max);

	//początek nowej tablicy movies
	const movies2 = [];

	//wrzuca do zmiennej filmy aż do wylosowanego indexu
	for (let i = 0; i < randomIndex + 1; i++) {
		movies2.push(movies[i]);
	}

	// potem wrzuca nasz nowy film
	movies2.push(movie);

	// następnie wrzuca reszte tablicy
	for (let i = randomIndex + 1; i < movies.length; i++) {
		movies2.push(movies[i]);
	}

	// zamienia nową tablice na starą
	movies = movies2;

	// kasowanie istniejacych kafelków
	let tiles = document.getElementsByClassName("tile");
	while (tiles.length > 0) {
		tiles[0].remove();
	}

	for (let movie of movies) {
		createTile(movie.name, movie.img, movie.year, movie.rating);
	}

	// aktualizacja innych funkcji
	countTiles();
	averageRating();
	colorTiles();
	generateSelectOptions();
	return movies;
}

function addMovieButtonHandler(movies) {
	let name = document.getElementById("new-name");
	let year = document.getElementById("new-year");
	let img = document.getElementById("new-img");
	let rating = document.getElementById("new-rating");
	let movie = {};
	movie.name = name.value;
	movie.year = year.value;
	movie.img = img.value;
	movie.rating = rating.value;

	//obsługa błędów
	if (movie.name == "" || movie.year == "") {
		alert("Podaj tytuł filmu oraz rok");
		return movies;
	} else {
		movies = addMovie(movies, movie);
		alert("Film dodany");
		return movies;
	}
}

//zmienne globalne potrzebne do obsługi podglądu
let name = document.getElementById("new-name");
let year = document.getElementById("new-year");
let img = document.getElementById("new-img");
let rating = document.getElementById("new-rating");
const movieNamePrev = document.createElement("div");
const movieImagePrev = document.createElement("img");
const movieYearPrev = document.createElement("span");
const movieStarsPrev = document.createElement("span");

function preview() {
	const preview = document.getElementById("preview");
	const tilePrev = document.createElement("div");

	tilePrev.className = "tile_popup";

	movieNamePrev.className = "movie_name";
	movieYearPrev.className = "movie_year";
	movieImagePrev.className = "movie_image";
	movieStarsPrev.className = "movie_stars";

	preview.append(tilePrev);
	tilePrev.append(movieYearPrev, movieImagePrev, movieNamePrev, movieStarsPrev);
}

function createPreview() {
	movieNamePrev.innerHTML = name.value;
	movieYearPrev.innerHTML = year.value;

	movieImagePrev.src = movieImagePrev.value;
	movieImagePrev.src =
		movieImagePrev.value ||
		"https://dummyimage.com/200x285/ededed/000000.jpg&text=No+Image";
	movieImagePrev.alt = name.value;

	movieStarsPrev.innerHTML = "Ocena: ";

	if (rating.value == 0) {
		movieStarsPrev.innerHTML = "<em>Brak oceny</em>";
	}

	for (let i = 0; i < rating.value; i++) {
		movieStarsPrev.innerHTML += '<i class="star fas fa-star"></i>';
	}
}

name.onkeypress = function (event) {
	createPreview();
};

year.onchange = function (event) {
	createPreview();
};

rating.onchange = function (event) {
	createPreview();
};

img.onchange = function (event) {
	createPreview();
};

export { addMovieButtonHandler, preview };
