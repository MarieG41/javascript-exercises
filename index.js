// Chat Simulator

const firstNameOne = "Stella";
const firstNameTwo = "Marcus";

const stateOne = "Très bien";
const stateTwo = "Plutôt bien oui";

const hour = 11;
const day = "mardi";

console.log(firstNameOne + " :Bonjour !");
console.log(firstNameTwo + " :Bonjour " + firstNameOne + " ! Comment vas-tu?");
console.log(firstNameOne + " : " + stateOne + ", et toi?");
console.log(firstNameTwo + " : " + stateTwo + ", je te remercie.");
console.log(firstNameOne + " : Quelle heure est-il ?");
console.log(firstNameTwo + " : Il est " + hour + " heures.");
console.log(firstNameOne + " : Dacc, merci.");
console.log(firstNameTwo + " : Où manges-tu aujourd’hui ?");
console.log(firstNameOne + " :  Je rentre chez moi comme tous les " + day + "s");
console.log(firstNameTwo + " : Dacc.");


//International Majority

age = 23

if(age < 21){
    console.log("Vous êtes mineur");
} else{
    console.log("Hey ! Vous êtes majeur !");
}


//Digital Comparator
const num1 = 23;
const num2 = 26;
const num3 = "23";

if(num1 === num2 && num2 === num3){
    console.log("Les trois variables sont identiques.");
} else if(num1 == num2 || num2 == num3 || num1 == num3){
    console.log("Deux des variables sont de valeurs égales");
} else{
    console.log("Les trois variables sont différentes.");
}


//By Two

for(let i=1; i <= 3; i++){
    console.log(i * 2);
}
for(let i=1; i <= 5; i++){
    console.log(i * 2);
}


//Even or Odd

for(let i=0; i<= 10; i+= 2){
    console.log(i);
}

for(let i=1; i<= 15; i+= 2){
    console.log(i);
}


// Mario Pyramid

// Déclaration de fonction
let numberOfFloors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu?");
//nb est un argument ou un paramètre dans la fonction et correspond à une variable qui n'a pas encore de donnée.
function pyramid(nb) {
    for (let i = 1; i <= nb; i++) {
        console.log(" ".repeat(nb - i) + "#".repeat(i));
    };
}

//Execution de la fonction
pyramid(numberOfFloors);
pyramid(7);
pyramid(10);


//Happy birthday

let birthDate = prompt("Quel jour est votre anniversaire?")

function birthday (date, birthDate) {
    if(date === birthDate) {
       console.log("Joyeux anniversaire ! Tu obtiens une promotion de 30% sur tous les articles !"); 
    } else {
        console.log("En ce moment, une promotion de 15% sur tous les articles");
    }
}

birthday();

function Verif() {
    var anniv = document.getElementById("anniv").value
    console.log(anniv);

    let date = new Date();
    let jour = date.getDate();
    let month = date.getMonth();
    let année = date.getFullYear();
    let mois = month + 1; 
    let mois1 = undefined;

    if(mois <=10){
        mois1 = "0"+mois;
        
    } else {
        mois1 = mois;
       
    }

    let jour1 = undefined;

    if(jour < 10){
        jour1 = "0"+jour;
        
    } else {
        jour1 = mois;
       
    }

    let today = année+"-"+mois1+"-"+jour1;

    if(anniv == today){
        alert("Moins 50 % sur le site grace a votre anniv");
    } else if( anniv !== today) {
       alert("Moins 10% sur le site");
    } else {
        alert("le programme na pas fonctionner");
    }
}

//Factorial


//Dogs array
let dogs = ['Akita Inu', 'Bouvier bernois', 'Beagle'];
dogs.push('Labrador', 'Husky')

dogs.sort();
console.log(dogs);

let race = {
    
}

//User object