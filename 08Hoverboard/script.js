const container = document.getElementById('container')
const colors = ['#00ffff', '#FF00FF', '#FFFF00', '#00FF00', '#ff0000','#0000FF']
const SQUARES = 1000
/////Creacion de cuadrados con for///
for(let i = 0; i < SQUARES;i++ ) {
    const square = document.createElement('div')
////Añade la clase 'square' al div creado cargando las propiedades de la clase desde CSS//
    square.classList.add('square')
////llama ala función set color cuando al elemento square cuando (el evento) el mouse por encima /// 
     square.addEventListener('mouseover', () => setColor(square))
////llama ala función remove color cuando al elemento square cuando (el evento) el mouse por encima ///
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

////// la funcion escoge un Background-color al azar para el elemento square//////////
function setColor(element) {
   const color = getRandomColor();
   element.style.background = color;
/// crea una sombra "resplandor del cuadrado" cuando evento se dispara
    element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#1d1d1d'
   /// retira la sombra "resplandor del cuadrado" cuando evento se dispara
   element.style.boxShadow = '0 0 2px #000'
}

////// la funcion escoge un Background-color al azar para el elemento square//////////
function getRandomColor() {
/// Math.floor redondea un numero dado al entero menor//
/// Math.random escoge un numero entre [0,1) al azar///
/// el return devuelve del array colors , un color elegido al azar del arreglo///
return colors[Math.floor(Math.random() * colors.length)]
}
