import { movies } from "./index";

// dodawanie nowego filmu w losowym miejscu

//przykładowy film TODO - ma być zmienną funkcji
let movie = { name: "NNNNNNNNNNNN", img: "film" };

// zmenić w funkcję losującą
const max = movies.length + 1;
let randomIndex = Math.floor(Math.random() * max);

//początek nowej tablicy movies
const movies2 = [];

//wrzuca do zmiennej filmy aż do wylosowanego indexu
for (let i = 0; i < randomIndex; i++) {
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

console.log(movies);

// kasowanie istneijacych kafelków
const tiles = document.getElementsByClassName("tile");
console.log(tiles);

for (let i = 0; i < tiles.length; i++) {
	tiles[i].remove();
	console.log("ttt");
}

//wrzucenie nowych na podstawie zmienionej tablicy
for (let movie of movies) {
	createTile(movie.name, movie.img);
}

console.log(movies);
