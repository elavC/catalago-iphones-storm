const btnBlkColor = document.getElementById('colorsBlack');
const btnWhtColor = document.getElementById('colorWhite');
const btnRedColor = document.getElementById('colorsRed');
const btnPurlColor = document.getElementById('colorsPurple');
const btnBlueColor = document.getElementById('colorsBlue');
const btnGreenColor = document.getElementById('colorsGreen');

const divBlk = document.getElementById('black');
const divWht = document.getElementById('white');
const divRed = document.getElementById('red');
const divPurl = document.getElementById('purple');
const divBlue = document.getElementById('blue');
const divGreen = document.getElementById('green');


const imageBlk = document.querySelectorAll('.imageBlk');
const imageWht = document.querySelectorAll('.imageWht');
const imageRed = document.querySelectorAll('.imageRed');
const imagePurl = document.querySelectorAll('.imagePurl');
const imageBlue = document.querySelectorAll('.imageBlue');
const imageGreen = document.querySelectorAll('.imageGreen');

const nextBtnBlk = document.getElementById('nextBlk');
const backBtnBlk = document.getElementById('backBlk');
const nextBtnWht = document.getElementById('nextWht');
const backBtnWht = document.getElementById('backWht');
const nextBtnRed = document.getElementById('nextRed');
const backBtnRed = document.getElementById('backRed');
const nextBtnPurl = document.getElementById('nextPurl');
const backBtnPurl = document.getElementById('backPurl');
const nextBtnBlue = document.getElementById('nextBlue');
const backBtnBlue = document.getElementById('backBlue');
const nextBtnGreen = document.getElementById('nextGreen');
const backBtnGreen = document.getElementById('backGreen');

const maxBlk = imageBlk.length;
const maxWht = imageWht.length;
const maxRed = imageRed.length;
const maxPurl = imagePurl.length;
const maxBlue = imagePurl.length;
const maxGreen = imagePurl.length;

let index = 0;

function nextImageBlk() {
    imageBlk[index].classList.remove('selectedBlk');

    index++;

    if(index === maxBlk -1) {
        nextBtnBlk.style.display = 'none';
    };

    imageBlk[index].classList.add('selectedBlk');
}

function backImageBlk() {
    imageBlk[index].classList.remove('selectedBlk');

    if (index > 0) {
        index--;
    }
   
    
    if(index !== maxBlk) {
        nextBtnBlk.style.display = 'flex';
    }

    imageBlk[index].classList.add('selectedBlk')
}


function nextImageWht() {
    imageWht[index].classList.remove('selectedWht');

    index++;

    if(index === maxWht -1) {
        nextBtnWht.style.display = 'none';
    };

    imageWht[index].classList.add('selectedWht');
}

function backImageWht() {
    imageWht[index].classList.remove('selectedWht');

    if (index > 0) {
        index--;
    }
   
    
    if(index !== maxWht) {
        nextBtnWht.style.display = 'flex';
    }

    imageWht[index].classList.add('selectedWht')
}

function nextImageRed() {
    imageRed[index].classList.remove('selectedRed');

    index++;

    if(index === maxWht -1) {
        nextBtnRed.style.display = 'none';
    };

    imageRed[index].classList.add('selectedRed');
}

function backImageRed() {
    imageRed[index].classList.remove('selectedRed');

    if (index > 0) {
        index--;
    }
   
    
    if(index !== maxRed) {
        nextBtnRed.style.display = 'flex';
    }

    imageRed[index].classList.add('selectedRed')
}

function nextImagePurl() {
    imagePurl[index].classList.remove('selectedPurl');

    index++;

    if(index === maxPurl -1) {
        nextBtnPurl.style.display = 'none';
    };

    imagePurl[index].classList.add('selectedPurl');
}

