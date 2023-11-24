const slides = [
    {
        /***  Le chemin vers l'image de la diapositive ***/
        "image": "./assets/images/slideshow/slide1.jpg",
        
        /*** Le texte qui accompagne l'image. Il contient des balises <span> pour mettre en forme le texte. ***/
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        "image": "./assets/images/slideshow/slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        "image": "./assets/images/slideshow/slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        "image": "./assets/images/slideshow/slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>",
    }
];

/*** Les variables que j'utilise pour récupérer mes class, id ou balises ***/
let image = document.querySelector(".banner-img")

const arrowLeft = document.querySelector(".arrow_left")

const arrowRight = document.querySelector(".arrow_right")

let text = document.querySelector("#banner p")

const dotsContainer = document.querySelector(".dots")

/*** La variable numberSlides me permet de compter les diapositives dans la liste slides avec slides.lenght ***/
const numberSlides = slides.length;

/*** La variable currentSlides me premer de définir la valeur initiale ou l'état initial de mes diapositives ***/
let currentSlides = 0; 


/*** Fonction pour mettre à jour les classes des éléments dot ***/
function updateDots(selectedIndex) {
    const dots = document.querySelectorAll(".dot");
    
    /*** Parcoure tous les éléments dot et met à jour leurs classes en conséquence ***/
    dots.forEach((dot, index) => {
        if (index === selectedIndex) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}

/*** Evenement pour le clique de la flèche de droite ***/

arrowRight.addEventListener("click", () => {
    console.log("Vous avez cliquez sur la flèche de droite")
    /*** Augmentez la diapositive actuelle ***/
    currentSlides++;
    
    /*** Ceci me permet de vérifier si c'est la dernière diapositive et de revenir à la première si c'est le cas ***/
    if (currentSlides >= numberSlides) {
        currentSlides = 0;
    }
    
    /*** Mettre à jour l'image et le texte avec la diapositive actuellement affichée ***/
    image.src = slides[currentSlides].image;
    text.innerHTML = slides[currentSlides].tagLine;
    
    /*** Mettre à jour les classes des éléments dot pour refléter la diapositive actuellement sélectionnée ***/
    updateDots(currentSlides);
});

/*** Evenement pour le clique de la flèche de gauche ****/

arrowLeft.addEventListener("click", () => {
    console.log("Vous avez cliquez sur la flèche de gauche")
    
    /*** Réduire l'index de la diapositive actuelle ***/
    currentSlides--;
        
    /*** Vérifiez si j'ai avez atteint la première diapositive, passez à la dernière si c'est le cas ***/
    if (currentSlides < 0) {
        currentSlides = numberSlides - 1;
    }
    
    /*** Mettre à jour l'image et le texte avec la diapositive actuellement affichée ***/
    image.src = slides[currentSlides].image;
    text.innerHTML = slides[currentSlides].tagLine;
    
    /*** Mettre à jour les classes des éléments dot pour refléter la diapositive actuellement sélectionnée ***/
    updateDots(currentSlides);
    });

//*** La boucle 'for' me permet de donner une instruction qui demande à être répétées un certain nombre de fois ***/
for (i = 0; i < numberSlides; i++ ) {
const dot = document.createElement("div")
dot.classList.add("dot")

/*** Ceci me permet de d'ajouter et de déplacer le point par rapport à l'image sélectionner ***/
if ( i === 0){
dot.classList.add("dot_selected")
}

/*** Ceci me permet d'ajouter un élément enfant à mon élément parent ***/
dotsContainer.appendChild(dot)
}
console.log(dotsContainer)




