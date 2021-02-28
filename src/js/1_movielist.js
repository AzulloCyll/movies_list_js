const main = document.getElementById("main");
main.className = "c-tiles";

//funkcja zmiany liczby kolumn
function switchCollumns(galleryWrapper) {
	const button = document.querySelector("[data-button-switch-to]");
	const text3cols = button.dataset["text-3cols"];
	const text5cols = button.dataset["text-5cols"];

	//domyślny widok
	const text = document.createTextNode(" " + text3cols);
	button.appendChild(text);
	button.dataset.buttonSwitchTo = "5";
	galleryWrapper.classList.add("c-tiles--5cols");

	const textBeingChanged = button.childNodes[1];

	button.addEventListener("click", function (event) {
		const eventTarget = event.target;
		if (eventTarget.dataset.buttonSwitchTo === "5") {
			//zmienia tekst przycisku
			eventTarget.dataset.buttonSwitchTo = "3";
			textBeingChanged.nodeValue = " " + text5cols;
			//zmiana wyswietlania na 3 kolumny
			galleryWrapper.classList.remove("c-tiles--5cols");
			galleryWrapper.classList.add("c-tiles--3cols");
		} else {
			//zmana tekstu
			eventTarget.dataset.buttonSwitchTo = "5";
			textBeingChanged.nodeValue = " " + text3cols;
			//zmiana wyswietlania na 5 kolumn
			galleryWrapper.classList.remove("c-tiles--3cols");
			galleryWrapper.classList.add("c-tiles--5cols");
		}
	});
	return button;
}

// Wywoływania tylko w momencie skalowania okna przeglądarki
function onResizeHandler(element) {
	let button = document.getElementsByClassName("columns-btn")[0];
	let classList = main.classList;

	if (window.innerWidth < 1200) {
		element.classList.remove("desktop-class");
		element.classList.add("mobile-class");
		main.classList.add("c-tiles--2cols");
		button.disabled = true;
	} else {
		element.classList.remove("mobile-class");
		element.classList.add("desktop-class");
		main.classList.remove("c-tiles--2cols");
		main.classList = classList;
		button.disabled = false;
	}
}

//generacja kafelka
function createTile(name, src) {
	const tile = document.createElement("div");
	const movieName = document.createElement("span");
	const movieImage = document.createElement("img");
	const movieYear = document.createElement("span");
	const movieStars = document.createElement("span");

	//fix białych znaków w nazwach
	const nameTrimmed = name.trim();

	tile.className = "tile";

	const nameWithoutYear = nameTrimmed.slice(0, nameTrimmed.length - 7);
	const year = nameTrimmed.slice(
		nameTrimmed.length - 5,
		nameTrimmed.length - 1
	);

	movieName.className = "movie_name";
	movieYear.className = "movie_year";
	movieImage.className = "movie_image";
	movieStars.className = "movie_stars";

	movieName.textContent = nameWithoutYear;
	movieYear.textContent = year;

	// dodaje losowo generowaną liczbę gwiazdek
	movieStars.textContent = "Ocena: ";
	let numberOfStars = _rng0_5();
	if (numberOfStars == 0) {
		movieStars.innerHTML = "<em>Brak oceny</em>";
	}
	for (let i = 0; i < numberOfStars; i++) {
		movieStars.innerHTML += '<i class="star fas fa-star"></i>';
	}

	movieImage.src =
		src || "https://dummyimage.com/200x285/ededed/000000.jpg&text=No+Image";
	movieImage.alt = name;

	main.append(tile);
	tile.append(movieYear, movieImage, movieName, movieStars);

	movieImage.onerror = onErrorHandler;
}

function onErrorHandler(event) {
	event.target.src =
		"https://dummyimage.com/200x285/ededed/000000.jpg&text=No+Image";
}

//koloruje kafelki co drugi
function colorTiles() {
	const tiles = document.getElementsByClassName("tile");
	const visibleTiles = [];

	for (let i = 0; i < tiles.length; i++) {
		if (!tiles[i].hasAttribute("hidden")) {
			visibleTiles.push(tiles[i]);
		}
	}

	//koloruje tylko te kafelki, które są widoczne
	for (let i = 0; i < visibleTiles.length; i++) {
		if (i % 2 == 0) {
			visibleTiles[i].style.backgroundColor = "rgb(217, 229, 243)";
		} else {
			visibleTiles[i].style.backgroundColor = "rgb(205, 240, 240)";
		}
	}
}

//generator liczb od 0 do 5 - używam do wygenerowania ocen
function _rng0_5() {
	return Math.floor(6 * Math.random());
}

export { switchCollumns, onResizeHandler, createTile, colorTiles };
