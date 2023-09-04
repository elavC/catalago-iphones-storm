const btnBlackColor = document.getElementById('colorsBlack');
const btnPurpleColor = document.getElementById('colorsPurple');
const btnBlueColor = document.getElementById('colorsBlue');
const btnSilverColor = document.getElementById('colorsSilver');

const divBlack = document.getElementById('black');
const divPurple = document.getElementById('purple');
const divBlue = document.getElementById('blue');
const divSilver = document.getElementById('silver');

const imageBlack = document.querySelectorAll('.imageBlack');
const imagePurple = document.querySelectorAll('.imagePurple');
const imageBlue = document.querySelectorAll('.imageBlue');
const imageSilver = document.querySelectorAll('.imageSilver');

const nextBtnBlack = document.getElementById('nextBlack');
const backBtnBlack = document.getElementById('backBlack');
const nextBtnPurple = document.getElementById('nextPurple');
const backBtnPurple = document.getElementById('backPurple');
const nextBtnBlue = document.getElementById('nextBlue');
const backBtnBlue = document.getElementById('backBlue');
const nextBtnSilver = document.getElementById('nextSilver');
const backBtnSilver = document.getElementById('backSilver');

const maxBlack = imageBlack.length;
const maxPurple = imagePurple.length;
const maxBlue = imageBlue.length;
const maxSilver = imageSilver.length;

let index = 0;

function nextImageBlack() {
    imageBlack[index].classList.remove('selectedBlack');

    index++;

    if(index === maxBlack -1) {
        nextBtnBlack.style.display = 'none';
    };

    imageBlack[index].classList.add('selectedBlack');
}

function backImageBlack() {
    imageBlack[index].classList.remove('selectedBlack');

    if (index > 0) {
        index--;
    }
   
    
    if(index !== maxBlack) {
        nextBtnBlack.style.display = 'flex';
    }

    imageBlack[index].classList.add('selectedBlack')
}


function nextImagePurple() {
    imagePurple[index].classList.remove('selectedPurple');

    index++;

    if(index === maxPurple -1) {
        nextBtnPurple.style.display = 'none';
    };

    imagePurple[index].classList.add('selectedPurple');
}

function backImagePurple() {
    imagePurple[index].classList.remove('selectedPurple');

    if (index > 0) {
        index--;
    }
   
    
    if(index !== maxPurple) {
        nextBtnPurple.style.display = 'flex';
    }

    imagePurple[index].classList.add('selectedPurple')
}

function nextImageBlue() {
    imageBlue[index].classList.remove('selectedBlue');

    index++;

    if(index === maxPurple -1) {
        nextBtnBlue.style.display = 'none';
    };

    imageBlue[index].classList.add('selectedBlue');
}

function backImageBlue() {
    imageBlue[index].classList.remove('selectedBlue');

    if (index > 0) {
        index--;
    }
   
    
    if(index !== maxBlue) {
        nextBtnBlue.style.display = 'flex';
    }

    imageBlue[index].classList.add('selectedBlue')
}

function nextImageSilver() {
    imageSilver[index].classList.remove('selectedSilver');

    index++;

    if(index === maxSilver -1) {
        nextBtnSilver.style.display = 'none';
    };

    imageSilver[index].classList.add('selectedSilver');
}

function backImageSilver() {
    imageSilver[index].classList.remove('selectedSilver');

    if (index > 0) {
        index--;
    }
   
    
    if(index !== maxSilver) {
        nextBtnSilver.style.display = 'flex';
    }

    imageSilver[index].classList.add('selectedSilver')
}


function blackColor() {
    divSilver.style.display = 'none';
    divBlue.style.display = 'none';
    divPurple.style.display = 'none';
    divBlack.style.display = 'flex';

    nextBtnSilver.style.display = 'none';
    backBtnSilver.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnPurple.style.display = 'none';
    backBtnPurple.style.display = 'none';
    nextBtnBlack.style.display = 'flex';
    backBtnBlack.style.display = 'flex';
    
    index = 0;
}

function purpleColor() {
    divBlack.style.display = 'none';
    divSilver.style.display = 'none';
    divBlue.style.display = 'none';
    divPurple.style.display = 'flex';

    nextBtnBlack.style.display = 'none';
    backBtnBlack.style.display = 'none';
    nextBtnSilver.style.display = 'none';
    backBtnSilver.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnPurple.style.display = 'flex';
    backBtnPurple.style.display = 'flex';
    
    index = 0;
}

function blueColor() {
    divBlack.style.display = 'none';
    divSilver.style.display = 'none';
    divPurple.style.display = 'none';
    divBlue.style.display = 'flex';

    nextBtnBlack.style.display = 'none';
    backBtnBlack.style.display = 'none';
    nextBtnSilver.style.display = 'none';
    backBtnSilver.style.display = 'none';
    nextBtnPurple.style.display = 'none';
    backBtnPurple.style.display = 'none';
    nextBtnBlue.style.display = 'flex';
    backBtnBlue.style.display = 'flex';
    
    index = 0;
}

function silverColor() {
    divBlack.style.display = 'none';
    divBlue.style.display = 'none';
    divPurple.style.display = 'none';
    divSilver.style.display = 'flex';

    nextBtnBlack.style.display = 'none';
    backBtnBlack.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnPurple.style.display = 'none';
    backBtnPurple.style.display = 'none';
    nextBtnSilver.style.display = 'flex';
    backBtnSilver.style.display = 'flex';
    
    index = 0;
}

nextBtnBlack.addEventListener('click', nextImageBlack);
backBtnBlack.addEventListener('click', backImageBlack);
nextBtnPurple.addEventListener('click', nextImagePurple);
backBtnPurple.addEventListener('click', backImagePurple);
nextBtnBlue.addEventListener('click', nextImageBlue);
backBtnBlue.addEventListener('click', backImageBlue);
nextBtnSilver.addEventListener('click', nextImageSilver);
backBtnSilver.addEventListener('click', backImageSilver);

btnBlackColor.addEventListener('click', blackColor);
btnPurpleColor.addEventListener('click', purpleColor);
btnBlueColor.addEventListener('click', blueColor);
btnSilverColor.addEventListener('click', silverColor);