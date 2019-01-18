alert ("Coucou l'homoncule heureux");
var prenom = prompt("Entre ton Prénom:");
var nom = prompt("Entre ton Nom");
alert ("Bonjour " + prenom + " " + nom);
alert ("ça devellope sec hein?");

var nombre = prompt ("Entre un nombre entre 1 et 10 stp")
if (nombre >10 || nombre <1) {
	alert ("retourne en primaire fdp")
}
else {
	if (nombre == 5) {
		alert ("GG tu es très intelligent")
	}
	else {
		if (nombre < 5) {
			alert ("Ton nombre est inférieur à 5")
		}	
		else {
			alert ("Ton nombre est supérieur à 5")
		}
	}
}

alert ("entre 2 nombres pour les diviser");
var nombre1 = Number(prompt("Entre le numérateur"));
var nombre2 = Number(prompt("Entre le dénominateur"));
alert (nombre1 / nombre2)


var nombre1 = Number(prompt("Entre le premier nombre"));
var nombre2 = Number(prompt("Entre le deuxième nombre"));
var addition = somme(nombre1,nombre2);
alert (addition);

function somme (a,b) {
return (a+b);
}
while (addition<10) {
var nombre1 = Number(prompt("Entre le premier nombre"));
var nombre2 = Number(prompt("Entre le deuxième nombre"));
var addition = somme(nombre1,nombre2);
alert (addition);
}

var notesThibault = Array(4,2,12,5,20);
alert(notesThibault[4]);
// permet de compter les elements du tableau
alert(notesThibault.length);
for (var i = Things.length - 1; i >=0; i--) {
	Things[i]
}

for (i=0; i<notesThibault.lenght; i++)
	console.log(notesThibault[i])
