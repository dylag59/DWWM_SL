window.onload = () => {
    let button = document.querySelector("#btn");
  
    // Fonction de calcul de l’IMC
    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {
  
    /* Obtention de l’entrée de l’utilisateur dans la variable de hauteur.
    L’entrée est une chaîne, donc la typographie est nécessaire. */
    let height = parseInt(document
            .querySelector("#height").value);
  
/* Obtenir l’entrée de l’utilisateur dans la variable de poids. 
    L’entrée est une chaîne, donc la typographie est nécessaire.*/
    let weight = parseInt(document
            .querySelector("#weight").value);
  
    let result = document.querySelector("#result");
  
    // Vérification de l’utilisateur fournissant une valeur ou non
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Fournissez une hauteur valide!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Fournissez un poids valide!";
  
    //Si les deux entrées sont valides, calculez l’IMC
        else {
  
    // Fixation jusqu’à 2 décimales
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
    // Diviser selon les conditions de l’IMC
        if (bmi < 18.5) result.innerHTML =
            `Souspoids : <span>${bmi}</span>`;
  
        else if (bmi >= 18 && bmi < 25) 
            result.innerHTML = 
                `Normal : <span>${bmi}</span>`;
  
        else result.innerHTML =
            `Surpoids : <span>${bmi}</span>`;
    }
}