// document.addEventListener("DOMContentLoaded",()=>{
//     console.log("loaded")
// })


// stagiaire = {
//     nom:"Hekki",
//     prenom:"Haitem",
//     age:"19",
//     branche:"DD",
//     se_presenter: function(){
//         return console.log(this.prenom+" "+this.nom)
//     }
// }
// stagiaire.se_presenter()


//                      CLASSES & OBJECTS:

//before ECMAscript6
// function Stagiaire(name,prenom,age,branche){
//     this.name = name
//     this.prenom = prenom
//     this.age = age
//     this.branche = branche
//     this.presenterVous = function(){
//         return console.log(stage2.prenom+" "+stage2.name)
//     }
// }
// const stage2 = new Stagiaire("Hekki","Haitem",19,"DD")
// stage2.presenterVous()

function Achat(id,lib,prix,qte){
    this.id = id,
    this.libellé =lib,
    this.prix = prix,
    this.quantité = qte,
    this.calcTVA =function(){
        return console.log(`TVA: ${this.prix*1/5*this.quantité}`)
    },
    this.prixTTC = function(){
        return console.log(`prix: ${this.prix+this.prix*1/5*this.quantité}`)
    }
}
const pc = new Achat(1,"ASUS",1900,1)
console.log(pc.libellé)
pc.calcTVA()
pc.prixTTC()

//after ECMAscript6
class Product{
    constructor(id,lib,prix,qte){
        this.id = id
        this.libellé = lib
        this.prix = prix
        this.quantité = qte
    }
    calcTVA(){
        return console.log(`TVA: ${this.prix*1/5}`)
    }
    prixEnTTC(){
        return console.log(`Prix: ${this.prix+this.prix*1/5}`)
    }

}
const achat1 = new Product(1,"Machine à Laver",2300,3)
console.log(achat1.libellé)
achat1.calcTVA()
achat1.prixEnTTC()

