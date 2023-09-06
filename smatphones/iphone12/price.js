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
        price.innerHTML = 'R$ 2.900,00';
        installment6.innerHTML = '06x de 518,65';
        installment12.innerHTML = '12x de 271,23';
        installment18.innerHTML = '18x de 190,37';
    }

    if(memory.value == "128gb") {
        price.innerHTML = 'R$ 2.999,00';
        installment6.innerHTML = '06x de 536,54';
        installment12.innerHTML = '12x de 280,58';
        installment18.innerHTML = '18x de 196,94';
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
