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
    var tab = new Array(x);

    for (var i=0;i<tab.length;i++)
        {
    tab[i]=i*i;
        }
    alert(tab);
        }
    function boucle2(){

    var longueur=parseInt(prompt('Quelle est la longueur souhaitée du tableau?'));
    var tab= new Array();

    for (var i=0;i<longueur;i++)
        {
    tab[i]=i*i;
        }
    alert(tab);
}

//-----Exo6-----\\

var tab = [-2,1,4];
function soustrait(x){
    x = prompt("Rentrez la valeur à soustraire");
    if (x>=0) return (x-2); 
    else return "Nombre négatif !";
}
function affiche3(){
    alert(soustrait(tab[0]));
    alert(soustrait(tab[tab.length-1]));
}

//-----Exo7-----\\

function jourDeLaSemaine(){
    var aujourdhui= new Date; 
    jour=aujourdhui.getDay(); 
    var jourFrancais ;
    switch(jour){
        case 0 : jourFrancais="dimanche";
        break;

        case 1 : jourFrancais="lundi";
        break; 

        case 2 : jourFrancais="mardi";
        break;

        case 3 : jourFrancais="mercredi";
        break; 

        case 4 : jourFrancais="jeudi";
        break;

        case 5 : jourFrancais="vendredi";
        break;

        case 6 : jourFrancais="samedi";
        break;

        default: jourFrancais="jour inexistant";
        break; 
    } 
    alert("Nous sommes "+jourFrancais+".");
    
}

//-----Exo10-----\\

function MouseRollover(MyImage){
    MyImage.src = "Dio.jpg";
}
function MouseOut(MyImage){
    MyImage.src = "Maxence.jpg";
}

//-----Exo11-----\\

function modif_paragraphe(){
    getElementById
}

