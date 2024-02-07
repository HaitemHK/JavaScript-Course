// funtion declaration
function greet (){
    document.getElementById(`head`).textContent = `hello`
}

greet()

function sum(a,b){
    return document.getElementById(`para`).textContent = a+b
}
sum(2,11)

// function expressions
 let timestable = function(x,y){
    return x*y
 }

let NxF = timestable(9,5)
console.log(NxF)

// arrow functions w/out args
let greetings = () => {
    return console.log(`welcome to js`)
};
greetings()

//  another method (only for one line)
let greeting = () => console.log(`welcome to JavaScript`)

greeting()

// arrow functions with args
let fullname = (name,surname) => {
    let fname = name+` `+surname 
    return fname
}
console.log(fullname(`haitem`,`hekki`))

// lambda expressions
    // Map(returns a new array)
const days = ["lundi","mardi","mercrudi","jeudi","vendredi","samedi","dimanche"]
let i = 0
days.map( (item) =>{
    if(item===`jeudi`){
        item = `jeudi* (jour férier)`
    }
    return console.log(item)
})

console.log(days) // explains how "map" returns a new array

// applying the one line method
//days.map((item) => console.log(item))

const stagiaires = [
{nom:`hekki`, prenom:`haitem`, age:20},
{nom:`ait taleb`, prenom:`nadir`, age:19},
{nom:`sidiyane`, prenom:`mohamed`, age:20},
{nom:`elidrissi`, prenom:`aymen`, age:18}
];

let nomstagiaires;

nomstagiaires = stagiaires.map((obj) => {
    entirename = obj[`nom`]+` `+obj[`prenom`]
    return entirename
});

//  console.log(stagiaires)
//  console.log(nomstagiaires)
//[a,b,c,d]
let name_age 
name_age =  stagiaires.map((items,indexes) =>{  
    let r1 = "20 ans ou plus"
    let r2 = "moins de 20"
    let rem
    let st
    if (items.age>= 20) {
        st = {...items, branche :"DD105", id : (indexes+1), remarque:r1}
    } else if(items.age< 20) {
        st = {...items, branche :"DD105", id : (indexes+1), remarque:r2}
    }
    
    return st

})

console.log(name_age)
