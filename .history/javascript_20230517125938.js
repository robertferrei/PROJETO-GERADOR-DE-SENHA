let sliderElement =document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

let containerPassword = document.querySelector("#container-password")

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!'
let novaSenha = ""

sizePassword.innerHTML = sliderElement.value

slider.oninput = function(){
    sizePassword.innerHTML = this.value //mudar o valor do caract
}

function generatePassword(){
    let pass = ""

    for(let i = 0, n =charset.length; i <sliderElement.value; ++i){ //mostra sua senha aleatoria
pass += charset.charAt(Math.floor(Math.random()* n))
    }
    containerPassword.classList.remove("hide")
    password.innerHTML = pass
   novaSenha= pass
}


 
function copyPassword(){
     
    navigator.clipboard.writeText(novaSenha)
    
  }
   




 
 