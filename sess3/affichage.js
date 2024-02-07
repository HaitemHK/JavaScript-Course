document.write(`yes / no`)
// window.alert(`alert`)
console.log(`this is it `)

// primitive types
console.log(typeof(3))
console.log(typeof(`true`))
console.log(typeof(undefined))
console.log(typeof(null))

// structural base type
console.log(Object(4) instanceof Number)
console.log(Object(`true`) instanceof String)
let notes
notes = [1,3,5]
notes.push(7)
console.log((notes))


let etudiant = {
    id  : 1 ,
    name :`lmardi hichem`

}

let cetud = etudiant;
cetud.age = 23
console.log(etudiant,cetud)

// to avoid reference problems
let note =[1,2,3]
let cnote = [].concat(note)
note.push(4)
console.log(note)
console.log(cnote)


// spread operator isolates an array/object and copies its values only

let liste =[10,20,30]
let clist = [...liste]
console.log(liste,clist)

// another method
let clist2 = Object.assign(age=14,liste) 

let st ={
    id:1,
    name:`bro`
}
cst = {...st, age:20,sit:`validé`}

console.log(st,cst)