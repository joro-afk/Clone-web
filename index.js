window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById("principal");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function addClass() {
  let element = document.getElementById("fifth");
  element.className = element.className === "active" ? "inactive" : "active";
}

let slideIndex = 0;

let slideIndex2 = 1;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("img-container-1");
  let dots = document.getElementsByClassName("slider-1-container-mini-img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].style.className += " active";

  setTimeout(showSlides, 50000);
}

function currentSlide(n) {
  showSlides2((slideIndex = n));
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("img-container-1");
  let dots = document.getElementsByClassName("slider-1-container-mini-img");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let slideIndex3 = 1;

function currentSlide3(n) {
  showSlides3((slideIndex3 = n));
}

function showSlides3(n) {
  let i;
  let slides = document.getElementsByClassName("img-container-2");
  let dots = document.getElementsByClassName(
    "slider-2-container-mini-content "
  );
  if (n > slides.length) {
    slideIndex3 = 1;
  }
  if (n < 1) {
    slideIndex3 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3 - 1].style.display = "inline";
  dots[slideIndex3 - 1].className += " active";
}
