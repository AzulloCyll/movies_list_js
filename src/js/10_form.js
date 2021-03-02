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

	countTiles();
	averageRating();
	colorTiles();
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
	movies = addMovie(movies, movie);
	return movies;
}

export { addMovieButtonHandler };
