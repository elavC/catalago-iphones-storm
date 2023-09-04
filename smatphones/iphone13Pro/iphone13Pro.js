const btnGrayColor = document.getElementById('colorsGray');
const btnSilverColor = document.getElementById('colorsSilver');
const btnDarkPurpleColor = document.getElementById('colorsDarkPurple');
const btnGoldColor = document.getElementById('colorsGold');
const btnBlueColor = document.getElementById('colorsBlue');
const btnGreenColor = document.getElementById('colorsGreen');

const divGray = document.getElementById('gray');
const divSilver = document.getElementById('silver');
const divDarkPurple = document.getElementById('darkPurple');
const divGold = document.getElementById('gold');
const divBlue = document.getElementById('blue');
const divGreen = document.getElementById('green');


const imageGray = document.querySelectorAll('.imageGray');
const imageSilver = document.querySelectorAll('.imageSilver');
const imageDarkPurple = document.querySelectorAll('.imageDarkPurple');
const imageGold = document.querySelectorAll('.imageGold');
const imageBlue = document.querySelectorAll('.imageBlue');
const imageGreen = document.querySelectorAll('.imageGreen');

const nextBtnGray = document.getElementById('nextGray');
const backBtnGray = document.getElementById('backGray');
const nextBtnSilver = document.getElementById('nextSilver');
const backBtnSilver = document.getElementById('backSilver');
const nextBtnDarkPurple = document.getElementById('nextDarkPurple');
const backBtnDarkPurple = document.getElementById('backDarkPurple');
const nextBtnGold = document.getElementById('nextGold');
const backBtnGold = document.getElementById('backGold');
const nextBtnBlue = document.getElementById('nextBlue');
const backBtnBlue = document.getElementById('backBlue');
const nextBtnGreen = document.getElementById('nextGreen');
const backBtnGreen = document.getElementById('backGreen');

const maxGray = imageGray.length;
const maxSilver = imageSilver.length;
const maxDarkPurple = imageDarkPurple.length;
const maxGold = imageGold.length;
const maxBlue = imageBlue.length;
const maxGreen = imageGreen.length;

let index = 0;

function nextImageGray() {
    imageGray[index].classList.remove('selectedGray');

    index++;

    if(index === maxGray -1) {
        nextBtnGray.style.display = 'none';
    };

    imageGray[index].classList.add('selectedGray');
}