function backImagePurl() {
    imagePurl[index].classList.remove('selectedPurl');

    if (index > 0) {
        index--;
    }
   
    
    if(index !== maxPurl) {
        nextBtnPurl.style.display = 'flex';
    }

    imagePurl[index].classList.add('selectedPurl')
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


function blackColor() {
    divPurl.style.display = 'none';
    divRed.style.display = 'none';
    divWht.style.display = 'none';
    divBlue.style.display = 'none';
    divGreen.style.display = 'none';
    divBlk.style.display = 'flex';

    nextBtnPurl.style.display = 'none';
    backBtnPurl.style.display = 'none';
    nextBtnRed.style.display = 'none';
    backBtnRed.style.display = 'none';
    nextBtnWht.style.display = 'none';
    backBtnWht.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnGreen.style.display = 'none';
    backBtnGreen.style.display = 'none';
    nextBtnBlk.style.display = 'flex';
    backBtnBlk.style.display = 'flex';
    
    index = 0;
}

function whiteColor() {
    divBlk.style.display = 'none';
    divPurl.style.display = 'none';
    divRed.style.display = 'none';
    divBlue.style.display = 'none';
    divGreen.style.display = 'none';
    divWht.style.display = 'flex';

    nextBtnBlk.style.display = 'none';
    backBtnBlk.style.display = 'none';
    nextBtnPurl.style.display = 'none';
    backBtnPurl.style.display = 'none';
    nextBtnRed.style.display = 'none';
    backBtnRed.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnGreen.style.display = 'none';
    backBtnGreen.style.display = 'none';
    nextBtnWht.style.display = 'flex';
    backBtnWht.style.display = 'flex';
    
    index = 0;
}

function redColor() {
    divBlk.style.display = 'none';
    divPurl.style.display = 'none';
    divWht.style.display = 'none';
    divBlue.style.display = 'none';
    divGreen.style.display = 'none';
    divRed.style.display = 'flex';

    nextBtnBlk.style.display = 'none';
    backBtnBlk.style.display = 'none';
    nextBtnPurl.style.display = 'none';
    backBtnPurl.style.display = 'none';
    nextBtnWht.style.display = 'none';
    backBtnWht.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnGreen.style.display = 'none';
    backBtnGreen.style.display = 'none';
    nextBtnRed.style.display = 'flex';
    backBtnRed.style.display = 'flex';
    
    index = 0;
}

function purpleColor() {
    divBlk.style.display = 'none';
    divRed.style.display = 'none';
    divWht.style.display = 'none';
    divBlue.style.display = 'none';
    divGreen.style.display = 'none';
    divPurl.style.display = 'flex';

    nextBtnBlk.style.display = 'none';
    backBtnBlk.style.display = 'none';
    nextBtnRed.style.display = 'none';
    backBtnRed.style.display = 'none';
    nextBtnWht.style.display = 'none';
    backBtnWht.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnGreen.style.display = 'none';
    backBtnGreen.style.display = 'none';
    nextBtnPurl.style.display = 'flex';
    backBtnPurl.style.display = 'flex';
    
    index = 0;
}

function blueColor() {
    divBlk.style.display = 'none';
    divPurl.style.display = 'none';
    divRed.style.display = 'none';
    divWht.style.display = 'none';
    divGreen.style.display = 'none';
    divBlue.style.display = 'flex';

    nextBtnBlk.style.display = 'none';
    backBtnBlk.style.display = 'none';
    nextBtnRed.style.display = 'none';
    backBtnRed.style.display = 'none';
    nextBtnWht.style.display = 'none';
    backBtnWht.style.display = 'none';
    nextBtnPurl.style.display = 'none';
    backBtnPurl.style.display = 'none';
    nextBtnGreen.style.display = 'none';
    backBtnGreen.style.display = 'none';
    nextBtnBlue.style.display = 'flex';
    backBtnBlue.style.display = 'flex';
    
    index = 0;
}

function greenColor() {
    divBlk.style.display = 'none';
    divRed.style.display = 'none';
    divWht.style.display = 'none';
    divPurl.style.display = 'none';
    divBlue.style.display = 'none';
    divGreen.style.display = 'flex';

    nextBtnBlk.style.display = 'none';
    backBtnBlk.style.display = 'none';
    nextBtnRed.style.display = 'none';
    backBtnRed.style.display = 'none';
    nextBtnWht.style.display = 'none';
    backBtnWht.style.display = 'none';
    nextBtnPurl.style.display = 'none';
    backBtnPurl.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnGreen.style.display = 'flex';
    backBtnGreen.style.display = 'flex';
    
    index = 0;
}

nextBtnBlk.addEventListener('click', nextImageBlk);
backBtnBlk.addEventListener('click', backImageBlk);
nextBtnWht.addEventListener('click', nextImageWht);
backBtnWht.addEventListener('click', backImageWht);
nextBtnRed.addEventListener('click', nextImageRed);
backBtnRed.addEventListener('click', backImageRed);
nextBtnPurl.addEventListener('click', nextImagePurl);
backBtnPurl.addEventListener('click', backImagePurl);
nextBtnBlue.addEventListener('click', nextImageBlue);
backBtnBlue.addEventListener('click', backImageBlue);
nextBtnGreen.addEventListener('click', nextImageGreen);
backBtnGreen.addEventListener('click', backImageGreen);

btnBlkColor.addEventListener('click', blackColor);
btnWhtColor.addEventListener('click', whiteColor);
btnRedColor.addEventListener('click', redColor);
btnPurlColor.addEventListener('click', purpleColor);
btnBlueColor.addEventListener('click', blueColor);
btnGreenColor.addEventListener('click', greenColor);
