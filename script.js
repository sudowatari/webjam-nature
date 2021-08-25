// variable

const sunflowerBtn = document.querySelector('#click1'),
        daisyBtn = document.querySelector('#click2'),
        bcBtn = document.querySelector('#click3'),
        poppyBtn = document.querySelector('#click4'),
        chamBtn = document.querySelector('#click5'),
        lavBtn = document.querySelector('#click6'),
        DLBtn = document.querySelector('#click7'),
        gerBtn = document.querySelector('#click8'),
        cfBtn = document.querySelector('#click9');
        
const SFmodal = document.querySelector('.SFmodal'),
        daisyModal = document.querySelector('.daisymodal'),
        BCModal = document.querySelector('.BCmodal'),
        poppyModal = document.querySelector('.poppymodal')
        chamModal = document.querySelector('.chammodal')
        lavModal = document.querySelector('.lavmodal')
        DLModal = document.querySelector('.DLmodal')
        gerModal = document.querySelector('.germodal'),
        CFModal = document.querySelector('.CFmodal');

const close = document.querySelector('.close');

//functions

//sunflowers

function openModalSF(e) {
    e.preventDefault();
    SFmodal.style.display = 'block';
}

function closeModalSF() {
    SFmodal.style.display = 'none';
}

sunflowerBtn.addEventListener('click', openModalSF);
SFmodal.addEventListener('click', closeModalSF);

//daisy

function openModalD(e) {
    e.preventDefault();
    daisyModal.style.display = 'block';
}

function closeModalD() {
    daisyModal.style.display = 'none';
}

daisyBtn.addEventListener('click', openModalD);
daisyModal.addEventListener('click', closeModalD);

//buttercup

function openModalBC(e) {
    e.preventDefault();
    BCModal.style.display = 'block';
}

function closeModalBC() {
    BCModal.style.display = 'none';
}

bcBtn.addEventListener('click', openModalBC);
BCModal.addEventListener('click', closeModalBC);

//poppy

function openModalP(e) {
    e.preventDefault();
    poppyModal.style.display = 'block';
}

function closeModalP() {
    poppyModal.style.display = 'none';
}

poppyBtn.addEventListener('click', openModalP);
poppyModal.addEventListener('click', closeModalP);

//chamomile

function openModalC(e) {
    e.preventDefault();
    chamModal.style.display = 'block';
}

function closeModalC() {
    chamModal.style.display = 'none';
}

chamBtn.addEventListener('click', openModalC);
chamModal.addEventListener('click', closeModalC);

//lavender

function openModalL(e) {
    e.preventDefault();
    lavModal.style.display = 'block';
}

function closeModalL() {
    lavModal.style.display = 'none';
}

lavBtn.addEventListener('click', openModalL);
lavModal.addEventListener('click', closeModalL);


//chamomile

function openModalC(e) {
    e.preventDefault();
    chamModal.style.display = 'block';
}

function closeModalC() {
    chamModal.style.display = 'none';
}

chamBtn.addEventListener('click', openModalC);
chamModal.addEventListener('click', closeModalC);


//daylily

function openModalDL(e) {
    e.preventDefault();
    DLModal.style.display = 'block';
}

function closeModalDL() {
    DLModal.style.display = 'none';
}

DLBtn.addEventListener('click', openModalDL);
DLModal.addEventListener('click', closeModalDL);


//Geranium

function openModalG(e) {
    e.preventDefault();
    gerModal.style.display = 'block';
}

function closeModalG() {
    gerModal.style.display = 'none';
}

gerBtn.addEventListener('click', openModalG);
gerModal.addEventListener('click', closeModalG);

//coneflower

function openModalCF(e) {
    e.preventDefault();
    CFModal.style.display = 'block';
}

function closeModalCF() {
    CFModal.style.display = 'none';
}

cfBtn.addEventListener('click', openModalCF);
CFModal.addEventListener('click', closeModalCF);


//bind method"
// sunflowerBtn.addEventListener('click', openModal.bind(SFmodal));
// SFModal.addEventListener('click', closeModal.bind(SFmodal));
// daisyBtn.addEventListener('click', openModal.bind(daisyModal));
// daisyModal.addEventListener('click', closeModal.bind(daisyModal))