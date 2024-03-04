let randstring = "abcdefghijklmnopqrstuvwxyz"
let sent = "this is a sentence"
console.log(randstring.length)
console.log(randstring.charAt(3)) //takes an index and returns the char at the adequate index
console.log(randstring.substring(1,9)) // excludes the last index
console.log(randstring.toUpperCase())
console.log(randstring.toLowerCase())
console.log(randstring.indexOf("j"))
console.log(randstring.startsWith("a"))
console.log(randstring.endsWith("z"))
console.log(Array.from(randstring))//take a str and turns it into an array
console.log(sent.split(" "))// puts the elements of a str into an array following the separator between every element