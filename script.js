// Fonctionnalité 1 

console.log("Lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot 'clique' en console.")

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

