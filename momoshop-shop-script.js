const categoryToggleAll = document.getElementById('all-toggle');
const categoryToggleClothes = document.getElementById('clothes-toggle');
const categoryToggleDecor = document.getElementById('decor-toggle');
const categoryToggleStationery = document.getElementById('stationery-toggle');
const categoryToggleGadgets = document.getElementById('gadgets-toggle');


const categoryToggleButtons = document.getElementsByClassName('category-toggle');


for (let i = 0; i < categoryToggleButtons.length; i++) {
  categoryToggleButtons[i].addEventListener('click', function() {
    // Remove the 'tab-button-active' class from all buttons
    const allButtons = document.querySelectorAll('#shop-category .tab-button');
    for (let j = 0; j < allButtons.length; j++) {
      allButtons[j].classList.remove('tab-button-active');
    }

    // Add the 'tab-button-active' class to the clicked button
    this.classList.add('tab-button-active');
  });
}
  
  


const formToggleBtn = document.getElementById('form-toggle');
const shopFormContainer = document.getElementById('shop-form-container');
const submitButton = document.getElementById('filter-submit')

formToggleBtn.addEventListener('click', function() {
  shopFormContainer.classList.toggle('show');
  formToggleBtn.classList.toggle('tab-button-active');
});

submitButton.addEventListener('click', function() {
    shopFormContainer.classList.remove('show');
    formToggleBtn.classList.toggle('tab-button-active');
  });

document.addEventListener('click', function(event) {
    if (!shopFormContainer.contains(event.target) && !formToggleBtn.contains(event.target)) {
      shopFormContainer.classList.remove('show');
      formToggleBtn.classList.remove('tab-button-active');
    }
});