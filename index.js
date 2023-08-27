var precio = 400000;
precioSpan = document.querySelector('.precio-inicial');
precioSpan.innerHTML = precio;

const price = document.querySelector('#price');
const suma = document.querySelector('#suma');
const btnDecrease = document.querySelector('#btn-decrease');
const btnIncrease = document.querySelector('#btn-increase');
const total = document.querySelector('#total');


// metodos 

const decrease = () => {
    const sumaValue = Number(suma.innerHTML);
    if( sumaValue <= 0 ){
        return alert('No puedes comprar menos de lo que tienes');
    }
    suma.innerHTML = sumaValue - 1;
    total.innerHTML = Number(suma.innerHTML) * precio;
}

const increase = () => {
    const sumaValue = Number(suma.innerHTML);
    
    suma.innerHTML = sumaValue + 1;
    total.innerHTML = Number(suma.innerHTML) * precio;
}

// eventos 

btnDecrease.addEventListener('click', decrease);
btnIncrease.addEventListener('click', increase);