//navigating using the parent.childNodes

console.log(document.body.childNodes)
console.log(document.body.childNodes[3])
console.log(document.querySelector("ul").childNodes[1])


//returning the parent of the child

console.log(document.querySelector("li").parentNode)
console.log(document.querySelector("nav").parentNode)

//selecting using children method

console.log(document.querySelector("nav").firstChild) //returns the next text(space, new line, etc) rather than the tag
console.log(document.querySelector("ul").firstElementChild) //returns the tag right after

//selecting using siblings method

console.log(document.querySelector("nav").previousSibling)
console.log(document.querySelector("nav").previousElementSibling)
console.log(document.querySelector("h1").nextSibling)
console.log(document.querySelector("h1").nextElementSibling)
