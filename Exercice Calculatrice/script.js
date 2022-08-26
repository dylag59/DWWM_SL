const divResultat = document.querySelector("#resultat");
const divTouche = document.querySelector("#touches");
const divRecap = document.querySelector("#recap");

let chiffreSaisie = "";
let operateur = "+";

//cette variable va servir aux recap des opérations
let recap = "";
let resultat = 0;
let nbCalcul = 0;
let reinit = true;

divTouche.addEventListener("click", function(event){
    //1-Quand on clique une touche on récupère l'identifiant
    let button = event.target.id;

    if(button.substring(0,1) === "c"){
        //2-Ici on récupère le deuxième caractère
        chiffreSaisie += button.substring(1,2);

        //3-ici on veut que quand on sélectionne une touche, ça s'affiche dans la div grise
        divResultat.value = chiffreSaisie;

        //4-ici on gère le cas où on appuie sur les autres boutons
        //On teste que la deuxième lettre
    }else if(button.substring(0,1) === "b"){
        //5-Cette fonction gère les opérations
        managerOperation();

        //6-suivant le bouton appuyé, il va falloir choisir l'opérateur
        switch(button){
            case "btnPlus" : operateur = "+";
            break;
            case "btnSous" : operateur = "-";
            break;
            case "btnMul" : operateur = "*";
            break;
            case "btnDiv" : operateur = "/";
            break;
            default:
            break;
        }
        if(reinit){
            recap = "";
            reinit = false;
        }
        if(nbCalcul > 1) recap += "<br />";
        //7-On récupère le chiffre saisi auquel on va rajouter l'opérateur
        recap += resultat + " " + operateur + " ";
        //9-Ici on gère le point
    }else if(button === "point"){
        chiffreSaisie += ".";
        //10-Ici on gère le " = "
    }else if(button === "egal"){
        managerOperation();
        recap += " = " + resultat;
        nbCalcul = 1;
        reinit = true;

    }
    //8-On met dans cette divRecap(div orange), le recap
    divRecap.innerHTML = recap;
    divRecap.scrollTop = divRecap.scrollHeight - divRecap.clientHeight;
});

//11-Fonction qui va permettre le calcul, l'objectif de cette fonction est de renseigner un résultat
function managerOperation(){
    if(chiffreSaisie !== ""){
        resultat = doOperation(operateur, resultat, parseFloat(chiffreSaisie));
        if(nbCalcul > 0){
            recap += parseFloat(chiffreSaisie);
        }
        
        divResultat.value = resultat;
        //12-on réinitialise le chiffre saisi
        chiffreSaisie = "";
        nbCalcul++;
    }else{
        let position = recap.lastIndexOf("<br />");
        recap = recap.substring(0,position);
    }

}

function doOperation(operateur, chiffreA, chiffreB){
    let res = 0;
    switch(operateur){
        case "+": res = chiffreA + chiffreB;
        break;

        case "-": res = chiffreA - chiffreB;
        break;

        case "*": res = chiffreA * chiffreB;
        break;
      
        case "/": res = chiffreA / chiffreB;
        break;
    }
    return res;
}
