// lagrer de tre forskjellige verdiene vi ønsker å bruke for radiusen
let sharp = "0px";
let rounded = "40px";
let circle = "50%";

// Setter opp flere forskjellige kombinasjoner med de forskjellige radiusene
const borderRadiuses = [
	{
		red: sharp,
		green: rounded,
		orange: rounded,
		purple: circle,
		blue: rounded,
	},
	{
		red: rounded,
		green: sharp,
		orange: rounded,
		purple: sharp,
		blue: sharp,
	},
	{
		red: rounded,
		green: rounded,
		orange: rounded,
		purple: rounded,
		blue: rounded,
	},
	{
		red: sharp,
		green: sharp,
		orange: sharp,
		purple: circle,
		blue: sharp,
	},
];

// Teller repitisjoner av intervallet
let counter = 0;

// endrer på hjørneradiusen til de 5 forskjellige boksene
function changeStyle() {
	let grid = document.getElementById("color-boxes").children;
	grid[0].style.borderRadius = borderRadiuses[counter].red;
	grid[1].style.borderRadius = borderRadiuses[counter].green;
	grid[2].style.borderRadius = borderRadiuses[counter].blue;
	grid[3].style.borderRadius = borderRadiuses[counter].purple;
	grid[4].style.borderRadius = borderRadiuses[counter].orange;

	counter++;
	// hvis antall repitisjoner er lik antallet med kombinasjoner
	if (counter == borderRadiuses.length) {
		counter = 0;
	}
}
// Bare for å starte
changeStyle();

// starter intervallet
let interval = setInterval(changeStyle, 1400);

// Dersom bruker trykker på en boks
function showText(event) {
	let element = event.target;
	// viser bakgrunn som bruker kan trykke på for å lukke boksen
	let bg = document.getElementById("bg");
	bg.style.display = "block";

	// skrur av intervallet
	clearInterval(interval);

	// Setter radiusen på alle elementer til å bli avrundet
	let grid = document.getElementById("color-boxes").children;
	for (let i = 0; i < grid.length; i++) {
		grid[i].style.borderRadius = rounded;
	}

	// Viser elementet ved å sette på en active klasse
	if (element.classList.value != "active") {
		element.classList.add("active");
	}

	let helperText = document.getElementById("helper-text");
	helperText.innerText = "Trykk utenfor teksteboksen for å lukke den";

	let allBoxes = document.getElementById("color-boxes");
}

// dersom bruker trykker på bakgrunnen
function removeText() {
	// fjerner klassen active fra alle boksene
	let grid = document.getElementById("color-boxes").children;
	for (let i = 0; i < grid.length; i++) {
		grid[i].classList.remove("active");
	}
	// starter intervallet og skjuler bakgrunnen
	interval = setInterval(changeStyle, 2000);
	bg.style.display = "none";
	changeStyle();

	let helperText = document.getElementById("helper-text");
	helperText.innerText = "Trykk på boksene over";
}
