// // Chat Simulator

// const firstNameOne = "Stella";
// const firstNameTwo = "Marcus";

// const stateOne = "Très bien";
// const stateTwo = "Plutôt bien oui";

// const hour = 11;
// const day = "mardi";

// console.log(firstNameOne + " :Bonjour !");
// console.log(firstNameTwo + " :Bonjour " + firstNameOne + " ! Comment vas-tu?");
// console.log(firstNameOne + " : " + stateOne + ", et toi?");
// console.log(firstNameTwo + " : " + stateTwo + ", je te remercie.");
// console.log(firstNameOne + " : Quelle heure est-il ?");
// console.log(firstNameTwo + " : Il est " + hour + " heures.");
// console.log(firstNameOne + " : Dacc, merci.");
// console.log(firstNameTwo + " : Où manges-tu aujourd’hui ?");
// console.log(firstNameOne + " :  Je rentre chez moi comme tous les " + day + "s");
// console.log(firstNameTwo + " : Dacc.");


// //International Majority

// age = 23

// if(age < 21){
//     console.log("Vous êtes mineur");
// } else{
//     console.log("Hey ! Vous êtes majeur !");
// }


// //Digital Comparator
// const num1 = 23;
// const num2 = 26;
// const num3 = "23";

// if(num1 === num2 && num2 === num3){
//     console.log("Les trois variables sont identiques.");
// } else if(num1 == num2 || num2 == num3 || num1 == num3){
//     console.log("Deux des variables sont de valeurs égales");
// } else{
//     console.log("Les trois variables sont différentes.");
// }


// //By Two

// for(let i=1; i <= 3; i++){
//     console.log(i * 2);
// }
// for(let i=1; i <= 5; i++){
//     console.log(i * 2);
// }


// //Even or Odd

// for(let i=0; i<= 10; i+= 2){
//     console.log(i);
// }

// for(let i=1; i<= 15; i+= 2){
//     console.log(i);
// }


// // Mario Pyramid

// // Déclaration de fonction
// let numberOfFloors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu?");
// //nb est un argument ou un paramètre dans la fonction et correspond à une variable qui n'a pas encore de donnée.
// function pyramid(nb) {
//     for (let i = 1; i <= nb; i++) {
//         console.log(" ".repeat(nb - i) + "#".repeat(i));
//     };
// }

// //Execution de la fonction
// pyramid(numberOfFloors);
// pyramid(7);
// pyramid(10);


// //Happy birthday

// let birthDate = prompt("Quel jour est votre anniversaire?")

// function birthday (date, birthDate) {
//     if(date === birthDate) {
//        console.log("Joyeux anniversaire ! Tu obtiens une promotion de 30% sur tous les articles !"); 
//     } else {
//         console.log("En ce moment, une promotion de 15% sur tous les articles");
//     }
// }

// birthday();

// function Verif() {
//     var anniv = document.getElementById("anniv").value
//     console.log(anniv);

//     let date = new Date();
//     let jour = date.getDate();
//     let month = date.getMonth();
//     let année = date.getFullYear();
//     let mois = month + 1; 
//     let mois1 = undefined;

//     if(mois <=10){
//         mois1 = "0"+mois;
        
//     } else {
//         mois1 = mois;
       
//     }

//     let jour1 = undefined;

//     if(jour < 10){
//         jour1 = "0"+jour;
        
//     } else {
//         jour1 = mois;
       
//     }

//     let today = année+"-"+mois1+"-"+jour1;

//     if(anniv == today){
//         alert("Moins 50 % sur le site grace a votre anniv");
//     } else if( anniv !== today) {
//        alert("Moins 10% sur le site");
//     } else {
//         alert("le programme na pas fonctionner");
//     }
// }

// //Factorial


// //Dogs array
// let dogs = ['Akita Inu', 'Bouvier bernois', 'Beagle'];
// dogs.push('Labrador', 'Husky')

// dogs.sort();
// console.log(dogs);

// let dog = [
//     Akita = {
//        race : dogs[0],
//          origin :  'Japon',
//     },
//     Bouvier = {
//         race : dogs[1],
//          origin :  'Suisse',
//     },

//     Beagle = {
//         race : dogs[2],
//          origin :  'Angleterre',
//     },

//     Labrador = {
//         race : dogs[3],
//          origin :  'Canada',
//     },

//     Husky = {
//         race : dogs[4],
//          origin :  'Sibérie'
//     }
// ]
    

// console.log(dog);


// //User object

// // let user = {
// //     firstName: 'Baptiste',
// //     lastName: 'Quint',
// //     fullName1: undefined,
// //     age: 15,
// //     majeur: undefined,

// //     //Méthodes
// //     fullName(){
// //         let fullN = this.firstName + ' ' + this.lastName ;
// //         console.log(fullN);
// //         this.fullName1 = fullN;
// //     }
// // }

