/*
por Tag: getElementByTagName()

oor Id: getElementById

por Nome: getElementsByName()

por Classe: getElementsByClassName()

por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome")

let email = document.querySelector("#email")

let assunto = document.querySelector("#assunto")

let mapa = document.querySelector("#mapa")

// campo de verificação
let nomeOK= false
let emailOK= false
let assuntoOK=false
// fim de campo verificação

nome.style.width="100%"

email.style.width="100%"

assunto.style.width = "100%"

function validaNome(){
let txt = document.querySelector("#txtnome")
    if(nome.value.length <= 3) {
        txt.innerHTML = 'nome invalido'
        txt.style.color = 'red'
    }
    else{
        txt.innerHTML = "Nome valido"
        txt.style.color = 'green'
        nomeOK = true
    }
    
}

function validaEmail(){

    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexof("@") || email.value.indexof(".com") == -1)
    {
        txtEmail.innerHTML = 'E-mail invalido'
        txtEmail.style.color = 'red'
    }
    else {
        txtEmail.innerHTML = "Email valido"
        txtEmail.style.color = 'green'
        emailOK = true
    }
}

function validaAssunto(){

let txtAssunto= document.querySelector('#txtAssunto')

 if(assunto.value.length >= 100){

    txtAssunto.innerHTML = 'mais de 100 caracteres não é valido '
    txtAssunto.style.color = 'red'
    txtAssunto.style.display = 'block'
 }else{
    txtAssunto.style.display = "none"
    assuntoOK = true
 }
 }


function Enviar(){
    if(nomeOK == true && emailOK == true && assuntoOK == true){

        alert("formulario valido")
    }
    else{
        alert("Formulario errado ou incompleto")
    }

}

function mapaZoom(){
   mapa.style.width = "500px"
   mapa.style.height = "300px"
}
function mapaNormal(){
   mapa.style.width = "400px"
   mapa.style.height = "200px"
}