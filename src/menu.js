let Pasta = [
    {
      name: "Carbonara",
      description: "Carbonara is a pasta dish made with eggs, hard cheese, cured pork, and black pepper. The dish took its modern form and name in the middle of the 20th century.",
    },
    {
      name: "Bolognese",
      description: "Ingredients include a characteristic soffritto of onion, celery and carrot, different types of minced or finely chopped beef, often alongside small amounts of fatty pork. White wine, milk, and a small amount of tomato paste or tomatoes are added.",
    },
    {
      name: "Tomato",
      description: "Tomato sauces are common for meat and vegetables, but they are perhaps best known as bases for sauces for Mexican salsas and Italian pasta dishes. Tomatoes have a rich flavor, high water content, soft flesh which breaks down easily.",
    },
  ]
let Pizza = [
    {
      name: "Hawayana",
      description: "Is there a subject as divisive and controversial as the addition of pineapple to pizza? It certainly ranks right up there with topics that inspire strong opinions for and against. Pineapple on pizza is not just a topping choice like pepperoni or extra cheese—it's a position that must be defended.",
    },
    {
      name: "Neapolitan",
      description: "The classic Neapolitan pizza is the Margherita. This is typically topped with tomato sauce, fresh mozzarella cheese, fresh basil, and extra virgin olive oil. Parmesan cheese is also a popular addition as well as many other ingredients.",
    },
    {
      name: "Cheese",
      description: "This recipe turns simple into sublime with the addition of an exceptional pizza dough, low-moisture mozzarella cheese, and an easy to make tomato sauce that hits all of the right sweet and savory notes to marry all of the flavors in this pie. A simple garnish of fresh herbs, and you've got perfection on a plate.",
    },
  ]
let Panzerotti = [
    {
      name: "Peperoni",
      description: "You can really use any other ingredients you might use in pizza. As long as the ingredients are chopped small enough, and you don't go overboard with the filling. Be careful with raw meats, however, as you still need to make sure they are cooked to a safe temp.",
    },
    {
      name: "Vegetarian",
      description: "Leave the pepperoni out or use vegetarian pepperoni. You could use pineapple tidbits or green pepper or any other topping appropriate for pizza.",
    },
    {
      name: "Chiken",
      description: "filled like a panzerotto but as light as only chicken breast can be! A fanciful and greedy idea! Make them for dinner tonight together with a salad are perfect!",
    },
  ]
      
  var container = document.createElement('div');
  container.style.gap = '10px';
  container.style.marginTop = '30px';
  container.style.marginBottom = '30px';
  centerdiv(container);
  Pasta.forEach(createcon);
  
  function createcon(item, index, arr){
    let flavorcon = document.createElement('div');
    flavorcon.style.width = '70%';
    //flavorcon.style.margin = '10px';

    let tittle= document.createElement('div');
    tittle.style.marginTop = '10px';
    tittle.textContent = arr[index].name;
    tittle.style.fontFamily = 'Tangerine, serif';
    tittle.style.fontSize = '3rem';

    let content1 = document.createElement('div');
    content1.style.marginBottom = '10px';
    content1.style.marginTop = '10px';
    content1.style.opacity = '0.7';
    content1.style.fontFamily = 'Courgette, serif';
    content1.textContent = arr[index].description;  
    
    [tittle, content1].forEach((item) => flavorcon.appendChild(item));
    [flavorcon, tittle, content1].forEach((item) => centerdiv(item));
    container.appendChild(flavorcon);
  }
  function centerdiv(item){
    item.style.display = 'flex';
    item.style.justifyContent = 'center';
    item.style.alignItems = 'center';
    item.style.flexDirection = 'column';
  }
  function menuclick (item){
    item.style.cursor = 'pointer';
    item.addEventListener("click", changmenu);
    item.style.fontFamily = 'Courgette, serif';
    item.style.fontSize = "1.1rem";
  }
  function changmenu (){ 
    var clicked = this.innerHTML;
    console.log('clicked ' + clicked);
    while (container.hasChildNodes()) {container.removeChild(container.firstChild);}
    if (clicked == 'Panzerotti') { Panzerotti.forEach(createcon);}
    if (clicked == 'Pizza') { Pizza.forEach(createcon);}
    if (clicked == 'Pasta') { Pasta.forEach(createcon);}
  }

  var menudiv = document.createElement('div');
  menudiv.style.width = '100%';
  menudiv.style.paddingTop = '25px';
  menudiv.style.paddingBottom = '25px';
  menudiv.style.display = 'flex';
  menudiv.style.flexDirection = 'row';
  menudiv.style.justifyContent = 'center';
  menudiv.style.backgroundColor = 'black';
  menudiv.style.color = 'white';
  menudiv.style.gap = '5rem';

  var pastam = document.createElement('div');
  pastam.textContent = 'Pasta';
  var pizzam = document.createElement('div');
  pizzam.textContent = 'Pizza';
  var panm = document.createElement('div');
  panm.textContent = 'Panzerotti';

[pastam, pizzam, panm].forEach((item) => menuclick(item));
[pastam, pizzam, panm].forEach((item) => menudiv.appendChild(item));

var menu = document.createElement('div');
menu.id = 'actual';
menu.style.position = 'relative';
[menudiv, container].forEach((item) => menu.appendChild(item));

export default menu;