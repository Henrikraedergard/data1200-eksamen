function showNavMenu() {
	let navList = document.getElementById("nav-list");
	navList.style.display = "flex";
	navList.style.left = "0vw";

	document.querySelector("body").style.overflow = "hidden";
}

function hideNavBar() {
	let navList = document.getElementById("nav-list");
	navList.style.display = "none";
	navList.style.left = "110vw";

	document.querySelector("body").style.overflow = "scroll";
}
