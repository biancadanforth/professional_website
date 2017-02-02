// Header transitions when scrolling

var header = document.getElementById("header");

window.addEventListener('scroll', minimizeHeader);

function minimizeHeader() {
	if (window.pageYOffset === 0) {
		header.classList.remove("minimize");
	} else {
		header.classList.add("minimize");
	}
}

// Ensure adequate space at top of page for fixed header

var h = header.clientHeight;
var main = document.getElementById("main");
main.style.paddingTop = h.toString() + "px";


// When a nav link is clicked, make that the active page in <nav>
var homeNavLink = document.getElementById("home-nav-link");
var workNavLink = document.getElementById("work-nav-link");
var moreInfoNavLink = document.getElementById("more-info-nav-link");

homeNavLink.onclick = function() {
	updateActivePage(1);
};

workNavLink.onclick = function() {
	updateActivePage(2);
};

moreInfoNavLink.onclick = function() {
	updateActivePage(3);
};


function updateActivePage(n){
	console.log('hi');
	switch (n) {
		// user clicked on 'Home' nav link
		case 1:
			header.classList.add("home-page");
			header.classList.remove("work-page", "more-info-page", "project-page");
			break;
		// user clicked on 'Work' nav link
		case 2:
			header.classList.add("work-page");
			header.classList.remove("home-page", "more-info-page", "project-page");
			break;
		// user clicked on 'More Info' nav link
		case 3:
			header.classList.add("more-info-page");
			header.classList.remove("home-page", "work-page", "project-page");
			break;
	}
}