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
        price.innerHTML = 'R$ 6.600,00';
        installment6.innerHTML = '06x de R$ 1.195,91';
        installment12.innerHTML = '12x de R$ 630,01';
        installment18.innerHTML = '18x de R$ 438,44';
    }

    if(memory.value == "256gb") {
        price.innerHTML = 'R$ 7.250,00';
        installment6.innerHTML = '06x de R$ 1.313,69';
        installment12.innerHTML = '12x de R$ 692,06';
        installment18.innerHTML = '18x de R$ 481,62';
    }

    console.log(memory.value)
}


memory.addEventListener('change', setMemory);
