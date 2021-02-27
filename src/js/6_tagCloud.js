import { showAllTiles } from "./7_search";

//chmura tagów

// oblicza ilość wystąpień danego słowa
function countAppearances() {
	const titles = document.getElementsByClassName("movie_name");
	let allTitles = []; //macierz wszystkich tytułów

	for (let i = 0; i < titles.length; i++) {
		allTitles.push(titles[i].innerHTML);
	}

	let allWords = []; //macierz słów

	for (let i = 0; i < allTitles.length; i++) {
		allWords += allTitles[i] + " ";
	}

	allWords = allWords.trim().toLowerCase(); //usuwam białe znaki na początku i końcu

	let wordsArr = allWords.split(" "); // macierz słów

	//tworzę obiekt z liczbą wystąpień danego słowa
	let apperancesObj = wordsArr.reduce(function (counter, index) {
		if (typeof counter[index] == "undefined") {
			counter[index] = 1;
		} else {
			counter[index] += 1;
		}

		return counter;
	}, {});
	return apperancesObj;
}

//wyświetla tagi w odpowiedni sposób
function renderCloud() {
	const appearances = countAppearances();
	const cloud = document.getElementById("cloud");

	for (let word in appearances) {
		const link = document.createElement("span");
		link.innerHTML = word;
		link.classList.add("cloud-link");
		cloud.append(link);

		switch (appearances[word]) {
			case 1:
				link.classList.add("font-8");
				break;

			case 2:
				link.classList.add("font-12");
				break;

			case 3:
				link.classList.add("font-20");
				break;

			case 4:
				link.classList.add("font-30");
				break;

			default:
				link.classList.add("font-42");
				break;
		}
	}
}

function renderAllMoviesButton() {
	const allButton = document.createElement("button");
	allButton.textContent = "Pokaż wszystkie";
	cloud.append(allButton);
	allButton.onclick = function () {
		showAllTiles();
	};
}

export { countAppearances, renderCloud, renderAllMoviesButton };
