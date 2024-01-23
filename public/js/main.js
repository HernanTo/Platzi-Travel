const htmlElement = document.querySelector('html');
let toggleButton = document.querySelector('#btn-dark');
let toggleButtonSm = document.querySelector('#btn-dark-mb');
let toggleButtonBanner = document.querySelector('#btn-dark-ban');

toggleButton.addEventListener('click', ()=>{darkMode()});
toggleButtonSm.addEventListener('click', ()=>{darkMode()});
toggleButtonBanner.addEventListener('click', ()=>{darkMode()});

function darkMode(){
    htmlElement.classList.toggle('dark');
}