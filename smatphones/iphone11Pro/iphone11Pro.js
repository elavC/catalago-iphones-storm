const btnGrayColor = document.getElementById('colorsGray');
const btnGldColor = document.getElementById('colorGold');
const btnGreenMidColor = document.getElementById('colorsGreenMid');
const btnSlvColor = document.getElementById('colorsSilver');

const divGray = document.getElementById('gray');
const divGld = document.getElementById('gold');
const divGreenMid = document.getElementById('greenMid');
const divSlv = document.getElementById('silver');

const imageGray = document.querySelectorAll('.imageGray');
const imageGld = document.querySelectorAll('.imageGld');
const imageGreenMid = document.querySelectorAll('.imageGreenMid');
const imageSlv = document.querySelectorAll('.imageSlv');

const nextBtnGray = document.getElementById('nextGray');
const backBtnGray = document.getElementById('backGray');
const nextBtnGld = document.getElementById('nextGld');
const backBtnGld = document.getElementById('backGld');
const nextBtnGreenMid = document.getElementById('nextGreenMid');
const backBtnGreenMid = document.getElementById('backGreenMid');
const nextBtnSlv = document.getElementById('nextSlv');
const backBtnSlv = document.getElementById('backSlv');

const maxGray = imageGray.length;
const maxGld = imageGld.length;
const maxGreenMid = imageGreenMid.length;
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

function nextImageGreenMid() {
    imageGreenMid[index].classList.remove('selectedGreenMid');

    index++;

    if(index === maxGld -1) {
        nextBtnGreenMid.style.display = 'none';
    };

    imageGreenMid[index].classList.add('selectedGreenMid');
}

function backImageGreenMid() {
    imageGreenMid[index].classList.remove('selectedGreenMid');

    if (index > 0) {
        index--;
    }
   
    
    if(index !== maxGreenMid) {
        nextBtnGreenMid.style.display = 'flex';
    }

    imageGreenMid[index].classList.add('selectedGreenMid')
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
    divGray.style.display = 'flex';
    divSlv.style.display = 'none';
    divGreenMid.style.display = 'none';
    divGld.style.display = 'none';

    nextBtnGray.style.display = 'flex';
    backBtnGray.style.display = 'flex';
    nextBtnSlv.style.display = 'none';
    backBtnSlv.style.display = 'none';
    nextBtnGreenMid.style.display = 'none';
    backBtnGreenMid.style.display = 'none';
    nextBtnGld.style.display = 'none';
    backBtnGld.style.display = 'none';
    
    index = 0;
}

function goldColor() {
    divGray.style.display = 'none';
    divSlv.style.display = 'none';
    divGreenMid.style.display = 'none';
    divGld.style.display = 'flex';

    nextBtnGray.style.display = 'none';
    backBtnGray.style.display = 'none';
    nextBtnSlv.style.display = 'none';
    backBtnSlv.style.display = 'none';
    nextBtnGreenMid.style.display = 'none';
    backBtnGreenMid.style.display = 'none';
    nextBtnGld.style.display = 'flex';
    backBtnGld.style.display = 'flex';
    
    index = 0;
}

function greenMidColor() {
    divGray.style.display = 'none';
    divSlv.style.display = 'none';
    divGreenMid.style.display = 'flex';
    divGld.style.display = 'none';

    nextBtnGray.style.display = 'none';
    backBtnGray.style.display = 'none';
    nextBtnSlv.style.display = 'none';
    backBtnSlv.style.display = 'none';
    nextBtnGreenMid.style.display = 'flex';
    backBtnGreenMid.style.display = 'flex';
    nextBtnGld.style.display = 'none';
    backBtnGld.style.display = 'none';
    
    index = 0;
}

function SilverColor() {
    divGray.style.display = 'none';
    divSlv.style.display = 'flex';
    divGreenMid.style.display = 'none';
    divGld.style.display = 'none';

    nextBtnGray.style.display = 'none';
    backBtnGray.style.display = 'none';
    nextBtnSlv.style.display = 'flex';
    backBtnSlv.style.display = 'flex';
    nextBtnGreenMid.style.display = 'none';
    backBtnGreenMid.style.display = 'none';
    nextBtnGld.style.display = 'none';
    backBtnGld.style.display = 'none';
    
    index = 0;
}

nextBtnGray.addEventListener('click', nextImageGray);
backBtnGray.addEventListener('click', backImageGray);
nextBtnGld.addEventListener('click', nextImageGld);
backBtnGld.addEventListener('click', backImageGld);
nextBtnGreenMid.addEventListener('click', nextImageGreenMid);
backBtnGreenMid.addEventListener('click', backImageGreenMid);
nextBtnSlv.addEventListener('click', nextImageSlv);
backBtnSlv.addEventListener('click', backImageSlv);

btnGrayColor.addEventListener('click', grayColor);
btnGldColor.addEventListener('click', goldColor);
btnGreenMidColor.addEventListener('click', greenMidColor);
btnSlvColor.addEventListener('click', SilverColor);