const dotContainer = document.getElementById('puntjes');

function addDots() {
    let slides = document.getElementsByClassName('slides');
    for (let i = 0; i < slides.length; i++) {
        let dot = document.createElement('span');
        dot.classList.add('dot');
        dot.onclick = function () {
            currentSlide(i + 1);
        };
        dotContainer.appendChild(dot);
    }
};
addDots();

let slideIndex = 1;
// slide laten zien op index 1, dus de eerste
showSlides(slideIndex);


// volgende / vorige
// als je op volgende klikt, gaat die omhoog, anders omlaag
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    // laat slide zien die op index n staat
    // voor de puntjes onderaan
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slides');
    let dots = document.getElementsByClassName('dot');

    // als n groter is dan aantal slides, 
    // zet slideIndex weer op 1, en laat eerste zien
    if (n > slides.length) {
        slideIndex = 1
    } if (n < 1) { // als de index lager dan 1 is, wordt het op de laatste gezet
        slideIndex = slides.length
    } // alle slides standaard op verbogen zetten
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    } // 'active' class verwijderen van alle dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // toon geselecteerde slide
    slides[slideIndex - 1].style.display = "block";
    // voeg actief toe aan de bijbehorende dot
    dots[slideIndex - 1].className += " active";
}

/*
todo:
- automatisch afspelen
gebruik setInterval() om automatisch te wisselen, en mouseenter en mouseleave om te pauzeren
update 21/06/2025: het gaat nu automatisch verder, alleen nog met mouseleave en zo

- betere animates
css
*/

function test() {
    let index = slideIndex += 1;
    showSlides(index);
}

document.body.addEventListener('mouseenter', function (e) {
    console.log(e);
    setInterval(test, 5000)
});