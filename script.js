// Fonctionnalité 1 

console.log("Fonctionnalité 1: clique sur le footer et regarde ce qu'il s'affiche en console!")

var foot = document.getElementsByTagName('footer')[0];
// on pointe le footer par TagName
// ATTENTION: sort un array de tout les Tags footer
// Comme il n'y en a qu'un: on sélection le footer à l'index 0

foot.addEventListener('click', function clickConsole(){
// quand l'utilisateur clique sur le footer
	console.log("Clique ;)");
	// affichage du message "clique" dans la console
});


// Fonctionnalité 1-bis


let i = 0
// initialisation du compteur

	foot.addEventListener('click', function plusOne() {
		i ++
		// incrémentation de +1 à chaque click
		console.log(`clic numéro ${i}`);
});


// Fonctionnalité 2

console.log("Fonctionnalité 2: acitvation de hamburger menu: clique sur le hamburger bouton et le menu apparaîtrera... un peu n'importe comment!")



let menuBtn = document.querySelector('.navbar-toggler');
// va pointer le bouton sandwich
let menu = document.querySelector('#navbarHeader');
// pointe le menu déroulant

menuBtn.addEventListener('click', function collapse() {
	// quand l'uitlisateur clique sur le bouton de menu
	menu.classList.toggle("collapse");
	// affiche le menu ou l'enlève
	// fonction toggle permet de faire les deux!!!!!!!
})


// Fonctionnalité 3

console.log("Fonctionnalité 3: clique sur edit de la première card, son texte se mettra en rouge de manière irréversible! Sauf si tu rafraîchit la page :)")

// pointer le bouton edit de la première card
let firstCard = document.getElementsByClassName("col-md-4")[0];
let editBtn = firstCard.getElementsByClassName('btn-outline-secondary')[0];

// console.log(editBtn);

// pointer le text de la première card
let textCard = firstCard.getElementsByClassName('card-text')[0];

// console.log(textCard);


editBtn.addEventListener('click', function redText() {
	// fonction qui dit:" Quand tu click sur editBtn, 
	textCard.style.color = 'red';
	//textCard se met en rouge"
})


// Fonctionnalité 4

console.log("Fonctionnalité 4: clique sur le bouton 'Edit' de la deuxième card, le texte de la card va se mettre en vert. Si tu re-clique dessus, il redevient comme avant !")

// pointer le bouton edit de la deuxième card
let editBtn2 = document.getElementsByClassName('btn-outline-secondary')[1];

// console.log(editBtn2);

// pointer le texte de la deuxième card
let textCard2 = document.getElementsByClassName('card-text')[1];
// console.log(textCard2);

editBtn2.addEventListener('click', function greenText() {
	// si l'utilisateur clique
	if (textCard2.style.color == ''){
		// si la couleur du text est celle par défaut
	 textCard2.style.color = 'green';
	 // la mettre en vert
	}
	 else {
	 	// pour tous les autres cas
	 textCard2.style.color = '';
	 // mettre la couleur de défaut
	}
})


// Fonctionnalité 5

console.log("Fonctionnalité 5: double_clique sur la navbar!")

// pointer la navbar == header
let navbar = document.querySelector('header');

// pointer le lien cdn bootstrap
let style = document.styleSheets[0];

// initialisation qui dit que si styleStatus = true, le CDN Bootstrap est là
let styleStatus = true


navbar.addEventListener('dblclick', function booDelete() {
	// quand l'utilisateur va double cliquer
	if(styleStatus == true){
		// si le CDN est là
		style.disabled = false;
		// on enlève Bootstrap
		styleStatus = false;
		// on passe en false == pas de cdn Bootstrap
	}
	else{
		style.disabled = true;
		styleStatus = true;
	}
})


// Fonctionnalité 6

console.log("Fonctionnalité 6: passe et repasse avec ta souris sur les boutons views de chaque card!")

let allCards = document.getElementsByClassName("col-md-4");
// sort toutes les cards

for(let i = 0; i < allCards.length; i ++){

	let viewStatus = true;
	// à mettre dans la boucle!!!

	let viewBtn = allCards[i].getElementsByTagName("button")[0];
	// pointe le bouton view de la card
	let imgCards = allCards[i].getElementsByTagName("img")[0];
	// pointe l'image de la card
	let textCards = allCards[i].getElementsByClassName('card-text')[0];
	// pointe le texte de la card

	viewBtn.addEventListener('mouseover', function viewOver() {
	// pour chaque bouton view

		if(viewStatus == true){
			textCards.style.display = 'none';
			// met le texte en display: none; au lieu de block
			imgCards.style.width = '20%';
			// réduction de la taille de l'image
			viewStatus = false;
			// passe à false
		}
		else if(viewStatus == false){
			textCards.style.display = 'block';
			// remet le texte en display: block;
			imgCards.style.width = '100%';
			// l'image retrouve sa taille initiale
			viewStatus = true;
			// passe à true == situation initiale
		}	
	})
}


// Fonctionnalité 7

console.log("Fonctionnalité 7: clique sur le bouton gris ==>!")


let greyBtn = document.getElementsByClassName('btn-secondary')[0];
// pointer le bouton ==>

greyBtn.addEventListener('click', function replaceCard() {
	// en cliquant sur le bouton ==>
	let elParent = document.getElementsByClassName('row')[1];
	// pointe l'élément parents des cards == row
	//console.log(elParent.children.length);

	elParent.insertBefore(elParent.lastElementChild, elParent.children[0]);
	// va insérer le dernier élément de l'élémnet parent == dernière card, en premier
})


// Fontionnalité 8

console.log("Fonctionnalité 8: clique sur le bouton gris <==!")

let greyBtn2 = document.getElementsByClassName('btn-primary')[0];
// on cible le bouton <==

greyBtn2.addEventListener("click", function cardLeft(event){
// en cliquant sur le bouton <==
  event.preventDefault();
  // on inactive le lien vers THP
  let elParent = document.getElementsByClassName("row")[1];
  // pointe l'élément parents des cards == row

  let elParentLength = elParent.children.length;
  // détermination de la longueur de l'élément parent row pour déterminer la dernière position de l'élément parents
  //console.log(familyLength); == 6
  

  elParent.insertBefore(elParent.firstElementChild, elParent.children[(elParentLength)])
  // va prendre le 1er élément de l'élément parent, et le mettre en dernier
});