// // function isMajor() {
// //     let years = user.age;
// //     let ans = undefined;
// //     if(years <= 17){
// //         ans = false;
// //     } else if (years >= 18){
// //         ans = true;
// //     }
// //     user.majeur = ans
// //     console.log(ans);
// //     console.log(user.majeur);
// //     console.log(user);
// // } 

// // user.fullName();
// // isMajor();



// let user = {
//     // Propriétés
//     firstName: 'Baptiste',
//     lastName: 'Quint',
//     age: 15,
//     majeur: undefined,
//     // Méthodes
//     fullName() {
//       return this.firstName +' '+ this.lastName;
//     },
//     isMajor() {
//         if (this.age <= 17){
//             return this.majeur = false;
//         } else {
//             return this.majeur = true;
//         }
//     }
//   }

//   console.log(user.fullName());
//   console.log(user.isMajor());


//   //Startup Book

// const entrepreneurs = [
//     { first: 'Steve', last: 'Jobs', year: 1955 },
//     { first: 'Oprah', last: 'Winfrey', year: 1954 },
//     { first: 'Bill', last: 'Gates', year: 1955 },
//     { first: 'Sheryl', last: 'Sandberg', year: 1969 },
//     { first: 'Mark', last: 'Zuckerberg', year: 1984 },
//     { first: 'Beyonce', last: 'Knowles', year: 1981 },
//     { first: 'Jeff', last: 'Bezos', year: 1964 },
//     { first: 'Diane', last: 'Hendricks', year: 1947 },
//     { first: 'Elon', last: 'Musk', year: 1971 },
//     { first: 'Marissa', last: 'Mayer', year: 1975 },
//     { first: 'Walt', last: 'Disney', year: 1901 },
//     { first: 'Larry', last: 'Page', year: 1973 },
//     { first: 'Jack', last: 'Dorsey', year: 1976 },
//     { first: 'Evan', last: 'Spiegel', year: 1990 },
//     { first: 'Brian', last: 'Chesky', year: 1981 },
//     { first: 'Travis', last: 'Kalanick', year: 1976 },
//     { first: 'Marc', last: 'Andreessen', year: 1971 },
//     { first: 'Peter', last: 'Thiel', year: 1967 }
//   ];

// //  entrepreneurs.forEach(year => console.log(year));

//  //console.log(entrepreneurs.every());
 
//  function agefilter(entrepreneurs){
    
//     if(entrepreneurs.year >=1970 && entrepreneurs.year <=1979){
//         console.log(entrepreneurs);
//     }
//     //  else {
//     //     console.log("Non");
//     // }
//  }
// // agefilter();

// entrepreneurs.forEach(agefilter);

//Library

//Copieur

//Eléments appelés avec le DOM
let originalText = document.querySelector('input.original');
let copyText = document.querySelector('input.copy');

// L'écouteur d'évènement doit être ajouté sur l'input car il déclenche l'action
originalText.addEventListener('input', function copyAnswer() {
   copyText.value = originalText.value;
});

//Tableau de calcul

//Communiquer avec les DOM pour obtenir l'input
let champsCalcul = document.querySelector('.nombre');
let nb = document.querySelector('.nb');
let square = document.querySelector('.square');
let cube = document.querySelector('.cube');

//Afficher le nombre entré dans l'input automatiquement dans la première case du tableau
champsCalcul.addEventListener('input', function() {
    nb.textContent = champsCalcul.value;
    //Faire le calcul au caré et au cube automatiquement et les afficher dans les autres cases du tableau
    square.textContent = champsCalcul.value * champsCalcul.value
    cube.textContent = champsCalcul.value * champsCalcul.value * champsCalcul.value
});

//Déplacement carré

//Eléments du DOM
let bouge = document.querySelector('button');
let carre = document.querySelector('.carre');

let counter = 0;
//au click le carré doit bouger dans un direction, puis dans une autre
bouge.addEventListener('click', function() {
    counter++;
    switch(counter) {
       case counter = 1:
            carre.style.right = "500px"; 
            break;
        case counter = 2:
            carre.style.top = "550px";
            break;
        case counter = 3:
            carre.style.left = "50px";
            break;
    }
        
    console.log(counter);
    
});


//Gallerie Photo

//importer les photos avec le DOM
let smallImages = document.querySelectorAll('.small');
let bigImages = document.querySelector('.big');

//Au clic sur une petite image elle devient grande dans la zone en face
smallImages.forEach(image => {
    image.addEventListener('click', displayImage);
});


function displayImage(event){
    bigImages.src = event.target.src;

    smallImages.forEach(image => {
        image.classList.remove('focus');
    });
    event.target.classList.add('focus');
}
    //lorsque l'on clique sur une petite image elle vient prendre la classe "present" et perd sa classe "hidden"
    //la photo afficher auparavant en grand prend la classe "hidden" et n'est donc plus visible
    //liseré rouge qui s'affiche quand on sélectionne la petite image
