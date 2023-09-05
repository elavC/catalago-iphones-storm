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
        price.innerHTML = 'R$ 2.400,00';
        installment6.innerHTML = '06x de 434,88';
        installment12.innerHTML = '12x de 229,10';
        installment18.innerHTML = '18x de 159,43';
    }

    if(memory.value == "128gb") {
        price.innerHTML = 'R$ 2.600,00';
        installment6.innerHTML = '06x de 471,12';
        installment12.innerHTML = '12x de 248,19';
        installment18.innerHTML = '18x de 172,72';
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
