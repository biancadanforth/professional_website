var header = document.getElementById("header");

window.addEventListener('scroll', minimizeHeader);

function minimizeHeader() {
	if (document.body.scrollTop === 0) {
		header.classList.remove("minimize");
	} else {
		header.classList.add("minimize");
	}
}

var h = header.clientHeight;
var main = document.getElementById("main");
main.style.paddingTop = h.toString() + "px";
