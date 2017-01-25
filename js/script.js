// Header transitions when scrolling

var header = document.getElementById("header");

window.addEventListener('scroll', minimizeHeader);

function minimizeHeader() {
	if (document.body.scrollTop === 0) {
		header.classList.remove("minimize");
	} else {
		header.classList.add("minimize");
	}
}

// Ensure adequate space at top of page for fixed header

var h = header.clientHeight;
var main = document.getElementById("main");
main.style.paddingTop = h.toString() + "px";
