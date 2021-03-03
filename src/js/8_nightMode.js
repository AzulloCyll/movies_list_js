import { colorTiles } from "./1_movielist";

function nightMode() {
	const body = document.body;
	const buttons = document.getElementsByTagName("button");
	const select = document.getElementById("select");
	const search = document.getElementById("search");
	const navopen = document.getElementById("nav-open");
	const nav = document.getElementById("nav");
	const preview = document.getElementById("preview");
	const popup = document.getElementById("popup");
	const rating = document.getElementById("new-rating");
	const name = document.getElementById("new-name");
	const year = document.getElementById("new-year");

	body.classList.add("dark");
	search.classList.add("dark");
	select.classList.add("dark");
	navopen.classList.add("dark");
	nav.classList.add("dark");
	preview.classList.add("dark");
	rating.classList.add("dark");
	popup.classList.add("dark");
	name.classList.add("dark");
	year.classList.add("dark");

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].classList.add("dark");
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
	const preview = document.getElementById("preview");
	const popup = document.getElementById("popup");
	const rating = document.getElementById("new-rating");
	const name = document.getElementById("new-name");
	const year = document.getElementById("new-year");

	body.classList.remove("dark");
	search.classList.remove("dark");
	select.classList.remove("dark");
	navopen.classList.remove("dark");
	nav.classList.remove("dark");
	preview.classList.remove("dark");
	rating.classList.remove("dark");
	popup.classList.remove("dark");
	name.classList.remove("dark");
	year.classList.remove("dark");

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove("dark");
	}

	colorTiles();
}

export { nightMode, normalMode };
