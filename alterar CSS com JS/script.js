// pegando o Valor de uma propriedade css
const container = document.getElementById('container')
const containerStyle = window.getComputedStyle(container)
const color = containerStyle.getPropertyValue('background-Color') //retorna em rgb

//alterando o CSS 
if(color == 'rgb(138, 43, 226)'){

    container.style.cssText=
    'background-color: orange;'+
    'margin:auto;'+
    'text-align:center;'+
    'display:flex;'+
    'justify-content:center;'+
    'font-size:1.3em;'+
    'padding:5px;'
}