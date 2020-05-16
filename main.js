const itemToBuy = document.querySelector('.tobuy');
const button = document.querySelector('.btn');
const bought = document.querySelector('.bought');

button.addEventListener('click', (event) =>{
    let value = itemToBuy.value;
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const label = document.createElement('label');
    const input = document.createElement('input');
    bought.appendChild(h2);
    bought.appendChild(p);
    bought.appendChild(label);
    bought.appendChild(input);
    h2.classList.add('item');
    p.classList.add('price');
    label.textContent = 'Quantity';
    input.classList.add('quantity');
    h2.textContent = value;
    let thePrice = value.length;
    p.textContent = `$ ${thePrice}.00`;
    input.addEventListener('input', (e) =>{
        let value2 = input.value;
        p.textContent = `$ ${thePrice * value2}.00`;
    });
});
