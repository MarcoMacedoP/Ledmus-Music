'use strict'
let phone = '5213323397485'
let form =  document.getElementById('contact')
if(form){
    form.addEventListener('submit', e => {
        e.preventDefault()
        let data=[
            name = document.querySelector('#name'),
            email = document.querySelector('#email'),
            msg = document.querySelector('#msg')
        ]

        let camposValidos = validarCampos(data)
        console.log(camposValidos)
        if(camposValidos === 3){
            //Hola mi nombre es {var} y mi correo es {var}
            // y te envie el siguiente mesnaje desde tu pagina web: {var}
            let name= data[0].value
            let email = data[1].value
            let message = data[2].value

            let msg = "¡Hola!%20Mi%20nombre%20es%20"+name+"%20y%20mi%20correo%20electronico%20"
            +email+"%20y%20te%20envie%20el%20siguiente%20mensaje%20desde%20tu%20página%20web:%20"
            +message
            form.setAttribute('action', 'https://api.whatsapp.com/send?phone='+phone+'&text='+msg)
            form.submit()
        }

    })
}
function validarCampos(campos){
    var camposValidos = 0;
    for(let i=0; i<campos.length; i++){
        if (campos[i].value=="" || campos[i].value==null){
            campos[i].style.borderColor = "red"
            campos[i].setAttribute('placeholder', 'Este campo está vacío') 
            campos[i].style.color = "red"
            campos[i].addEventListener('click', ()=>{
                campos[i].style.color = ''
                campos[i].style.borderColor = ''      
            })
        }
        else{
            camposValidos++ //contamos los campos validos
        }
    }
    return camposValidos
}