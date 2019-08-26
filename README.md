
# **************** JS Events ****************

# https://developer.mozilla.org/fr/docs/Web/Events

Events

==> browser events

- load
- resize
- scroll

==> DOM events

- click
- drag
- move mouse around
- form

# 3 possibilités

==> Ajout d'attribut au tag HTML concerné

==> Event handlers

==> méthode addEventListener


# Ajout d'attribut au tag HTML concerné

Ex: 

	<button onclick="alert('coucou')">

# Event handlers

## cibler l'element à modifier

## dire ce qu'on veut faire

==> function

ex: menu déroulant sur menu

- button menu fermé quand on accède au site

		let menuBtn = document.querySelector(".menu-btn");

- selectionner la list du menu déroulant

		let menu = document.querySelector(".menu");

- dire si ce menu est ouvert ou pas

		menu.style.marginLeft = "-300px";
		# lorsqu'on arrive sur la page ou rafraichissement, le menu n'est pas déroulé

		let menuStatus = false;

		function menuToggle(){
			if (menuStatus == false){
				menu.style.marginLeft = "0px";
				menuStatus = true;
			}

			else if (menuStatus == true){
				menu.style.marginLeft = "-300px";
				menuStatus = false;
			}
		}

## Appliquer la function à l'élément pointé

- menu handler == applique la function à l'élément pointé

		menuBtn.onclick = menuToggle;
		# sans parenthèses

==> on peut mettre le onclick dans le html

		onclick="menuToggle()"


# méthode addEventListener

- def une variable

		var/let p1 = document.querySelelctor('p');

- addEventListener

		p1.addEventListener('click', changeText)

		'click' == nom d'événement
		changeText == nom de la fonction à éxecuter

		on ne met pas de parenthèse à l'appel de la fonction car on veut qu'elle se déclenche par l'utilisateur!!!!!!

- coder la fonction changeText

		changeText(){
			this.innerHTML = 'nouveau text';
			this.style.color = 'orange';
			.
			.
			.
		}


==> avantage == pouvoir lier plusieurs gestions événement de même type sur un élément html 

	ex: lier deux messages à un élément 

	var p1 = document.querySelector('p');

	p1.addEventListener('click', Message1);
	p1.addEventListener('click', Message2);

	function Message1(){
		alert('Premier message');
	}

	function Meaasge2(){
		alert('Deuxième message');
	}

==> pouvoir lier plusieurs gestions événement de plusieurs type sur un élément html 

ex: code lorsqu'un uti déplace sa souris (== event mousehover) sur l'élément et lorsqu'il clique (== mousedown)


	var p1 = document.querySelector('p');

	p1.addEventListener('mouseover', Fonction1);
	p1.addEventListener('mousedown', Fonction2);

	function Fonction1(){
		this.innerHtml = 'text';
		this.style.backgroundColor = 'color';
	}

	function Fonction2(){
		this.innerHTML = 'text';
		this.style.color = 'color';
		this.style.fontWeight = '';
		this.style.fontSize = '';
	}

==> pour réinitialiser les propriétés == comportement d'origine quand l'utilisateur sort du paragraphe

Coder méthode inverse de mouseover (== mouseout) et mousedown == (mouseup)

	var p1 = document.querySelector('p');

	p1.addEventListener('mouseover', Fonction1);
	p1.addEventListener('mouseout', Reset11);
	p1.addEventListener('mousedown', Fonction2);
	p1.addEventListener('mouseup', Reset2);

	function Reset1(){
		this.innerHtml = 'text origin';
		this.style.backgroundColor = 'aucune valeur';
	}

		function Reset2(){
		this.innerHTML = 'text origin';
		this.style.color = 'aucune valeur';
		this.style.fontWeight = 'aucune valeur';
		this.style.fontSize = 'aucune valeur';
	}


# Chaque écènement est lié à un objet Event 

Chaque évènement est lié à un objet Event qui peut être récupéré de la façon suivante :

    element.addEventListener(évènement, function(event){ ... }).

Cet objet permet de faire de nombreuses choses :

=> Obtenir de nombreuses informations auxiliaires sur l'évènement : son type event.type, sa cible event.target, etc.

=> Bloquer l'action par défaut que déclencherait l'événement avec event.preventDefault().

=> Selon l'évènement, on peut même avoir des informations très précises : quel bouton de souris a servi, où a eu lieu l'évènement, quelle touche a été appuyée...

Acessible uniquement lors du déclenchement de l'évènement

## Propriété target

==> retourne le type de l'élémént qui a déclenché l'événement

