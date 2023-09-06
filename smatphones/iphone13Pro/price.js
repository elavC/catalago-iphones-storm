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
        price.innerHTML = 'R$ 4.600,00';
        installment6.innerHTML = '06x de R$ 822,69';
        installment12.innerHTML = '12x de R$ 430,23';
        installment18.innerHTML = '18x de R$ 301,97';
    }

    if(memory.value == "256gb") {
        price.innerHTML = 'R$ 4.900,00';
        installment6.innerHTML = '06x de R$ 887,88';
        installment12.innerHTML = '12x de R$ 467,74';
        installment18.innerHTML = '18x de R$ 325,51';
    }

    console.log(memory.value)
}


memory.addEventListener('change', setMemory);
