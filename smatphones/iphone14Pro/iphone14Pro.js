const btnBlackColor = document.getElementById('colorsBlack');
const btnPurpleColor = document.getElementById('colorsPurple');
const btnGoldColor = document.getElementById('colorsGold');
const btnSilverColor = document.getElementById('colorsSilver');

const divBlack = document.getElementById('black');
const divPurple = document.getElementById('purple');
const divGold = document.getElementById('gold');
const divSilver = document.getElementById('silver');

const imageBlack = document.querySelectorAll('.imageBlack');
const imagePurple = document.querySelectorAll('.imagePurple');
const imageGold = document.querySelectorAll('.imageGold');
const imageSilver = document.querySelectorAll('.imageSilver');

const nextBtnBlack = document.getElementById('nextBlack');
const backBtnBlack = document.getElementById('backBlack');
const nextBtnPurple = document.getElementById('nextPurple');
const backBtnPurple = document.getElementById('backPurple');
const nextBtnGold = document.getElementById('nextGold');
const backBtnGold = document.getElementById('backGold');
const nextBtnSilver = document.getElementById('nextSilver');
const backBtnSilver = document.getElementById('backSilver');

const maxBlack = imageBlack.length;
const maxPurple = imagePurple.length;
const maxGold = imageGold.length;
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

function nextImageGold() {
    imageGold[index].classList.remove('selectedGold');

    index++;

    if(index === maxPurple -1) {
        nextBtnGold.style.display = 'none';
    };

    imageGold[index].classList.add('selectedGold');
}

function backImageGold() {
    imageGold[index].classList.remove('selectedGold');

    if (index > 0) {
        index--;
    }
   
    
    if(index !== maxGold) {
        nextBtnGold.style.display = 'flex';
    }

    imageGold[index].classList.add('selectedGold')
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
    index = 0;

    divSilver.style.display = 'none';
    divGold.style.display = 'none';
    divPurple.style.display = 'none';
    divBlack.style.display = 'flex';

    nextBtnSilver.style.display = 'none';
    backBtnSilver.style.display = 'none';
    nextBtnGold.style.display = 'none';
    backBtnGold.style.display = 'none';
    nextBtnPurple.style.display = 'none';
    backBtnPurple.style.display = 'none';
    nextBtnBlack.style.display = 'flex';
    backBtnBlack.style.display = 'flex';
    
}

function purpleColor() {

    index = 0;

    divBlack.style.display = 'none';
    divSilver.style.display = 'none';
    divGold.style.display = 'none';
    divPurple.style.display = 'flex';

    nextBtnBlack.style.display = 'none';
    backBtnBlack.style.display = 'none';
    nextBtnSilver.style.display = 'none';
    backBtnSilver.style.display = 'none';
    nextBtnGold.style.display = 'none';
    backBtnGold.style.display = 'none';
    nextBtnPurple.style.display = 'flex';
    backBtnPurple.style.display = 'flex';
    
}

function goldColor() {
    index = 0;

    divBlack.style.display = 'none';
    divSilver.style.display = 'none';
    divPurple.style.display = 'none';
    divGold.style.display = 'flex';

    nextBtnBlack.style.display = 'none';
    backBtnBlack.style.display = 'none';
    nextBtnSilver.style.display = 'none';
    backBtnSilver.style.display = 'none';
    nextBtnPurple.style.display = 'none';
    backBtnPurple.style.display = 'none';
    nextBtnGold.style.display = 'flex';
    backBtnGold.style.display = 'flex';
    
}

function silverColor() {
    index = 0;
    
    divBlack.style.display = 'none';
    divGold.style.display = 'none';
    divPurple.style.display = 'none';
    divSilver.style.display = 'flex';

    nextBtnBlack.style.display = 'none';
    backBtnBlack.style.display = 'none';
    nextBtnGold.style.display = 'none';
    backBtnGold.style.display = 'none';
    nextBtnPurple.style.display = 'none';
    backBtnPurple.style.display = 'none';
    nextBtnSilver.style.display = 'flex';
    backBtnSilver.style.display = 'flex';
    
}

nextBtnBlack.addEventListener('click', nextImageBlack);
backBtnBlack.addEventListener('click', backImageBlack);
nextBtnPurple.addEventListener('click', nextImagePurple);
backBtnPurple.addEventListener('click', backImagePurple);
nextBtnGold.addEventListener('click', nextImageGold);
backBtnGold.addEventListener('click', backImageGold);
nextBtnSilver.addEventListener('click', nextImageSilver);
backBtnSilver.addEventListener('click', backImageSilver);

btnBlackColor.addEventListener('click', blackColor);
btnPurpleColor.addEventListener('click', purpleColor);
btnGoldColor.addEventListener('click', goldColor);
btnSilverColor.addEventListener('click', silverColor);