// const urlimages = []
// const urlnames = ['chef', 'pizza', 'pasta', 'pan'];
// const names = ['image1', 'image2', 'image3', 'image4'];

import chef from './cheff.jpg'; // chef iamge
const image1 = new Image();
image1.src = chef;
image1.style.width = "250px";
image1.style.borderRadius = "10px";
image1.style.border = "thick double gray";
image1.style.margin = "20px";

import pizza from './pizza.png'; // pizza
const image2 = new Image();
image2.src = pizza;
image2.style.height = "150px";

import pasta from './pasta.png'; // pasta
const image3 = new Image();
image3.src = pasta;
image3.style.height = "250px";

import pan from './pan.png'; // pancerotti
const image4 = new Image();
image4.src = pan;
image4.style.height = "150px";

var containerge = document.createElement('div'); // will contain chefaim and images
    containerge.style.display = "flex";
    containerge.style.height = "auto";
    
var chefim = document.createElement('div');

var images = document.createElement('div'); // contain div for piizaim, pastaim and panim
images.style.display = "flex";
images.style.alignItems = "flex-end";
images.style.justifyContent = "center";
images.style.flexDirection = "row";
images.style.height = "auto";
//images.style.backgroundColor = "pink";

var pizzaim = document.createElement('div');
pizzaim.style.marginRight = '20px';
var pizzah1 = document.createElement('h1');
pizzah1.textContent = 'Pizza';
pizzah1.style.fontFamily = 'Courgette, serif';
pizzah1.style.fontSize = "1.1rem";
var pizzap = document.createElement('p');
pizzap.textContent = 'Peperoni, vagetables, hawayana...';
pizzap.style.width = '150px';
pizzap.style.height = 'auto';
pizzap.style.opacity = '0.7';
pizzap.style.fontFamily = 'Courgette, serif';
pizzaim.appendChild(image2);

var pastaim = document.createElement('div');
pastaim.style.marginRight = '20px';
var pastah1 = document.createElement('h1');
pastah1.textContent = 'Pasta';
pastah1.style.fontFamily = 'Courgette, serif';
pastah1.style.fontSize = "1.1rem";
var pastap = document.createElement('p');
pastap.textContent = 'Many souce and kind of pasta and flavours...';
pastap.style.width = '150px';
pastap.style.height = 'auto';
pastap.style.opacity = '0.7';
pastap.style.fontFamily = 'Courgette, serif';
pastaim.appendChild(image3);

var panim = document.createElement('div');
var panh1 = document.createElement('h1');
panh1.textContent = 'Panzerotti';
panh1.style.fontFamily = 'Courgette, serif';
panh1.style.fontSize = "1.1rem";
var panp = document.createElement('p');
panp.textContent = 'Peperoni, vagetables, hawayana...';
panp.style.width = '150px';
panp.style.height = 'auto';
panp.style.opacity = '0.7';
panp.style.fontFamily = 'Courgette, serif';
panim.appendChild(image4);

containerge.appendChild(chefim);
containerge.appendChild(images);

chefim.appendChild(image1);
images.appendChild(pizzaim);
images.appendChild(pastaim);
images.appendChild(panim);
centeritems(panim, panh1, panp);
centeritems(pastaim, pastah1, pastap);
centeritems(pizzaim, pizzah1, pizzap);
centeritems(containerge, chefim, images);

var home = document.createElement('div');
home.id = 'actual';
home.style.position = 'relative';
home.appendChild(containerge);
home.style.background = '#f3f6f4';
home.style.height = 'auto';

function centeritems(item, item2, item3){
    item.style.display = "flex";
    item.style.alignItems = "center";
    item.style.justifyContent = "center";
    item.style.flexDirection = "column";
    item.appendChild(item2);
    item.appendChild(item3);
}

if (window.matchMedia("(max-width: 600px)").matches) {
    images.style.flexDirection = "column";
    images.style.justifyContent = "center";
    images.style.alignItems = "center";
    images.style.height = "auto";
    images.style.padding = "0px";
    images.style.margin = "0px";

    image1.style.width = "200px";
    image2.style.height = "100px";
    image3.style.height = "200px";
    image4.style.height = "100px";

    pizzaim.style.marginRight = '0px';
    pastaim.style.marginRight = '0px';

}

export default home; // everything must go inside this to be used by index.js