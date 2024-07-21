const input = document.getElementById("input");

var reset = false;

if (reset === false) {
    input.value = 1;
    reset = true;
}

const titleShop = document.getElementsByClassName("titleShop")[0];
const elements = document.getElementsByClassName("container")[0];
const popup = document.getElementById("popup");
const title = document.getElementById("title");
const infos = document.getElementById("description");
const image = document.getElementById("img");
const value = document.getElementById("price");

const product = document.getElementsByClassName("product");
const description = document.getElementsByClassName("description");

const descriptions = [
    `Un sticker reprennant celui de Carglass avec le texte "On met la clim' ?", une phrase mitique d'Olivier, prononcée à partir de la 9ème seconde de la publicité originale. Il n'en existe actuellement que 154 215 120 exemplaires, et après cela il n'y en aura plus car flemme d'en faire plus. Meilleur qualité d'impression, mais une fois collé, c'est finito et on ne peut plus le décoler sans perdre sa qualité de colle.`,
    `Très probablement le meilleur moyen pour que je puisse venir chez vous, mettre la clim', puis réparer votre pare-brise sans franchise ! Enfin, tant que l'impact est plus petit qu'une pièce de 2 euros, et que vous avez l'assurance brise-glace, sinon ça ne va pas aller ! Si vous voulez le Frédo de Carglass, vous verrez avec lui.`,
    `Un incontournable dans le "Olivier Lore" comme on dit, nan on ne dit pas ça ? Bon pas grave, tout ce que je peux dire c'est que c'est une réplique exacte utilisée dans la publicité, et grâce à elle, vous pourrez faire l'Olivier de chez Carglass, chez vous !`,
    `L'iconique, l'unique, l'inoubliable, la crème de la crème, la cerise sur le gâteau, le camion officiel d'Olivier !!! Uniquement les vrais fans le veulent, et c'est pour ça qu'il est à un prix vraiment très raisonnable pour sa qualité, son histoire et sa rareté.`
];

var currentPrice = 0;

function viewProduct(name, img, price, i) {
    titleShop.style.display = "none";
    popup.style.display = "block";
    elements.style.display = "none";

    title.innerText = name;
    infos.innerText = descriptions[i];
    image.src = img;
    value.innerText = price + " €";

    currentPrice = price;

    if (name === "Camion d'Olivier") {
        input.style.display = "none";
    }
}

document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        if (popup.style.display = "block") {
            closeProduct();
        }
    }
};

function closeProduct() {
    titleShop.style.display = "block";
    popup.style.display = "none";
    elements.style.display = "flex";
    input.value = 1;
}

input.addEventListener("input", function () {
    if (input.value > 999) {
        input.value = 999;
    } else if (input.value === "") {
        input.value = 1;
    }

    if (input.value < 1 || isNaN(Number(input.value)) || input.value % 1 != 0) {
        value.innerText = "bah non du coup"
    } else {
        value.innerText = Number(currentPrice * input.value).toFixed(2) + " €";
    }
});