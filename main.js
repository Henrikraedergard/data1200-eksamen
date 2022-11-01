// Henter tiden til datamaskinen
let dag = new Date().getDay();
let tid = new Date().getHours();

// Hvis det er søndag
if (dag > 0) {
	// hvis det er lørdag
	if (dag == 6) {
		// hvis tiden på datamaskinen er mellom 10 og 16
		if (tid >= 10 && tid < 17) {
			setÅpent();
		}

		// Alle andre dager enn lørdag
		// Hvis tiden er mellom 10 og 15
	} else if (tid >= 10 && tid < 16) {
		setÅpent();
	}
}

// Endrer teksten til å si at butikken er åpen
function setÅpent() {
	const erÅpentEl = document.getElementById("erÅpent");
	erÅpentEl.innerHTML =
		"Cafeen er <span title='Vi bruker din maskins lokal tid til å sjekke om cafeen er åpen' style='color: green;'>åpen</span";
}
