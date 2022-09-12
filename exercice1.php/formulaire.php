<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <title>Formulaire</title>
</head>
<body>
    <center>
        <br> <br>
<h1 class="text-primary">Calcul prix TTC</h1> <br>
    <form method="POST" action="">
        Prix HT: <input type="number" name="prix" placeholder="Entrez le prix HT"></br></br>
        TVA: <input type="number" name="tva" placeholder="Entrez la TVA"></br></br>
        <?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $prix= $_POST ["prix"];
    $tva = $_POST["tva"];

    if(!isset($prix)){
        die("S'il vous plaît entrez un prix");
    }
    if (!isset($tva)) {
        die("S'il vous plaît entrez le taux de tva");}

    print " <p> Pour une TVA a  $tva% votre prix TTC est " .($prix+(($prix*$tva)/100)) . " euros </p> ";
   
    }
?>
</br> </br>
        <button class="btn btn-primary" type="submit">Envoyer</button>
        <input  class="btn btn-primary" type="Reset"
        </center>
        </form>
        
</html>