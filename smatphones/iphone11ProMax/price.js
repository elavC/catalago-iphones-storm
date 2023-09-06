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
        price.innerHTML = 'R$ 3.200,00';
        installment6.innerHTML = '06x de 579,84';
        installment12.innerHTML = '12x de 305,46';
        installment18.innerHTML = '18x de 212,58';
    }

    if(memory.value == "128gb") {
        price.innerHTML = 'R$ Indisponível';
        installment6.innerHTML = '';
        installment12.innerHTML = '';
        installment18.innerHTML = '';
    }

    if(memory.value == "256gb") {
        price.innerHTML = 'R$ 3.550,00';
        installment6.innerHTML = '06x de 634,91';
        installment12.innerHTML = '12x de 332,03';
        installment18.innerHTML = '18x de 233,83';
    }

    console.log(memory.value)
}


memory.addEventListener('change', setMemory);
