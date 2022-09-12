<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="style.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Calculatrice</title>
    </head>
  
    <body>
        <div id="bloc_page">
            <header>
                <div id="titre_principal">
                </div>
    <center>
   <br>
   <br>
    <h1 class="text-danger"> Calculatrice</h1> <br>
        <form name="calculatrice" method="post" action="">
            <p>nombre1: <br> <input name="nombre1" type="text" ></p>
            <select name="choix">
        <option value="addition">+</option>
        <option value="soustraction">-</option>
        <option value="division">/</option>
        <option value="multiplication">*</option>
    </select>
            <p> <br> nombre2: <br> <input name="nombre2" type="text" ></p>
    </br>
    <?php
if(isset($_POST['nombre1']) AND isset($_POST['choix']) AND isset($_POST['nombre2'])) 
{
    $nombre1 =htmlspecialchars($_POST['nombre1']); 
    $choix = htmlspecialchars($_POST['choix']);
    $nombre2 = htmlspecialchars($_POST['nombre2']);
 
    if($nombre1 != NULL AND $nombre2 != NULL) 
    {
        if($choix == 'division' AND $nombre2 == 0)
        {
            echo 'On peut pas diviser par 0 voyons !';
        }
        else
        {  
            switch($choix){

            case'addition' :
                $resultat = $nombre1 + $nombre2;
                echo ' <h5> La somme de ces deux nombres est ' .$resultat . "</h5>";
            break;
            case'soustraction':
                $resultat = $nombre1 - $nombre2; 
                echo ' <h5> La différence de ces deux nombres est ' .$resultat . "</h5>"; 
            break;
            
            case'multiplication':
                $resultat = $nombre1 * $nombre2;
                echo ' <h5> Le produit de ces deux nombres est ' .$resultat . "</h5>";
            break;

            case'division':
                $resultat = $nombre1 / $nombre2;
                echo ' <h5> Le quotient de ces deux nombres est ' .$resultat . "</h5>";
            break;
        
            default:
            echo ' ';            

            }
            header("refresh: 5");
            
        }
    }
    else 
    {
    echo 'Veuillez renseigner tous les champs.';
    }
}
?>
<br> <br>
        <button class="btn btn-danger" type="submit" value="calculer"> Calculer </button>
        <button class="btn btn-danger" type="reset" value="effacer"> Effacer <br></button>
        </center>
        </form>
</div>
 
</body>
</html>