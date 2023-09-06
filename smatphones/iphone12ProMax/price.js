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
        price.innerHTML = 'R$ 4.300,00';
        installment6.innerHTML = '06x de 769,04';
        installment12.innerHTML = '12x de 402,17';
        installment18.innerHTML = '18x de 282,28';
    }

    if(memory.value == "256gb") {
        price.innerHTML = 'R$ 4.500,00';
        installment6.innerHTML = '06x de 804,81';
        installment12.innerHTML = '12x de 420,88';
        installment18.innerHTML = '18x de 295,40';
    }

    console.log(memory.value)
}


memory.addEventListener('change', setMemory);
