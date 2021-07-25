export default (function(){

    /* console.log("hello from slide.js"); */

let slideIndex = 1;
showSlides(slideIndex);

document.getElementById("prev").onclick = function () {
  showSlides(slideIndex += (-1));
}

document.getElementById("next").onclick = function () {
    showSlides(slideIndex += 1);
}

document.getElementById("dot1").onclick = function () {
    showSlides(slideIndex = 1);
}  

document.getElementById("dot2").onclick = function () {
    showSlides(slideIndex = 2);
}  

document.getElementById("dot3").onclick = function () {
    showSlides(slideIndex = 3);
}  


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

}())