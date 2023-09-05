const btnGrayColor = document.getElementById('colorsGray');
const btnGldColor = document.getElementById('colorGold');
const btnBlueColor = document.getElementById('colorsBlue');
const btnSlvColor = document.getElementById('colorsSilver');

const divGray = document.getElementById('gray');
const divGld = document.getElementById('gold');
const divBlue = document.getElementById('Blue');
const divSlv = document.getElementById('silver');

const imageGray = document.querySelectorAll('.imageGray');
const imageGld = document.querySelectorAll('.imageGld');
const imageBlue = document.querySelectorAll('.imageBlue');
const imageSlv = document.querySelectorAll('.imageSlv');

const nextBtnGray = document.getElementById('nextGray');
const backBtnGray = document.getElementById('backGray');
const nextBtnGld = document.getElementById('nextGld');
const backBtnGld = document.getElementById('backGld');
const nextBtnBlue = document.getElementById('nextBlue');
const backBtnBlue = document.getElementById('backBlue');
const nextBtnSlv = document.getElementById('nextSlv');
const backBtnSlv = document.getElementById('backSlv');

const maxGray = imageGray.length;
const maxGld = imageGld.length;
const maxBlue = imageBlue.length;
const maxSlv = imageSlv.length;

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


function nextImageGld() {
    imageGld[index].classList.remove('selectedGld');

    index++;

    if(index === maxGld -1) {
        nextBtnGld.style.display = 'none';
    };

    imageGld[index].classList.add('selectedGld');
}

function backImageGld() {
    imageGld[index].classList.remove('selectedGld');

    if (index > 0) {
        index--;
    }
   
    
    if(index !== maxGld) {
        nextBtnGld.style.display = 'flex';
    }

    imageGld[index].classList.add('selectedGld')
}

function nextImageBlue() {
    imageBlue[index].classList.remove('selectedBlue');

    index++;

    if(index === maxGld -1) {
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

function nextImageSlv() {
    imageSlv[index].classList.remove('selectedSlv');

    index++;

    if(index === maxSlv -1) {
        nextBtnSlv.style.display = 'none';
    };

    imageSlv[index].classList.add('selectedSlv');
}

function backImageSlv() {
    imageSlv[index].classList.remove('selectedSlv');

    if (index > 0) {
        index--;
    }
   
    
    if(index !== maxSlv) {
        nextBtnSlv.style.display = 'flex';
    }

    imageSlv[index].classList.add('selectedSlv')
}


function grayColor() {
    divSlv.style.display = 'none';
    divBlue.style.display = 'none';
    divGld.style.display = 'none';
    divGray.style.display = 'flex';

    nextBtnSlv.style.display = 'none';
    backBtnSlv.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnGld.style.display = 'none';
    backBtnGld.style.display = 'none';
    nextBtnGray.style.display = 'flex';
    backBtnGray.style.display = 'flex';
    
    index = 0;
}

function goldColor() {
    divGray.style.display = 'none';
    divSlv.style.display = 'none';
    divBlue.style.display = 'none';
    divGld.style.display = 'flex';

    nextBtnGray.style.display = 'none';
    backBtnGray.style.display = 'none';
    nextBtnSlv.style.display = 'none';
    backBtnSlv.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnGld.style.display = 'flex';
    backBtnGld.style.display = 'flex';
    
    index = 0;
}

function BlueColor() {
    divGray.style.display = 'none';
    divSlv.style.display = 'none';
    divGld.style.display = 'none';
    divBlue.style.display = 'flex';

    nextBtnGray.style.display = 'none';
    backBtnGray.style.display = 'none';
    nextBtnSlv.style.display = 'none';
    backBtnSlv.style.display = 'none';
    nextBtnGld.style.display = 'none';
    backBtnGld.style.display = 'none';
    nextBtnBlue.style.display = 'flex';
    backBtnBlue.style.display = 'flex';
    
    index = 0;
}

function SilverColor() {
    divGray.style.display = 'none';
    divBlue.style.display = 'none';
    divGld.style.display = 'none';
    divSlv.style.display = 'flex';

    nextBtnGray.style.display = 'none';
    backBtnGray.style.display = 'none';
    nextBtnBlue.style.display = 'none';
    backBtnBlue.style.display = 'none';
    nextBtnGld.style.display = 'none';
    backBtnGld.style.display = 'none';
    nextBtnSlv.style.display = 'flex';
    backBtnSlv.style.display = 'flex';
    
    index = 0;
}

nextBtnGray.addEventListener('click', nextImageGray);
backBtnGray.addEventListener('click', backImageGray);
nextBtnGld.addEventListener('click', nextImageGld);
backBtnGld.addEventListener('click', backImageGld);
nextBtnBlue.addEventListener('click', nextImageBlue);
backBtnBlue.addEventListener('click', backImageBlue);
nextBtnSlv.addEventListener('click', nextImageSlv);
backBtnSlv.addEventListener('click', backImageSlv);

btnGrayColor.addEventListener('click', grayColor);
btnGldColor.addEventListener('click', goldColor);
btnBlueColor.addEventListener('click', BlueColor);
btnSlvColor.addEventListener('click', SilverColor);