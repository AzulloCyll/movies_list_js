const CLASS_OPEN_MENU = "is-show"; // nazwa zmiennej zapisana w taki sposób, aby wyróżnić globalną, stałą wartość
const buttonMenuOpen = document.getElementById("nav-open");
const buttonMenuClose = document.getElementById("nav-close");
const menu = document.getElementById("nav");

function showHide() {
	// Wyświetlenie menu po kliknięciu w przycisk (burger menu)
	buttonMenuOpen.addEventListener("click", function () {
		menu.classList.add(CLASS_OPEN_MENU);
	});

	// Zamykanie menu po kliknięciu w przycisk (np. "X")
	buttonMenuClose.addEventListener("click", () => {
		closeMenu(menu);
	});

	// Zatrzymanie zdarzenia poniżej
	// Dzięki temu klikając w obszar "menu" nie zamkniemy/ukryjemy go
	menu.addEventListener("click", (e) => {
		e.stopPropagation();
	});

	// Zamykanie menu po kliknięciu w obaszar całej strony/element"body", ale z wyłączeniem przycisku otwierajacego menu oraz samego menu i sprawdzenie czy menu jest aktywne/otwarte
	document.addEventListener("click", (event) => {
		if (
			event.target != menu &&
			event.target != buttonMenuOpen &&
			event.target != buttonMenuOpen.childNodes[0] &&
			menu.classList.contains(CLASS_OPEN_MENU)
		) {
			closeMenu(menu);
		}
	});

	// Zamykanie menu po kliknięciu w klawisz ESC
	// Zdarzenie celowo przypisane dla "document", czyli całego "body", aby klikania w klawisz ESC był dostępny zawsze
	document.addEventListener("keydown", (event) => {
		let isEscape = false;
		if ("key" in event) {
			isEscape = event.key === "Escape" || event.key === "Esc";
		} else {
			isEscape = event.keyCode === 27;
		}
		// Jeśli klawisz ESC został kliknięty oraz sprawdzamy czy menu jest aktywny (wyświetlone), aby przypadkiem nie zamknąć innego elementu, który mógłby mieć również przypisaną jakąś akcję do klawisza ESC
		if (isEscape && menu.classList.contains(CLASS_OPEN_MENU)) {
			closeMenu(menu);
		}
	});

	// Funkcja zamykania menu
	function closeMenu(menuElement) {
		menuElement.classList.remove(CLASS_OPEN_MENU);
	}
}

export { showHide };
