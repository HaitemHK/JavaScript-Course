console.log(document.querySelector(`.name`))
//shows the directory touched

console.log(document.querySelector(`.name`).value)
//shows the value in that directory

document.querySelector(`.name`).value =`Haitem`
//changes the value in that directory
let a, b, c
function sum(){
    a = Number(document.querySelector(".n1").value)
    b = Number(document.querySelector(".n2").value)
    c = document.querySelector(".out").value = a + b
    if(c > 20){
        document.querySelector(".out").style.backgroundColor = "red"
    }
    else {
        document.querySelector(".out").style.backgroundColor = "green"
    };
};

var h = document.head
console.log(h) 
var bo = document.body
console.log(bo)


// the event listener method
function  minus(){
    a = Number(document.querySelector(".n1").value)
    b = Number(document.querySelector(".n2").value)
    c = document.querySelector(".out").value = a - b
}


document.querySelector(".minus").addEventListener("click", minus)


document.querySelector(".clicker").addEventListener("click",(e)=>{
                                                                    e.preventDefault //to prevent stuttering caused by <form> in html
                                                                    console.log("you clicked me")
                                                                    document.getElementById("display").textContent = "you clicked me"}
                                                                    )

let tries 
tries = 20
document.querySelector(".sub").addEventListener("click",sub)
document.querySelector(".sect").value = tries
function sub(){
    if(document.querySelector(".number").value>20 , document.querySelector(".number").value<1){
        tries = tries--
        document.querySelector(".sect").value = tries
    }    
}
