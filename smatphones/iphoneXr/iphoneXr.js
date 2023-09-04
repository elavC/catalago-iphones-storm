const btnBlkColor = document.getElementById('colorsBlack');
const btnWhtColor = document.getElementById('colorWhite');
const btnRedColor = document.getElementById('colorsRed');
const btnBlueColor = document.getElementById('colorsBlue');

const divBlk = document.getElementById('black');
const divWht = document.getElementById('white');
const divRed = document.getElementById('red');
const divBlue = document.getElementById('blue');


const imageBlk = document.querySelectorAll('.imageBlk');
const imageWht = document.querySelectorAll('.imageWht');
const imageRed = document.querySelectorAll('.imageRed');
const imageBlue = document.querySelectorAll('.imageBlue');

const nextBtnBlk = document.getElementById('nextBlk');
const backBtnBlk = document.getElementById('backBlk');
const nextBtnWht = document.getElementById('nextWht');
const backBtnWht = document.getElementById('backWht');
const nextBtnRed = document.getElementById('nextRed');
const backBtnRed = document.getElementById('backRed');
const nextBtnBlue = document.getElementById('nextBlue');
const backBtnBlue = document.getElementById('backBlue');

const maxBlk = imageBlk.length;
const maxWht = imageWht.length;
const maxRed = imageRed.length;
const maxBlue = imageBlue.length;

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


function blackColor() {
    divBlk.style.display = 'flex';
    divBlue.style.display = 'none';
    divRed.style.display = 'none';
    divWht.style.display = 'none';

    nextBtnBlk.style.display = 'flex';
    backBtnBlk.style.display = 'flex';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnRed.style.display = 'none';
    backBtnRed.style.display = 'none';
    nextBtnWht.style.display = 'none';
    backBtnWht.style.display = 'none';
    
    index = 0;
}

function whiteColor() {
    divBlk.style.display = 'none';
    divBlue.style.display = 'none';
    divRed.style.display = 'none';
    divWht.style.display = 'flex';

    nextBtnBlk.style.display = 'none';
    backBtnBlk.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnRed.style.display = 'none';
    backBtnRed.style.display = 'none';
    nextBtnWht.style.display = 'flex';
    backBtnWht.style.display = 'flex';
    
    index = 0;
}

function redColor() {
    divBlk.style.display = 'none';
    divBlue.style.display = 'none';
    divRed.style.display = 'flex';
    divWht.style.display = 'none';

    nextBtnBlk.style.display = 'none';
    backBtnBlk.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnRed.style.display = 'flex';
    backBtnRed.style.display = 'flex';
    nextBtnWht.style.display = 'none';
    backBtnWht.style.display = 'none';
    
    index = 0;
}

function blueColor() {
    divBlk.style.display = 'none';
    divBlue.style.display = 'flex';
    divRed.style.display = 'none';
    divWht.style.display = 'none';

    nextBtnBlk.style.display = 'none';
    backBtnBlk.style.display = 'none';
    nextBtnBlue.style.display = 'flex';
    backBtnBlue.style.display = 'flex';
    nextBtnRed.style.display = 'none';
    backBtnRed.style.display = 'none';
    nextBtnWht.style.display = 'none';
    backBtnWht.style.display = 'none';
    
    index = 0;
}

nextBtnBlk.addEventListener('click', nextImageBlk);
backBtnBlk.addEventListener('click', backImageBlk);
nextBtnWht.addEventListener('click', nextImageWht);
backBtnWht.addEventListener('click', backImageWht);
nextBtnRed.addEventListener('click', nextImageRed);
backBtnRed.addEventListener('click', backImageRed);
nextBtnBlue.addEventListener('click', nextImageBlue);
backBtnBlue.addEventListener('click', backImageBlue);

btnBlkColor.addEventListener('click', blackColor);
btnWhtColor.addEventListener('click', whiteColor);
btnRedColor.addEventListener('click', redColor);
btnBlueColor.addEventListener('click', blueColor);