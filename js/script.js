let inputWrappers = document.querySelectorAll('.input-wrapper');
let quantityInputs = document.querySelectorAll('.quantity-input');

let icons = {
    email: 'email',
    phone: 'phone',
    name: 'account_circle',
    address: 'home',
    city: 'location_city',
    country: 'public',
    postalCode: 'markunread_mailbox',
};

inputWrappers.forEach(e => {
    e.dataset.icon = icons[e.children[0].name];
});

for (let i = 0; i < quantityInputs.length; i++) {
    const element = quantityInputs[i];

    let addBtn = createElement('span', 'add');
    let removeBtn = createElement('span', 'remove');
    let value = createElement('p', 1, {class: 'value'});

    let input = createElement('input', '', {
        value: 1,
        type: 'hidden',
        name: `quantity${i+1}`,
    });

    addBtn.onclick = () => changeVal(1);
    removeBtn.onclick = () => changeVal(-1);

    function changeVal(amount) {
        input.value = parseInt(input.value) + amount;
        value.innerText = input.value;
    }

    element.appendChild(removeBtn);
    element.appendChild(value);
    element.appendChild(addBtn);
    element.appendChild(input);
}

function createElement(element, text, attributes={}) {
    let e = document.createElement(element);
    e.innerText = text;
    for ([key, value] of Object.entries(attributes)) {
        e.setAttribute(key, value);
    }
    return e;
}