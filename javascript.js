//-----Exo1-----\\

function surfaceRectangle(){
    var largeur;
    var longueur;
    largeur = prompt("Rentrez la longueur du rectangle");
    longueur = prompt("Rentrez la largeur du rectangle");
    alert("Le périmètre vaut "+2*(Number(longueur)+Number(largeur)));
    alert("La surface du rectangle est " +longueur*largeur);
    }

//-----Exo2-----\\

function aireCercle(){
    var rayon = parseInt(prompt("Rentrez un rayon"));
    alert("Le périmètre du cercle est" + ( Math.PI * (rayon*2)));
    alert("L'aire du cercle est" + ( Math.PI * (rayon*rayon)));
}

//-----Exo3-----\\

var a = 3;
var b = 2;
    
function multiplie(x=8){
    return 3*x;
}
function affiche(){
    alert(multiplie(a));
    alert(multiplie(b));
}

//-----Exo4-----\\
var tab = [-2,1,4];
function additionne(x){
    return (2+x);
}
function affiche2(){
    alert(additionne(tab[0]));
    alert(additionne(tab[tab.length-1]));
}

//-----Exo5-----\\

function boucle(){
    
}