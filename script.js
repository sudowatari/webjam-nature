//variable

const sunflowerBtn = document.querySelector('#click1'),
        daisyBtn = document.querySelector('#click2');
const SFmodal = document.querySelector('.SFmodal'),
        daisyModal = document.querySelector('.daisymodal');
const close = document.querySelector('.close');

//functions

function openModal(e) {
    e.preventDefault();
    SFmodal.style.display = 'block';
}

function closeModal() {
    SFmodal.style.display = 'none';
}

//close event
close.addEventListener('click', closeModal);

//cards
    //sunflower
sunflowerBtn.addEventListener('click', openModal);
SFmodal.addEventListener('click', closeModal);

    //daisy
daisyBtn.addEventListener('click', openModal);
daisyModal.addEventListener('click', closeModal);