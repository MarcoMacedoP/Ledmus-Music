'use strict';
let whatsapp =  document.getElementById('whatsapp_icon')
let messenger = document.getElementById('messenger_icon')

if(whatsapp){
    whatsapp.setAttribute('href', 'https://api.whatsapp.com/send?phone=5213323397485&text=Hola%20me%20interesa%20contratar%20un%20paquete%20de%20Lemus%20Music%20para%20un%20evento.%20😀')
}
if(messenger){
    messenger.setAttribute('href', 'https://m.me/musicallemus')
}