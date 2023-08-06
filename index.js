window.onscroll = function () {
  myFunction();
};
let navbar = document.getElementById("principal");

let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}



let slideIndex3 = 1;

function currentSlide3(n) {
  showSlides3((slideIndex3 = n));
}

function showSlides3(n) {
  let i;
  let slides = document.getElementsByClassName("img-container-2");
  let dots = document.getElementsByClassName("slider-2-container-mini-content");
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


var acc = document.getElementsByClassName("accordion");

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none"

    } else {
      panel.style.display = "block"

    }
  });
}
