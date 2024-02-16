//element creations

document.querySelector(".create-header-1").addEventListener("click",function(){
    const par = document.querySelector("body")
    const title = document.createElement("h1")
    title.innerHTML= "Here you go !!"
    title.style.backgroundColor="brown"
    title.style.color="white"
    par.append(title) //append creates items after
    // par.prepend.(title) creates items before
})
document.querySelector(".cr-inp1").addEventListener("click",function(){
    const parent = document.querySelector(".sect")
    const com = document.createElement("h4")
    com.innerHTML = "Say something nice"
    const placeholder = document.createElement("input")
    placeholder.classList.add("inp")
    placeholder.setAttribute("placeholder","go for it :)")
    placeholder.style.outline= "none"
    parent.append(com)
    parent.append(placeholder)
})


// element deletion

document.querySelector(".rem-button").addEventListener("click",function(){
    const rempar = document.querySelector("#rem-sect")
    const remcont = document.querySelector(".rem")
    rempar.remove(remcont)
})

// children method
document.querySelector(".remover").addEventListener("click",function(){
    const pere = document.querySelector(".section")
    const fille = document.querySelector(".file")
    document.querySelector(".file")
    pere.removeChild(fille)
})

// element replacing

// document.querySelector(".switch").addEventListener("click",function(){
//     const paren = document.querySelector(".section-2")
//     const  chil = document.querySelector(".move")
//     const replacedby  = document.querySelector(".rep-cont")
    
//     paren.replaceChild(".rep-cont",".move")

// })


document.querySelector(".crt-container").addEventListener("click",function(){
    const vcontainer = document.createElement("div")
    vcontainer.classList.add("container")
    vcontainer.classList.add("fl")
    document.body.append(vcontainer)
    //adding attributes(nameoftheAttribute,Value)
    vcontainer.setAttribute("id","vcont")
})