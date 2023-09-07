const btnBlkColor = document.getElementById('colorsBlack');
const btnWhtColor = document.getElementById('colorWhite');
const btnRedColor = document.getElementById('colorsRed');
const btnGoldColor = document.getElementById('colorsGold');

const divBlk = document.getElementById('black');
const divWht = document.getElementById('white');
const divRed = document.getElementById('red');
const divGold = document.getElementById('gold');


const imageBlk = document.querySelectorAll('.imageBlk');
const imageWht = document.querySelectorAll('.imageWht');
const imageRed = document.querySelectorAll('.imageRed');
const imageGold = document.querySelectorAll('.imageGold');

const nextBtnBlk = document.getElementById('nextBlk');
const backBtnBlk = document.getElementById('backBlk');
const nextBtnWht = document.getElementById('nextWht');
const backBtnWht = document.getElementById('backWht');
const nextBtnRed = document.getElementById('nextRed');
const backBtnRed = document.getElementById('backRed');
const nextBtnGold = document.getElementById('nextGold');
const backBtnGold = document.getElementById('backGold');

const maxBlk = imageBlk.length;
const maxWht = imageWht.length;
const maxRed = imageRed.length;
const maxGold = imageGold.length;

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


function blackColor() {
    divGold.style.display = 'none';
    divRed.style.display = 'none';
    divWht.style.display = 'none';
    divBlk.style.display = 'flex';

    nextBtnGold.style.display = 'none';
    backBtnGold.style.display = 'none';
    nextBtnRed.style.display = 'none';
    backBtnRed.style.display = 'none';
    nextBtnWht.style.display = 'none';
    backBtnWht.style.display = 'none';
    nextBtnBlk.style.display = 'flex';
    backBtnBlk.style.display = 'flex';
    
    index = 0;
}

function whiteColor() {
    divBlk.style.display = 'none';
    divGold.style.display = 'none';
    divRed.style.display = 'none';
    divWht.style.display = 'flex';

    nextBtnBlk.style.display = 'none';
    backBtnBlk.style.display = 'none';
    nextBtnGold.style.display = 'none';
    backBtnGold.style.display = 'none';
    nextBtnRed.style.display = 'none';
    backBtnRed.style.display = 'none';
    nextBtnWht.style.display = 'flex';
    backBtnWht.style.display = 'flex';
    
    index = 0;
}

function redColor() {
    divBlk.style.display = 'none';
    divGold.style.display = 'none';
    divWht.style.display = 'none';
    divRed.style.display = 'flex';

    nextBtnBlk.style.display = 'none';
    backBtnBlk.style.display = 'none';
    nextBtnGold.style.display = 'none';
    backBtnGold.style.display = 'none';
    nextBtnWht.style.display = 'none';
    backBtnWht.style.display = 'none';
    nextBtnRed.style.display = 'flex';
    backBtnRed.style.display = 'flex';
    
    index = 0;
}

function goldColor() {
    divBlk.style.display = 'none';
    divRed.style.display = 'none';
    divWht.style.display = 'none';
    divGold.style.display = 'flex';
    
    nextBtnBlk.style.display = 'none';
    backBtnBlk.style.display = 'none';
    nextBtnRed.style.display = 'none';
    backBtnRed.style.display = 'none';
    nextBtnWht.style.display = 'none';
    backBtnWht.style.display = 'none';
    nextBtnGold.style.display = 'flex';
    backBtnGold.style.display = 'flex';
    
    index = 0;
}

nextBtnBlk.addEventListener('click', nextImageBlk);
backBtnBlk.addEventListener('click', backImageBlk);
nextBtnWht.addEventListener('click', nextImageWht);
backBtnWht.addEventListener('click', backImageWht);
nextBtnRed.addEventListener('click', nextImageRed);
backBtnRed.addEventListener('click', backImageRed);
nextBtnGold.addEventListener('click', nextImageGold);
backBtnGold.addEventListener('click', backImageGold);

btnBlkColor.addEventListener('click', blackColor);
btnWhtColor.addEventListener('click', whiteColor);
btnRedColor.addEventListener('click', redColor);
btnGoldColor.addEventListener('click', goldColor);