<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Variable</title>

</head>
<body>
    <center>
        <br> <br>
        <h1 class="text-success"> La Multiplication</h1>

    <form action="" method="POST">
        <br>
        <input type="text" name="n1" placeholder="Choix de la table">
        <input type="text" name="n2" placeholder="Nombres de lignes"> </br> </br>
        <?php
        
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $n1 = $_POST["n1"];
    $n2 = $_POST["n2"];

    if(!isset($n1) || !is_numeric($n1)){
        die("Entrez un nombre");
    }
    if(!isset($n2) || !is_numeric($n2)){
        die("Entrez un nombre");
    }
   
    print "<div><h3>";
    for($i=1;$i<=$n2;$i++){
        print $n1 . " x " . $i. " = " . $n1*$i ."<br/>"; 
    }
    print "</div></h3>";
}
header("refresh: 5");
?>
</br> <button  type="submit"class="btn btn-success" value="calculer">Calculer</button>
        <button type="reset" class="btn btn-success" value="effacer" > Effacer </button><br>
    </center>
    </form>
</body>
</html>

