let pass= document.querySelector("input.passowrd");
let user= document.querySelector("input.username");
let button =document.querySelector("button");
let mensajeError=document.querySelector("#mensajeError");

button.addEventListener("click",checkInput)

function checkInput(e){
    if(user.value==""||pass.value==""){
        e.preventDefault();
        mensajeError.textContent="Porfavor rellene todos los campos";
    } 
    if(user.value!=""&&pass.value!=""&&!/@/.test(user.value)){
        e.preventDefault();
        mensajeError.textContent="Falta el arroba en el usuario";
    }
}

    
