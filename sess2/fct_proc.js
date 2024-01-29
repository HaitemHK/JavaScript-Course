//functions

function greet(){
    document.getElementById(`paragraph`).textContent = `Hellooooo!`;
}

greet()

function greetings(name){
    document.getElementById(`paragraph`).textContent = `Hellooooo! `+name;
}

greetings(`me`)


function sum(nOne,ntwo){
    console.log(`la somme de `+nOne+` et `+ntwo+` est: `+(nOne+ntwo))

}
sum(11,19)


function somm(nOne,ntwo){
    som = nOne + ntwo ;
    return console.log(som);
}
somm(11,19)

//variable scope


function stat(){
    let name = ""
    let age = 19
    let 
}