import chef from './pasta.jpg';
const imagen = new Image();
imagen.src = chef;
imagen.style.width = "100%";
imagen.style.marginTop = "5px";
imagen.style.position = 'relative';
imagen.style.zIndex = "1";
imagen.style.opacity = '0.5';
//imagen.style.filter = 'grayscale(100%)';

var panh1 = document.createElement('h1'); // will go inside hicon div
panh1.textContent = 'Live is better with pasta!';

var panp = document.createElement('p');
panp.textContent = "Since at least the time of Cato's De Agri Cultura, basic pasta dough has been made mostly of wheat flour or semolina, with durum wheat used predominantly in the South of Italy and soft wheat in the North. Regionally other grains have been used, including those from barley, buckwheat, rye, rice, and maize, as well as chestnut and chickpea flours.";
panp.style.fontFamily = 'Courgette, serif';

var h1con = document.createElement('div');
h1con.appendChild(panh1);
h1con.style.position = 'absolute';
h1con.style.top = '10%';
h1con.style.zIndex = "2";
h1con.style.marginLeft = "5%";
h1con.style.fontFamily = 'Tangerine, serif';

var pcon = document.createElement('div');
pcon.appendChild(panp);
pcon.style.position = 'absolute';
pcon.style.top = '20%';
pcon.style.width = '35%';
pcon.style.zIndex = "3";
pcon.style.marginLeft = "5%";

var qcon = document.createElement('div');
qcon.textContent = "Taked from wikipedia";
qcon.style.display = "flex";
qcon.style.justifyContent = "end";
qcon.style.fontSize = "10px";
pcon.appendChild(qcon);

var about = document.createElement('div');
about.id = 'actual';
about.style.position = 'relative';
about.style.height = 'auto';
//about.style.background = imagen;

about.appendChild(h1con);
about.appendChild(pcon);
about.appendChild(imagen);


if (window.matchMedia("(max-width: 600px)").matches) {
    h1con.style.position = 'relative';
    h1con.style.top = '100%';
    h1con.style.zIndex = "2";
    h1con.style.marginLeft = "5%";
    h1con.style.fontFamily = 'Tangerine, serif';

    pcon.style.position = 'relative';
    pcon.style.top = '120%';
    pcon.style.width = '80%';
    pcon.style.zIndex = "3";
    pcon.style.marginLeft = "5%";

    imagen.style.opacity = '0.9';
}
export default about;