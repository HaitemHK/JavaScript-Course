// document.querySelector(".key").addEventListener("keydown",function(){
//     console.log("key down")
// })
// document.querySelector(".key").addEventListener("keyup",function(){
//     console.log("key up")
// })
// document.querySelector(".key").addEventListener("keypress",function(){
//     console.log("key pressed")
// })

// document.querySelector(".key").addEventListener("key",function(event){
//     if(event.keyCode === 13){
//         console.log("you've hit the ENTER button")
//     }
// })
    // console.log(`key=${event.key},code=${event.code}`)
// document.querySelector(".key").addEventListener("keyup",function(event){
//     if(event.keyCode === 13){
//         console.log("you've hit the ENTER button")
        
//     }
//     // console.log(`key=${event.key},code=${event.code}`)
// })
// let parent = document.querySelector(".key")
// document.querySelector(".key").addEventListener("keypress",function(event){
//     if(event.keyCode === 48){
//         console.log(`you have pressed ${event.key}`)
//         parent.style.color = "red"
//     }
// })

 document.querySelector(".sub").addEventListener("click", function(e){
    e.preventDefault()
    let mail = document.querySelector("#email")
    let usern = document.querySelector("#user")
    let email_val = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(usern.value.length<=0){
        usern.classList.add("error")
        document.querySelector(".is_hidden").innerText = "username cannot be null"
        document.querySelector(".is_hidden").style.display = "block"
    }
    else{
        usern.classList.add("success")
    }
    if(mail.value.match(email_val)){
        mail.classList.add("success")
    }
})
