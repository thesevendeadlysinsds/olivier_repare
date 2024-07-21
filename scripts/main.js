const menu = document.getElementsByClassName("menu")[0];

const img = document.createElement("img");

const home = document.createElement("a");
const news = document.createElement("a");
const shop = document.createElement("a");
const contact = document.createElement("a");

img.src = "img/Logo.png";
img.className = "logo";
img.draggable = false;
img.alt = "Logo d'Olivier Répare";
img.width = 100;
img.height = 233;

home.innerText = "Accueil";
home.href = "index.html";
home.draggable = false;

news.innerText = "Actualités";
news.href = "News.html";
news.draggable = false;

shop.innerText = "Magasin";
shop.href = "Shop.html";
shop.draggable = false;

contact.innerText = "Contact";
contact.href = "Contact.html";
contact.draggable = false;

menu.appendChild(img);
menu.appendChild(contact);
menu.appendChild(shop);
menu.appendChild(news);
menu.appendChild(home);