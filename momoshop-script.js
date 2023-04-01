const carousel = document.querySelector('#new-products-viewport');
const carouselItems = document.querySelectorAll('.new-container');
const prevButton = document.querySelector('#new-prev-button');
const nextButton = document.querySelector('#new-next-button');
let currentPosition = 0;

prevButton.addEventListener('click', () => {
  
  if (currentPosition = -50) {
    currentPosition = 0;
    carousel.style.transform = `translateX(${currentPosition}%)`;
    document.querySelector('#new-prev-button').style.backgroundColor='rgb(255, 32, 66)';
    document.querySelector('#new-next-button').style.backgroundColor='rgb(253, 76, 103)';
    document.querySelector('#new-prev-button').style.transform='scale(1.2)';
    document.querySelector('#new-next-button').style.transform='scale(1.0)';
  }

});

nextButton.addEventListener('click', () => {
    if (currentPosition === 0){
        (currentPosition = -50)
        carousel.style.transform = `translateX(${currentPosition}%)`;
        document.querySelector('#new-prev-button').style.backgroundColor='rgb(253, 76, 103)';
        document.querySelector('#new-next-button').style.backgroundColor='rgb(255, 32, 66)';
        document.querySelector('#new-prev-button').style.transform='scale(1.0)';
        document.querySelector('#new-next-button').style.transform='scale(1.2)';
    }
    

});