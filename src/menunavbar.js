import navbar from './navbar.js';   // menunavbar.js get every clicked eleemnt y send to index.js to display it
import home from './home.js';
import about from './about.js';
import displayit from './index.js';
import menu from './menu.js';
import contact from './contact.js';

function menunavbar(){  /// this function must selecto what to show and send it to index to be displayed
    var clicked = this.innerText;
    console.log(this.innerText);
    if (clicked == 'About it'){clicked = about;};
    if (clicked == 'Odin Restaurant'){clicked = home;};
    if (clicked == 'Menu'){clicked = menu;};
    if (clicked == 'Contact'){clicked = contact;};
    if (clicked == ''){clicked = home;};
    var actual = document.querySelector('#actual')
    if (actual == ''){clicked = home; actual = '#actual'}; //trying to get elements wiithout name...must be different way
    document.body.removeChild(actual);
    displayit(clicked);
}

export default menunavbar;