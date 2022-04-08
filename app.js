let inputArticle = document.getElementById('article-input');
let ajouterTacheSubmit = document.getElementById('ajouterArticleForm');
let divListeArticles = document.getElementById('liste-articles');
let divListeAchat = document.getElementById('liste-achat');
let divListeMaison = document.getElementById('liste-maison');
let toutesLesTaches = document.getElementsByClassName('.tache');
let item;
let tableauDropListe = [divListeAchat,divListeMaison,divListeArticles];

// ------------------------------ event listeners ------------------------------------
// écoute d'évènement sur la soumission du formulaire
ajouterTacheSubmit.addEventListener('submit', (e)=>{
    e.preventDefault();
    ajouterElementDivListeArticle();
});
document.addEventListener('dragstart', function(e){
      dragStart(e.target);
      item = e.target;
});
document.addEventListener('dragend', function(e){
    dragEnd(e.target);
});
// ---------------------------------------- fonctions ------------------------------------
// fonction qui créer un élément HTML à chaque validation
function ajouterElementDivListeArticle(){
    console.log(inputArticle.value.length);
    if(inputArticle.value.length > 3){
        let newElement = document.createElement('li');
        newElement.textContent = inputArticle.value;
        newElement.setAttribute('draggable', true);
        newElement.className = "tache";
        divListeArticles.appendChild(newElement);
        inputArticle.value ="";
    }
}

function dragStart(tache){
    tache.className += " deplacement";
}
function dragEnd(tache){
    tache.className = "tache";
}
function dragDrop(){
    this.className = "depot";
    this.appendChild(item);
}
function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    console.log(this)
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'depot';
}
// ------------------------- boucle tâches + écoute d'évènement tâches ---------------
for(let i = 0; i< tableauDropListe.length;i++){
    tableauDropListe[i].addEventListener('dragover', dragOver);
    tableauDropListe[i].addEventListener('dragenter', dragEnter);
    tableauDropListe[i].addEventListener('dragleave', dragLeave);
    tableauDropListe[i].addEventListener('drop', dragDrop);
}



