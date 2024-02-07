let annee = `2024` // str
// to convert this to a number 
annee = Number(annee)
console.log(annee,typeof(annee))


// the other way around
annee = String(annee)
console.log(annee,typeof(annee))

// or we can use the function " =+ " for strings(output)
annee =+ annee
console.log(annee,typeof(annee))


//and the function ".toString" for numbers(output)
annee = annee.toString()
console.log(annee,typeof(annee))

//for dates 
console.log(vday = new Date())
console.log(vday.getDate())
console.log(vday.getDay())
console.log(vday.getMonth())
console.log(vday.getFullYear())
console.log(vday.getMinutes())
console.log(vday.getHours())

