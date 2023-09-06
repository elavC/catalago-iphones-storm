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
        price.innerHTML = 'R$ 2.749,00';
        installment6.innerHTML = '06x de 491,83';
        installment12.innerHTML = '12x de 257,20';
        installment18.innerHTML = '18x de 180,52';
    }

    if(memory.value == "128gb") {
        price.innerHTML = 'Indisponível';
        installment6.innerHTML = '';
        installment12.innerHTML = '';
        installment18.innerHTML = '';
    }

    if(memory.value == "256gb") {
        price.innerHTML = 'R$ 3.200,00';
        installment6.innerHTML = '06x de 572,31';
        installment12.innerHTML = '12x de 299,29';
        installment18.innerHTML = '18x de 210,07';
    }

    console.log(memory.value)
}


memory.addEventListener('change', setMemory);
