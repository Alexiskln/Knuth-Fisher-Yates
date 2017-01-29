var carteune = []
var cartedeux = []
var cartetrois = []
var BOURSEINI = 400;

window.onload = function(){
	document.getElementById("bourse").innerHTML = BOURSEINI;
}

function createCards(){
	carteune.push("roi de coeur");
	carteune.push("roi de trêfle");
	carteune.push("roi de pique");
	carteune.push("roi de carreaux");
	cartedeux.push("dame de coeur");
	cartedeux.push("dame de trêfle");
	cartedeux.push("dame de pique");
	cartedeux.push("dame de carreaux");
	cartetrois.push("valet de coeur");
	cartetrois.push("valet de trêfle");
	cartetrois.push("valet de pique");
	cartetrois.push("valet de carreaux");
}

function main() {
	createCards();
	start();
}

function start(){
	
	scarteune = shuffle(carteune);
    scartedeux = shuffle(cartedeux);
    scartetrois = shuffle(cartetrois);
	
	var rmise = parseInt(document.getElementById("mise").value);
	var rbourse = parseInt(document.getElementById("bourse").innerHTML);
	
	displaycards();
	
	if(rmise <= rbourse && rmise > 0){
		rbourse = rbourse - rmise
		document.getElementById("bourse").innerHTML = rbourse;
	}else{
		alert("You don't have enough money !")
	}
	
	
	var red = ["carreaux", "coeur"];
	var black = ["trêfle", "pique"];
	var all = ["carreaux", "coeur", "trêfle", "pique"]
	var win = 0;
	
	
	for(i = 0; i < all.length - 1; i++){
		if (scarteune[0].endsWith(all[i]) && scartedeux[0].endsWith(all[i]) && scartetrois[0].endsWith(all[i])){
			win += 1;
			document.getElementById("bourse").innerHTML = rbourse + rmise * 2
			alert("Gewinn : "  + rmise * 2);
			
		}
	}
		
	if (win != 1){
		
	
		for(i = 0; i < red.length - 1; i++){
			if((scarteune[0].endsWith(red[i]) || scarteune[0].endsWith(red[i + 1])) && (scartedeux[0].endsWith(red[i]) || scartedeux[0].endsWith(red[i + 1])) && (scartetrois[0].endsWith(red[i]) || scartetrois[0].endsWith(red[i + 1]))){
				document.getElementById("bourse").innerHTML = rbourse + rmise
				alert("Gewinn : "  + rmise);
				break;
			}
		}
	
		for(i = 0; i < black.length - 1; i++){
			if((scarteune[0].endsWith(black[i]) || scarteune[0].endsWith(black[i + 1])) && (scartedeux[0].endsWith(black[i]) || scartedeux[0].endsWith(black[i + 1])) && (scartetrois[0].endsWith(black[i]) || scartetrois[0].endsWith(black[i + 1]))){
				document.getElementById("bourse").innerHTML = rbourse + rmise
				alert("Gewinn : "  + rmise);
				break;
			}	
		}
	}	
}
function displaycards(){

	var carte1display = scarteune[0] + ".png";
	var carte2display = scartedeux[0] + ".png";
	var carte3display = scartetrois[0] + ".png";
	
	document.getElementById("cartes").innerHTML = "";
	document.getElementById("cartes").innerHTML += "<img src='IMG/" + carte1display + "' alt='Carte une'>";
	document.getElementById("cartes").innerHTML += "<img src='IMG/" + carte2display + "' alt='Carte deux'>";
	document.getElementById("cartes").innerHTML += "<img src='IMG/" + carte3display + "' alt='Carte trois'>";
	
}

function game(){
	
}

function shuffle(array) {
  var copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    copy.push(array.splice(i, 1)[0]);
  }

  return copy;
}
