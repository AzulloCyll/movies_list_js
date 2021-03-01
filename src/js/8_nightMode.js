import { colorTiles } from "./1_movielist";

function nightMode() {
	const body = document.body;
	const buttons = document.getElementsByTagName("button");
	const select = document.getElementById("select");
	const search = document.getElementById("search");
	const years = document.getElementsByClassName("movie_year");
	const navopen = document.getElementById("nav-open");
	const nav = document.getElementById("nav");

	body.classList.add("dark");
	search.classList.add("dark");
	select.classList.add("dark");
	navopen.classList.add("dark");
	nav.classList.add("dark");

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].classList.add("dark");
	}
	for (let i = 0; i < years.length; i++) {
		years[i].classList.add("darktext");
	}
	colorTiles();
}

function normalMode() {
	const body = document.body;
	const buttons = document.getElementsByTagName("button");
	const select = document.getElementById("select");
	const search = document.getElementById("search");
	const years = document.getElementsByClassName("movie_year");
	const navopen = document.getElementById("nav-open");
	const nav = document.getElementById("nav");

	body.classList.remove("dark");
	search.classList.remove("dark");
	select.classList.remove("dark");
	navopen.classList.remove("dark");
	nav.classList.remove("dark");

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove("dark");
	}
	for (let i = 0; i < years.length; i++) {
		years[i].classList.remove("darktext");
	}
	colorTiles();
}

export { nightMode, normalMode };
