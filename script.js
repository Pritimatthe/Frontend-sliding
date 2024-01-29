var images = document.querySelectorAll('.container img');
var i = 0;

images.forEach((image) => {
    image.style.left = `${i * 100}%`;
    i++;
});

var btnNext = document.querySelector('#btnNext'); // Use querySelector, not querySelectorAll
var btnPrev = document.querySelector('#btnPrev'); // Use querySelector, not querySelectorAll
var counter = 0;

btnNext.addEventListener('click', function () {
    counter = counter + 1;
    if(counter>4){
        counter=0;
    }

    images.forEach((image) => {
        image.style.transform = `translateX(-${counter * 100}%)`;
    });
});
btnPrev.addEventListener('click', function () {
    counter = counter-1;
    if(counter<0){
        counter=4;
    }

    images.forEach((image) => {
        image.style.transform = `translateX(-${counter * 100}%)`;
    });
});
