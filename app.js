let inputArticle = document.getElementById('article-input');
let ajouterTacheSubmit = document.getElementById('ajouterArticleForm');
let divListeArticles = document.getElementById('liste-articles');
let divListeAchat = document.getElementById('liste-achat');
let divListeMaison = document.getElementById('liste-maison');

// écoute d'évènement sur la soumission du formulaire
ajouterTacheSubmit.addEventListener('submit', (e)=>{
    e.preventDefault();
    ajouterElementDivListeArticle();
});

// fonction qui créer un élément HTML à chaque validation
function ajouterElementDivListeArticle(){
    let newElement = document.createElement('li');
    newElement.textContent = inputArticle.value;
    newElement.setAttribute('draggable', true);
    newElement.className = "tache";
    divListeArticles.appendChild(newElement);
    inputArticle.value ="";
}


