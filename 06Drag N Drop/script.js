// la constante fill es traida como un objeto a javascript seccionando la clase fill//
const fill = document.querySelector('.fill')
// la constante fill es traida como un objeto a javascript seccionando la clase empty//
const empties = document.querySelectorAll('.empty')
/*la constante fill se le añade el metodo addEventListener
 y entre parentesis prometo inicia el pàrametro de la funcion 
 cuando el elemento fill empiece a ser arrastrad(dragstart),inicia la funcion dragStart.*/
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd )

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}


function dragStart() {
/*añade hold al nombre de la clase del elemento arrastrado, en este caso .fill
a la clase hold se le aplican los estilos CSS de hold*/ 
    this.className += ' hold'
    setTimeout(()=> this.className ='invisible', 0)
}

function dragEnd() {
    this.className = 'fill'
}
/*esto evita que el elemento se devuelva a la posicion default*/
function dragOver(e) {
    e.preventDefault()
}
/*Esto funcion hace que el elemento arrastrado*/
function dragEnter(e) {
    e.preventDefault()
    this.className = 'empty'
}
/*cambia el nombre del contenedor de donde se inicio el arrastre de la imagen a empty*/
function dragLeave() {
    this.className ='empty'
}
/*añade el elemento contenedor .fill en econtenedor empty en el que es soltado el elemento arrastrado*/ 
function dragDrop() {
    this.className ='empty'
    this.append(fill)
}
