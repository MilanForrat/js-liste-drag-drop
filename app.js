let inputArticle = document.getElementById('article-input');
let ajouterTacheSubmit = document.getElementById('ajouterArticleForm');
let divListeArticles = document.getElementById('liste-articles');
let divListeAchat = document.getElementById('liste-achat');
let divListeMaison = document.getElementById('liste-maison');
let toutesLesTaches = document.getElementsByClassName('.tache');
let tousLesBtnDelete = document.getElementsByClassName('delete-btn')
let tousLesTextArea = document.getElementsByClassName('tache-name');
let inputTaskName = document.getElementsByClassName('tache-name');
let item;
let tableauDropListe = [divListeAchat,divListeMaison,divListeArticles];

// ------------------------------ event listeners ------------------------------------
// écoute d'évènement sur la soumission du formulaire
ajouterTacheSubmit.addEventListener('submit', (e)=>{
    e.preventDefault();
    ajouterElementDivListeArticle();
    preparerBtnDelete();
    textAreaResizeListener();
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
    if(inputArticle.value.length > 2){
        // création d'un li pour stocker l'input et les autres éléments
        let newLiElement = document.createElement('li');
        newLiElement.className = "tache";
        newLiElement.setAttribute('draggable', true);
        divListeArticles.appendChild(newLiElement);
        // création d'un input
        let newElement = document.createElement('textarea');
        newElement.value = inputArticle.value;
        newElement.className = "tache-name";
        newElement.setAttribute('min', "3");
        newLiElement.appendChild(newElement);
        autoResizeTextArea(newElement);
        // création de la quantité
        let newElementQuantityInput = document.createElement('input');
        newElementQuantityInput.setAttribute("type","number");
        newElementQuantityInput.setAttribute("min","0");
        newElementQuantityInput.setAttribute("max","99");
        newElementQuantityInput.value = 1;
        newElementQuantityInput.classList = "quantity-input";
        newLiElement.appendChild(newElementQuantityInput);
        // création de la croix (pour supprimer le li)
        let newElementCloseBtn = document.createElement('btn');
        newElementCloseBtn.classList = "delete-btn";
        newLiElement.appendChild(newElementCloseBtn);
        inputArticle.value ="";
    }
    else{
        inputArticle.value ="";
        inputArticle.placeholder = "Veuillez saisir plus de 2 caractères"
    }
}
function preparerBtnDelete(){
    for(let i =0; i<tousLesBtnDelete.length;i++){
        tousLesBtnDelete[i].addEventListener('click', (e) =>{
            // console.log(e.target.parentElement);
            let parent = e.target.parentElement;
            // console.log(parent.parentElement);
            parent.parentElement.removeChild(e.target.parentElement);
        });
    }    
}
function textAreaResizeListener(){
   
    for(let i=0; i<tousLesTextArea.length;i++){
        tousLesTextArea[i].addEventListener('input', ()=>{
            console.log(tousLesTextArea[i])
            autoResizeTextArea(tousLesTextArea[i]);
        });
    }

}
function autoResizeTextArea(param){
    console.log(param);
    param.style.height = 'auto';
    param.style.height = param.scrollHeight + 'px';
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



