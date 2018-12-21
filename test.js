var prenom = "Naim";
var autreprenom = 'Naim';
//js
var tableau = ['test', 'Naim', 23, 27];
//ts
var array = ['test', 'Naim', 23, 27];
//Tuple
var tableau2 = ['Naim', 25];
function recupId(id) {
    return id;
}
recupId(3); //ok
var Eleve = /** @class */ (function () {
    function Eleve(nom, email, age) {
        this.nom = nom;
        this.email = email;
        this.age = age;
    }
    return Eleve;
}());
