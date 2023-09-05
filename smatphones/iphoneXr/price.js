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
        price.innerHTML = 'R$ 1.900,00';
        installment6.innerHTML = '06x de 344,28';
        installment12.innerHTML = '12x de 181,37';
        installment18.innerHTML = '18x de 126,22';
    }

    if(memory.value == "128gb") {
        price.innerHTML = 'R$ 2.050,00';
        installment6.innerHTML = '06x de 371,46';
        installment12.innerHTML = '12x de 195,69';
        installment18.innerHTML = '18x de 136,18';
    }

    if(memory.value == "256gb") {
        price.innerHTML = 'Indisponível';
        installment6.innerHTML = '';
        installment12.innerHTML = '';
        installment18.innerHTML = '';
    }

    console.log(memory.value)
}


memory.addEventListener('change', setMemory);
