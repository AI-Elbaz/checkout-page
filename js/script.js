let inputWrappers = document.querySelectorAll('.input-wrapper');

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