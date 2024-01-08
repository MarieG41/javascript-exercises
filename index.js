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
const num2 = 23;
const num3 = 23;

if(num1 === num2 && num2 === num3){
    console.log("Les trois variables sont identiques.");
} else if(num1 == num2 && num2 == num3 && num1 == num3){
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