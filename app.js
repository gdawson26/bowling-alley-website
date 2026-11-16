// menu items arrays
const menuItems = [
  {
    name: "Awesome Burger",
    price: "$9",
    image: "https://images.themodernproper.com/production/posts/2016/ClassicCheeseBurger_9.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1749310239&s=463b18fc3bb51dc5d96e866c848527c4",
    description: "Served with fries and a drink for an additional $3.",
    extraDetails: "Ingredients: Beef patty, American cheese, Lettuce, Tomato, Potato bun, Mustard, Ketchup, Pickles\n\nAllergens: Gluten, Dairy\n\nCalories: 600"
  },
  {
    name: "Pizza Slice",
    price: "$7",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTM1ETGxrwqIisFjFJu1JykEQ1zEXyzns5hYYwrGHi1t02qmbfhfvZC_Ye&s=10",
    description: "Your choice between cheese, pepperoni, or combo. Served with a side salad and a drink for an additional $3",
    extraDetails: "Ingredients (Cheese): Tomato sauce, Mozzarella cheese, Wheat crust\n\nIngredients (Pepperoni): Tomato sauce, Mozzarella cheese, Wheat crust, Pepperoni\n\nIngredients (Combo):Tomato sauce, Mozzarella cheese, Wheat crust, Sausage, Bell pepper, Black olive\n\n Allergens: Gluten, Dairy, Egg\n\nCalories: 500"
  },
  {
    name: "Hot Dog",
    price: "$5",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1703046887.jpg?c=original",
    description: "Served with fries and a drink for an additional $3. Make it a chili dog for an additional $2.",
    extraDetails: "Ingredients (Regular): Potato bun, Beef hot dog, Mustard\n\nIngredients (Chili Dog): Potato Bun, Beef hot dog, Shredded cheese, Diced onion, Chili\n\n Allergens: Gluten, Dairy,\n\nCalories: 400"
  }
];

//set up menu item boxes

const container = document.getElementById("menu-container");

var html = '';

for (var i = 0; i < menuItems.length; i++) {

  var item = menuItems[i];
  
  html += '<div class="menu-item">' + '<div class="menu-text">' + '<div class="menu-header">' +
            '<h3 class="menu-title">' + item.name + '</h3>'+
            '</div>' + '<p class="menu-desc">' + item.description + '</p>' + '</div>' +
            '<img src="' + item.image + '" alt="' + item.name + '" class="menu-img">' +
            '</div>';
}

container.innerHTML = html;

var menuWindow = document.getElementById('menuWindow');
var windowName = document.getElementById('windowName');
var windowPrice = document.getElementById('windowPrice');
var windowDetails = document.getElementById('windowDetails');
var closeButton = document.getElementById('closeWindow');

var items = container.getElementsByClassName('menu-item');

//the items are able to be clicked, opening up a window that shows the extra details
for (var j = 0; j < items.length; j++) {
    (function(index){
    items[index].onclick = function()
    {
        var clickedItem = menuItems[index];
        windowName.innerText = clickedItem.name;
        windowPrice.innerText = clickedItem.price;
        windowDetails.innerText = clickedItem.extraDetails;
        menuWindow.style.display = 'block';
    };
    })(j);
}

// make sure the window is closable
closeButton.onclick = function()
{
    menuWindow.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target === menuWindow) 
    {
    menuWindow.style.display = 'none';
    }
};


