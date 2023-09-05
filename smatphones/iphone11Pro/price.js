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
        price.innerHTML = 'R$ 3.100,00';
        installment6.innerHTML = '06x de 561,72';
        installment12.innerHTML = '12x de 295,92';
        installment18.innerHTML = '18x de 205,93';
    }

    if(memory.value == "128gb") {
        price.innerHTML = 'Indisponível';
        installment6.innerHTML = '';
        installment12.innerHTML = '';
        installment18.innerHTML = '';
    }

    if(memory.value == "256gb") {
        price.innerHTML = 'R$ 3.400,00';
        installment6.innerHTML = '06x de 616,08';
        installment12.innerHTML = '12x de 324,55';
        installment18.innerHTML = '18x de 225,86';
    }

    console.log(memory.value)
}


memory.addEventListener('change', setMemory);
