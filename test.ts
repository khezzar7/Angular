let firstname="Naim";
let memeprenom : string = 'Naim';
//js
var tableau = ['test','Naim',23,27];

//ts
let array1: (string|number)[]=['test','Naim',23,27];

//Tuple
let tableaunew: [string,number]= ['Naim',25]

function recupeId(id:number){
    return id;
}
//recupId(3);//ok


class Student{
    nom: string;
    email:string;
    age:number;

    constructor(nom:string,email:string,age:number){
        this.nom = nom;
        this.email = email;
        this.age = age;
    }
}