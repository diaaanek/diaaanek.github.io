/* jslint esnext:true */

///////////////////////////////////////
// GETTING ELEMENTS FROM DOM
///////////////////////////////////////
let nav = document.getElementById("main-nav");
let header = document.querySelector("#header");
let navIcon = document.querySelector(".mobile-nav-icon");
let closeIcon = document.querySelector(".mobile-close-icon");
let mobileNav = document.getElementById("mobileNav");

///////////////////////////////////////
// STICKY NAV BAR
///////////////////////////////////////

window.onscroll = function() {
  makeSticky();
  scrollFunction();
};

function makeSticky() {
  if (window.pageYOffset >= header.offsetHeight) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

///////////////////////////////////////
// MOBILE NAV
///////////////////////////////////////

/* Open when someone clicks on the span element */

navIcon.addEventListener("click", openNav);
closeIcon.addEventListener("click", closeNav);

function openNav() {
  mobileNav.style.height = "100%";
}

function closeNav() {
  mobileNav.style.height = "0%";
}

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {
//
// };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// CAROUSEL

var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity(".main-carousel", {
  // options
});
