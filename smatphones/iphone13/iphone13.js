const btnBlkColor = document.getElementById('colorsBlack');
const btnWhtColor = document.getElementById('colorWhite');
const btnRedColor = document.getElementById('colorsRed');
const btnRosaColor = document.getElementById('colorsRosa');
const btnBlueColor = document.getElementById('colorsBlue');
const btnGreenColor = document.getElementById('colorsGreen');

const divBlk = document.getElementById('black');
const divWht = document.getElementById('white');
const divRed = document.getElementById('red');
const divRosa = document.getElementById('rosa');
const divBlue = document.getElementById('blue');
const divGreen = document.getElementById('green');


const imageBlk = document.querySelectorAll('.imageBlk');
const imageWht = document.querySelectorAll('.imageWht');
const imageRed = document.querySelectorAll('.imageRed');
const imageRosa = document.querySelectorAll('.imageRosa');
const imageBlue = document.querySelectorAll('.imageBlue');
const imageGreen = document.querySelectorAll('.imageGreen');

const nextBtnBlk = document.getElementById('nextBlk');
const backBtnBlk = document.getElementById('backBlk');
const nextBtnWht = document.getElementById('nextWht');
const backBtnWht = document.getElementById('backWht');
const nextBtnRed = document.getElementById('nextRed');
const backBtnRed = document.getElementById('backRed');
const nextBtnRosa = document.getElementById('nextRosa');
const backBtnRosa = document.getElementById('backRosa');
const nextBtnBlue = document.getElementById('nextBlue');
const backBtnBlue = document.getElementById('backBlue');
const nextBtnGreen = document.getElementById('nextGreen');
const backBtnGreen = document.getElementById('backGreen');

const maxBlk = imageBlk.length;
const maxWht = imageWht.length;
const maxRed = imageRed.length;
const maxRosa = imageRosa.length;
const maxBlue = imageRosa.length;
const maxGreen = imageRosa.length;

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

function nextImageRosa() {
    imageRosa[index].classList.remove('selectedRosa');

    index++;

    if(index === maxRosa -1) {
        nextBtnRosa.style.display = 'none';
    };

    imageRosa[index].classList.add('selectedRosa');
}

function backImageRosa() {
    imageRosa[index].classList.remove('selectedRosa');

    if (index > 0) {
        index--;
    }
   
    
    if(index !== maxRosa) {
        nextBtnRosa.style.display = 'flex';
    }

    imageRosa[index].classList.add('selectedRosa')
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
    divRosa.style.display = 'none';
    divRed.style.display = 'none';
    divWht.style.display = 'none';
    divBlue.style.display = 'none';
    divBlk.style.display = 'flex';

    nextBtnRosa.style.display = 'none';
    backBtnRosa.style.display = 'none';
    nextBtnRed.style.display = 'none';
    backBtnRed.style.display = 'none';
    nextBtnWht.style.display = 'none';
    backBtnWht.style.display = 'none';
    nextBtnGreen.style.display = 'none';
    backBtnGreen.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnBlk.style.display = 'flex';
    backBtnBlk.style.display = 'flex';
    
    index = 0;
}

function whiteColor() {
    divBlk.style.display = 'none';
    divRosa.style.display = 'none';
    divRed.style.display = 'none';
    divBlue.style.display = 'none';
    divWht.style.display = 'flex';

    nextBtnBlk.style.display = 'none';
    backBtnBlk.style.display = 'none';
    nextBtnRosa.style.display = 'none';
    backBtnRosa.style.display = 'none';
    nextBtnRed.style.display = 'none';
    backBtnRed.style.display = 'none';
    nextBtnGreen.style.display = 'none';
    backBtnGreen.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnWht.style.display = 'flex';
    backBtnWht.style.display = 'flex';
    
    index = 0;
}

function redColor() {
    divBlk.style.display = 'none';
    divRosa.style.display = 'none';
    divWht.style.display = 'none';
    divBlue.style.display = 'none';
    divRed.style.display = 'flex';

    nextBtnBlk.style.display = 'none';
    backBtnBlk.style.display = 'none';
    nextBtnRosa.style.display = 'none';
    backBtnRosa.style.display = 'none';
    nextBtnWht.style.display = 'none';
    backBtnWht.style.display = 'none';
    nextBtnGreen.style.display = 'none';
    backBtnGreen.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnRed.style.display = 'flex';
    backBtnRed.style.display = 'flex';
    
    index = 0;
}

function rosaColor() {
    divBlk.style.display = 'none';
    divRed.style.display = 'none';
    divWht.style.display = 'none';
    divBlue.style.display = 'none';
    divRosa.style.display = 'flex';

    nextBtnBlk.style.display = 'none';
    backBtnBlk.style.display = 'none';
    nextBtnRed.style.display = 'none';
    backBtnRed.style.display = 'none';
    nextBtnWht.style.display = 'none';
    backBtnWht.style.display = 'none';
    nextBtnGreen.style.display = 'none';
    backBtnGreen.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnRosa.style.display = 'flex';
    backBtnRosa.style.display = 'flex';
    
    index = 0;
}

function blueColor() {
    divBlk.style.display = 'none';
    divRosa.style.display = 'none';
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
    nextBtnRosa.style.display = 'none';
    backBtnRosa.style.display = 'none';
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
    divRosa.style.display = 'none';
    divBlue.style.display = 'none';
    divGreen.style.display = 'flex';

    nextBtnBlk.style.display = 'none';
    backBtnBlk.style.display = 'none';
    nextBtnRed.style.display = 'none';
    backBtnRed.style.display = 'none';
    nextBtnWht.style.display = 'none';
    backBtnWht.style.display = 'none';
    nextBtnRosa.style.display = 'none';
    backBtnRosa.style.display = 'none';
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
nextBtnRosa.addEventListener('click', nextImageRosa);
backBtnRosa.addEventListener('click', backImageRosa);
nextBtnBlue.addEventListener('click', nextImageBlue);
backBtnBlue.addEventListener('click', backImageBlue);
nextBtnGreen.addEventListener('click', nextImageGreen);
backBtnGreen.addEventListener('click', backImageGreen);

btnBlkColor.addEventListener('click', blackColor);
btnWhtColor.addEventListener('click', whiteColor);
btnRedColor.addEventListener('click', redColor);
btnRosaColor.addEventListener('click', rosaColor);
btnBlueColor.addEventListener('click', blueColor);
btnGreenColor.addEventListener('click', greenColor);
