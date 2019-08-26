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


//

