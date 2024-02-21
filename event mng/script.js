let listform
let obj
listform = []
while(true){
    document.querySelector(".aj").addEventListener("click", function(e){
        e.preventDefault()
        obj = {"name": document.querySelector("#name").value,
            "lastname":document.querySelector("#Lname").value,
            "age":document.querySelector("#age").value}
        document.querySelector("#name").value = null
        document.querySelector("#Lname").value= null
        document.querySelector("#age" ).value = null 
        listform.push(obj)
            
    })

    console.log(listform)}