## Propriété currentTarget

==> retourne le type de l'élémént qui porte le gestionnaire de l'événement déclenché

ex:

	<html> 
	 <body>
		<h1 id='gros_titre'> Les évènements</h1>
		<div id='div1'>
			<p id='p1'> Qui est le déclencheur? Le porteur de l'événement?
			</p>
		</div>

	<script>
		var div1 = document.getElementById('div1');
		var p1 = document.getElementById('p1');

		div1.addEventListener('click', Message);

		fonction Message(event){
										// # argument sert de référence à l'objet event
			this.innerHTML = 'Element déclencheur:' + event.target + '<br> Elément portant l\'événement:' + event.currentTarget;
								// # \ == echap l'apostrophe
		}

	</script>
	</body>
	</html>	

## Propriété type

==> type de l'évènement ajouté

ex:

	<html> 
	 <body>
		<h1 id='gros_titre'> Les évènements</h1>
		<div id='div1'>
			<p id='p1'> Qui est le déclencheur? Le porteur de l'événement?
			</p>
		</div>

	<script>
		var div1 = document.getElementById('div1');
		var p1 = document.getElementById('p1');

		div1.addEventListener('click', Message);

		fonction Message(event){
			this.innerHTML = 'Type de l'événement déclenché:' + event.type;
		}

	</script>
	</body>
	</html>	

Retourne: 'click'

## Empecher l'évènements de se propager == stopPropagation

	<html> 
	 <body>
		<h1 id='gros_titre'> Les évènements</h1>
		<div id='div1'>
			<p id='p1'> Qui est le déclencheur? Le porteur de l'événement?
			</p>
		</div>

	<script>
		var div1 = document.getElementById('div1');
		var p1 = document.getElementById('p1');

		div1.addEventListener('click', TextD, true);
		p1.addEventListener('click', TexteP, true);

		fonction TextD(e){
			alert('Stop à la propagation');
			e.stopPropagation();
			# empêche la propagation == empêche d'aller jusqu'à l'événement du paragraphe == le 'click' s'arrête à div1
		}

		fonction TextP(){
			alert('Ceci ne s\'affichera pas');
		}

	</script>
	</body>
	</html>	

## Empêcher l'événement sur un événement ciblé == preventDefault (sans argument)

ex:

	<html> 
	 <body>
		<h1 id='gros_titre'> Les évènements</h1>
		<div id='div1'>
			<p id='p1'> Qui est le déclencheur? Le porteur de l'événement?
			</p>
		</div>

	<script>
		var div1 = document.getElementById('div1');
		var p1 = document.getElementById('p1');

		div1.addEventListener('click', TextD, true);
		p1.addEventListener('click', TexteP, true);

		fonction TextD(e){
			e.preventDefault();
			# quand on clique == rien
		}

		fonction TextP(){
			alert('La méthode preventDefault n\'empêche pas le paragraphe);
			# on peut cliquer sur le para
		}

	</script>
	</body>
	</html>	


# Intérêt

==> méthode preventDefault et stopPropagation == formulaire: empêcher la propagation du formulaire si pas compléter

# Autre Ex

## changement de text en cliquant sur un button

==> Adding an event listener

	<button id="clicker">Boring button</button>
	# le button à un id

	    <script>

	    // 1. Find and store the element we want to listen to events on.

	    var clickerButton = document.getElementById("clicker");

	    // 2. Define the function that will respond to the event == eventListener ou callback

	    var onButtonClick = function() {
	        clickerButton.textContent = "Oh wow, you clicked me!";
	    };

	    // 3. Add the event listener for the element and function

	    clickerButton.addEventListener("click", onButtonClick);
	    															# prend deux argument: l'élément pointé, la fonction qu'on lui applique 

	    //4. Anonymous function == quand on ne rappelle pas la fonction définit, mais quand on la crée dans les arguments

	    clickerButton.addEventListener("click", function() {
	        clickerButton.textContent = "Oh wow, you clicked me!";
	    });


## dessiner une barbe sur une changement image

	   <script>
    // 1. Find and store the element we want to listen to events on.
    var face = document.getElementById("face");

    // 2. Define the function that will respond to the event.

    var onMouseMove = function(event) {
        console.log(event);
        document.getElementById("message").textContent += "mooove ";         var beard = document.createElement("div");
        beard.className = "beard";
        document.body.appendChild(beard);
        beard.style.top = event.clientY + "px";
        beard.style.left = event.clientX + "px";
        
    };

    // 3. Add the event listener for the element and function

    face.addEventListener("mousemove", onMouseMove);
    </script>