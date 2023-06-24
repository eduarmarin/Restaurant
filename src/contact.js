import icon1 from './phone.svg';
const phone = new Image();
phone.src = icon1;
phone.style.width = "100px";

import icon2 from './geo.svg';
const geo = new Image();
geo.src = icon2;
geo.style.width = "100px";

var phoneh1 = document.createElement('h1');
phoneh1.textContent = 'Phone: 1234567890';
var geoh1 = document.createElement('h1');
geoh1.textContent = 'Visit us Here!';

var containerp = document.createElement('div');
var containerg = document.createElement('div');
var container = document.createElement('div');
container.style.height = "500px";
container.style.gap = "50px";
var contact = document.createElement('div');

[phone, phoneh1].forEach((item) => containerp.appendChild(item));
[geo, geoh1].forEach((item) => containerg.appendChild(item));
[containerp, containerg].forEach((item) => container.appendChild(item));

[contact, container, containerg, containerp].forEach((item) => centerdiv(item));
function centerdiv(item){
    item.style.display = 'flex';
    item.style.justifyContent = 'center';
    item.style.alignItems = 'center';
    if (item === container) {item.style.flexDirection = 'row';} else {item.style.flexDirection = 'column';};
}

contact.appendChild(container);
contact.id = 'actual';
contact.style.position = 'relative';


if (window.matchMedia("(max-width: 600px)").matches) {
    container.style.height = "auto";
    container.style.gap = "50px";
    container.style.marginTop = "50px";
    container.style.marginBottom = "50px";
    container.style.flexDirection = 'column';
}

export default contact;