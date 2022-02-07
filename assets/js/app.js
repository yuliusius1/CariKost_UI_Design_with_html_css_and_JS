var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  setInterval(function () {
    showSlides(n++);
  }, 2000);

  var i;
  var sliderContainer = document.getElementsByClassName("slider-container");
  var dots = document.getElementsByClassName("dot");
  if (n > sliderContainer.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = sliderContainer.length;
  }
  for (i = 0; i < sliderContainer.length; i++) {
    sliderContainer[i].style.opacity = "0";
    sliderContainer[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  sliderContainer[slideIndex - 1].style.opacity = "1";
  sliderContainer[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var tglbtn = document.getElementById("nav-toggle");
var navlst = document.getElementById("nav-list");

tglbtn.addEventListener("click", () => {
  navlst.classList.toggle("active");
});