function backImageGray() {
    imageGray[index].classList.remove('selectedGray');

    if (index > 0) {
        index--;
    }
   
    
    if(index !== maxGray) {
        nextBtnGray.style.display = 'flex';
    }

    imageGray[index].classList.add('selectedGray')
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

function nextImageDarkPurple() {
    imageDarkPurple[index].classList.remove('selectedDarkPurple');

    index++;

    if(index === maxSilver -1) {
        nextBtnDarkPurple.style.display = 'none';
    };

    imageDarkPurple[index].classList.add('selectedDarkPurple');
}

function backImageDarkPurple() {
    imageDarkPurple[index].classList.remove('selectedDarkPurple');

    if (index > 0) {
        index--;
    }
   
    
    if(index !== maxDarkPurple) {
        nextBtnDarkPurple.style.display = 'flex';
    }

    imageDarkPurple[index].classList.add('selectedDarkPurple')
}

function nextImageGold() {
    imageGold[index].classList.remove('selectedGold');

    index++;

    if(index === maxGold -1) {
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

function nextImageBlue() {
    imageBlue[index].classList.remove('selectedBlue');

    index++;

    if(index === maxBlue -1) {
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

function nextImageGreen() {
    imageGreen[index].classList.remove('selectedGreen');

    index++;

    if(index === maxGreen -1) {
        nextBtnGreen.style.display = 'none';
    };

    imageGreen[index].classList.add('selectedGreen');
}

function backImageGreen() {
    imageGreen[index].classList.remove('selectedGreen');

    if (index > 0) {
        index--;
    }
   
    
    if(index !== maxGreen) {
        nextBtnGreen.style.display = 'flex';
    }

    imageGreen[index].classList.add('selectedGreen')
}


function grayColor() {
    divGold.style.display = 'none';
    divDarkPurple.style.display = 'none';
    divSilver.style.display = 'none';
    divBlue.style.display = 'none';
    divGreen.style.display = 'none';
    divGray.style.display = 'flex';

    nextBtnGold.style.display = 'none';
    backBtnGold.style.display = 'none';
    nextBtnDarkPurple.style.display = 'none';
    backBtnDarkPurple.style.display = 'none';
    nextBtnSilver.style.display = 'none';
    backBtnSilver.style.display = 'none';
    nextBtnGreen.style.display = 'none';
    backBtnGreen.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnGray.style.display = 'flex';
    backBtnGray.style.display = 'flex';
    
    index = 0;
}

function silverColor() {
    divGray.style.display = 'none';
    divGold.style.display = 'none';
    divDarkPurple.style.display = 'none';
    divBlue.style.display = 'none';
    divGreen.style.display = 'none';
    divSilver.style.display = 'flex';

    nextBtnGray.style.display = 'none';
    backBtnGray.style.display = 'none';
    nextBtnGold.style.display = 'none';
    backBtnGold.style.display = 'none';
    nextBtnDarkPurple.style.display = 'none';
    backBtnDarkPurple.style.display = 'none';
    nextBtnGreen.style.display = 'none';
    backBtnGreen.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnSilver.style.display = 'flex';
    backBtnSilver.style.display = 'flex';
    
    index = 0;
}

function darkPurpleColor() {
    divGray.style.display = 'none';
    divGold.style.display = 'none';
    divSilver.style.display = 'none';
    divBlue.style.display = 'none';
    divGreen.style.display = 'none';
    divDarkPurple.style.display = 'flex';

    nextBtnGray.style.display = 'none';
    backBtnGray.style.display = 'none';
    nextBtnGold.style.display = 'none';
    backBtnGold.style.display = 'none';
    nextBtnSilver.style.display = 'none';
    backBtnSilver.style.display = 'none';
    nextBtnGreen.style.display = 'none';
    backBtnGreen.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnDarkPurple.style.display = 'flex';
    backBtnDarkPurple.style.display = 'flex';
    
    index = 0;
}

function goldColor() {
    divGray.style.display = 'none';
    divDarkPurple.style.display = 'none';
    divSilver.style.display = 'none';
    divBlue.style.display = 'none';
    divGreen.style.display = 'none';
    divGold.style.display = 'flex';

    nextBtnGray.style.display = 'none';
    backBtnGray.style.display = 'none';
    nextBtnDarkPurple.style.display = 'none';
    backBtnDarkPurple.style.display = 'none';
    nextBtnSilver.style.display = 'none';
    backBtnSilver.style.display = 'none';
    nextBtnGreen.style.display = 'none';
    backBtnGreen.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnGold.style.display = 'flex';
    backBtnGold.style.display = 'flex';
    
    index = 0;
}

function blueColor() {
    divGray.style.display = 'none';
    divGold.style.display = 'none';
    divDarkPurple.style.display = 'none';
    divSilver.style.display = 'none';
    divGreen.style.display = 'none';
    divBlue.style.display = 'flex';

    nextBtnGray.style.display = 'none';
    backBtnGray.style.display = 'none';
    nextBtnDarkPurple.style.display = 'none';
    backBtnDarkPurple.style.display = 'none';
    nextBtnSilver.style.display = 'none';
    backBtnSilver.style.display = 'none';
    nextBtnGold.style.display = 'none';
    backBtnGold.style.display = 'none';
    nextBtnGreen.style.display = 'none';
    backBtnGreen.style.display = 'none';
    nextBtnBlue.style.display = 'flex';
    backBtnBlue.style.display = 'flex';
    
    index = 0;
}

function greenColor() {
    divGray.style.display = 'none';
    divDarkPurple.style.display = 'none';
    divSilver.style.display = 'none';
    divGold.style.display = 'none';
    divBlue.style.display = 'none';
    divGreen.style.display = 'flex';

    nextBtnGray.style.display = 'none';
    backBtnGray.style.display = 'none';
    nextBtnDarkPurple.style.display = 'none';
    backBtnDarkPurple.style.display = 'none';
    nextBtnSilver.style.display = 'none';
    backBtnSilver.style.display = 'none';
    nextBtnGold.style.display = 'none';
    backBtnGold.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnGreen.style.display = 'flex';
    backBtnGreen.style.display = 'flex';
    
    index = 0;
}

nextBtnGray.addEventListener('click', nextImageGray);
backBtnGray.addEventListener('click', backImageGray);
nextBtnSilver.addEventListener('click', nextImageSilver);
backBtnSilver.addEventListener('click', backImageSilver);
nextBtnDarkPurple.addEventListener('click', nextImageDarkPurple);
backBtnDarkPurple.addEventListener('click', backImageDarkPurple);
nextBtnGold.addEventListener('click', nextImageGold);
backBtnGold.addEventListener('click', backImageGold);
nextBtnBlue.addEventListener('click', nextImageBlue);
backBtnBlue.addEventListener('click', backImageBlue);
nextBtnGreen.addEventListener('click', nextImageGreen);
backBtnGreen.addEventListener('click', backImageGreen);

btnGrayColor.addEventListener('click', grayColor);
btnSilverColor.addEventListener('click', silverColor);
btnDarkPurpleColor.addEventListener('click', darkPurpleColor);
btnGoldColor.addEventListener('click', goldColor);
btnBlueColor.addEventListener('click', blueColor);
btnGreenColor.addEventListener('click', greenColor);
