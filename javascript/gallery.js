var slideNum = 1;
showSlides(slideNum);

function nextSlide(n) {
    showSlides(slideNum += n);
}

function currentSlide(n) {
    showSlides(slideNum = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideNum = 1 }
    if (n < 1) { slideNum = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideNum - 1].style.display = "block";
    dots[slideNum - 1].className += " active";
    captionText.innerHTML = dots[slideNum - 1].alt;
}

