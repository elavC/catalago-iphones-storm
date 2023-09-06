const memory = document.getElementById('memory');
const price = document.getElementById('price');
const installment6 = document.getElementById('installment6');
const installment12 = document.getElementById('installment12');
const installment18 = document.getElementById('installment18');

function setMemory() {
    if(memory.value == "none") {
        price.innerHTML = 'Selecione um armazenamento!';
        installment6.innerHTML = '';
        installment12.innerHTML = '';
        installment18.innerHTML = '';
    }
    
    if(memory.value == "64gb") {
        price.innerHTML = 'Indisponível';
        installment6.innerHTML = '';
        installment12.innerHTML = '';
        installment18.innerHTML = '';
    }

    if(memory.value == "128gb") {
        price.innerHTML = 'R$ 5.050,00';
        installment6.innerHTML = '06x de R$ 915,06';
        installment12.innerHTML = '12x de R$ 482,05';
        installment18.innerHTML = '18x de R$ 335,47';
    }

    if(memory.value == "256gb") {
        price.innerHTML = 'R$ 5.300,00';
        installment6.innerHTML = '06x de R$ 960,36';
        installment12.innerHTML = '12x de R$ 505,92';
        installment18.innerHTML = '18x de R$ 352,08';
    }

    console.log(memory.value)
}


memory.addEventListener('change', setMemory);
