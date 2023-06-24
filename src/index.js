import _ from 'lodash';
import navbar from './navbar.js';
import footer from './footer.js';
import home from './home.js';
import about from './about.js';
import menunavbar from './menunavbar.js';
import menu from './menu.js';
import contact from './contact.js';

displayit(home);
//document.body.style.background = imagen;
function displayit(clicked){
  console.log('inside displayit')
  document.body.appendChild(navbar);
  document.body.appendChild(clicked);
  document.body.appendChild(footer);
  document.body.style.width = "100%";
  document.body.style.height = "auto";
  //return;
};

window.onresize = resize;

function resize()
{
 console.log("resize event detected!");
}

export default displayit;
