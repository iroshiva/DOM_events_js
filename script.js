// Fonctionnalité 1 

console.log("Fonctionnalité 1: lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot 'clique' en console.")

var foot = document.getElementsByTagName('footer')[0];
// on pointe le footer par TagName
// ATTENTION: sort un array de tout les Tags footer
// Comme il n'y en a qu'un: on sélection le footer à l'index 0

// OU
//var foot = document.querySelector('footer');
// va directement chercher le tag footer, comme il n'y en a qu'un

foot.addEventListener('click', function clickConsole(){
// quand l'utilisateur clique sur le footer
	console.log("Clique");
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

console.log("Fonctionnalité 2: acitvation de hamburger menu: clique sur le hamburger bouton et le menu apparaîtrera!")



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

console.log("Fonctionnalité 3: clique sur edit de la première card, son texte se mettra en rouge")

// pointer le bouton edit de la première card
let editBtn = document.getElementsByClassName('btn-outline-secondary')[0];

console.log(editBtn);

// pointer le text de la première card
let textCard = document.getElementsByClassName('card-text')[0];

console.log(textCard);

// fonction qui dit:" Quand tu click sur editBtn, textCard se met en rouge"
editBtn.addEventListener('click', function redText() {
	textCard.style.color = 'red';
})


// Fonctionnalité 4

console.log("Fonctionnalité 4: clique sur le bouton 'Edit' de la deuxième card, le texte de la card va se mettre en vert. Si tu re-clique dessus, il redevient comme avant !")

// pointer le bouton edit de la deuxième card
let editBtn2 = document.getElementsByClassName('btn-outline-secondary')[1];

console.log(editBtn2);

// pointer le texte de la deuxième card
let textCard2 = document.getElementsByClassName('card-text')[1];
console.log(textCard2);

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

console.log("Double_clique sur la navbar!")

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


console.log("Passe et repasse avec ta souris sur les boutons views de chaque card!")


// pointer le bouton view de chaque card
let viewBtns = document.getElementsByClassName('btn-success');

// pointer le text de la card
let textCards = document.getElementsByClassName('card-text');

let imgCards = document.getElementsByClassName('card-img-top');


for(let i = 0; i < viewBtns.length; i ++){

	let viewStatus = true;
	// à mettre dans la boucle!!!!

	viewBtns[i].addEventListener('mouseover', function viewOver() {
		// pour chaque bouton view

		if(viewStatus == true){
			textCards[i].style.display = 'none';
			// permet de ne pas effacer le texte
			imgCards[i].style.width = '20%';
			// réduction de la taille de l'image
			viewStatus = false;
			// passe à false
		}
		else if(viewStatus == false){
			textCards[i].style.display = 'block';
			// permet d'afficher à nouveau le texte
			imgCards[i].style.width = '100%';
			// l'image retrouve sa taille initiale
			viewStatus = true;
			// passe à true == situation initiale
		}	
	})
}


// Fonctionnalité 7

console.log("si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !")

// pointer le bouton gris
let greyBtn = document.getElementsByClassName('btn-secondary')[0];

greyBtn.addEventListener('click', function replaceCard() {
	let elParent = document.getElementsByClassName('row')[1];
	elParent.insertBefore(elParent.lastElementChild, elParent.childNodes[0]);
})





