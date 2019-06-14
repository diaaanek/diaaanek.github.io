/* jslint esnext:true */

///////////////////////////////////////
// GETTING ELEMENTS FROM DOM
///////////////////////////////////////
let nav = document.getElementById("main-nav");
let header = document.querySelector('#header');
let navIcon = document.querySelector('.mobile-nav-icon');
let closeIcon = document.querySelector('.mobile-close-icon');
let mobileNav = document.getElementById('mobileNav');

///////////////////////////////////////
// STICKY NAV BAR
///////////////////////////////////////

window.onscroll = function() {
    makeSticky();
}

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

navIcon.addEventListener('click', openNav);
closeIcon.addEventListener('click', closeNav);

function openNav() {
  mobileNav.style.height = "100%";
}

function closeNav() {
  mobileNav.style.height = "0%";
}


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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


// IMAGE CAROUSEL

var imgList = document.getElementById('imgList');
var scrollRight = document.getElementById('scroll-right');
var scrollLeft = document.getElementById('scroll-left');

// When a user clicks on the right arrow, the ul will scroll 750px to the right
scrollRight.addEventListener('click', (event) => {
  imgList.scrollBy(750, 0);
});

// When a user clicks on the left arrow, the ul will scroll 750px to the left
scrollLeft.addEventListener('click', (event) => {
  imgList.scrollBy(-750, 0);
});
