//Calculatrice

//Elements du DOM
const form = document.querySelector('form');

//Récupérer les données
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //faire le calcul
        let input1 = Number(e.target.firstNb.value);
        let input2 = Number(e.target.secondNb.value);
        let operator = e.target.number.value;

        function doCalcul(result) {
            result = input1 + operator + input2;
            console.log(result);
            //renvoyer les résultats dans une alerte qui s'affichera dès que l'on clique sur le bouton "Calculer".
            if (operator == "+") {
                alert(input1 + "+" + input2 + "=" + (input1 + input2));
            } else if (operator == "-") {
                alert(input1 + "-" + input2 + "=" + (input1 - input2));
            } else if (operator == "*") {
                alert(input1 + "*" + input2 + "=" + (input1 * input2)); 
            } else {
                alert(input1 + "/" + input2 + "=" + (input1 / input2));
            }
        }
    doCalcul();
    console.log(doCalcul());
}) 
