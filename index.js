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

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      this.contact_number.value = (Math.random() * 100000) | 0;
      let name = this.user_name.value,
        email = this.user_email.value,
        message = this.message.value;
      if (name.length > 0 && email.length > 0 && message.length > 0) {
        emailjs.sendForm("service_v17v61p", "template_m5g6qo9", this);
        document.getElementById("contact-form").reset();
      } else {
        alert("Your data is not complete");
      }
    });
};
