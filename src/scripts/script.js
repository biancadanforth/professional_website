/*******************************************************
* Header transitions when scrolling
*******************************************************/

var header = document.getElementById("header");

window.addEventListener('scroll', minimizeHeader);

function minimizeHeader() {
	if (window.pageYOffset === 0) {
		header.classList.remove("minimize");
	} else {
		header.classList.add("minimize");
	}
}

/*******************************************************
* Ensure adequate space at top of page for fixed header
*******************************************************/

var h = header.clientHeight;
var main = document.getElementById("main");
main.style.paddingTop = h.toString() + "px";


/*******************************************************
* When a nav link is clicked, make that the active page in <nav>
*******************************************************/

var homeNavLink = document.getElementById("home-nav-link");
var moreInfoNavLink = document.getElementById("more-info-nav-link");

homeNavLink.onclick = function() {
	updateActivePage(1);
};

moreInfoNavLink.onclick = function() {
	updateActivePage(2);
};


function updateActivePage(n){
	switch (n) {
		// user clicked on 'Home' nav link
		case 1:
			header.classList.add("home-page");
			header.classList.remove("work-page", "more-info-page", "project-page");
			break;
		// user clicked on 'More Info' nav link
		case 2:
			header.classList.add("more-info-page");
			header.classList.remove("home-page", "work-page", "project-page");
			break;
	}
}

/*******************************************************
* <nav> Work link submenu controls
*******************************************************/

var dropdownSubmenu = document.getElementById("dropdown-submenu");
var workNavListItem = document.getElementById("work-nav-list-item");

workNavListItem.onclick = showDropdown;

// Hide dropdown menu when user clicks away from workNavListItem
document.addEventListener('click', function(event) {
  var isClickInside = workNavListItem.contains(event.target);

  // if the user clicks anywhere other than the workNavListItem
  if (!isClickInside) {
    hideDropdown();
  }
});

function showDropdown() {
  dropdownSubmenu.classList.toggle("hidden");
  workNavListItem.classList.toggle("active");
}

function hideDropdown() {
  dropdownSubmenu.classList.add("hidden");
  workNavListItem.classList.remove("active");
}