/*selecciona los objetos de la clase box en el documento 
Y lo guarda en la constante Boxes*/
const boxes = document.querySelectorAll('.box')
/*En el objeto window recibe el evento cuando el usuario hace scroll*/
console.log(boxes)
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    // la constatne trigger bottom guarda el valor de avance de 4/5 del la altura de la ventana interna//
    const triggerBottom = (window.innerHeight / 5) * 4
    
    console.log((window.innerHeight / 5) * 4)
    
    // toma cada elemento del array y lo recorre cguardandolo en la const boxtop//
    boxes.forEach(box => {
        //del elemento box extrae el valor top(y) en pixels en relacion con el (0,0) del viewport//
        const boxTop = box.getBoundingClientRect().y
        //si la variable boxTop es menor que 4/5 que el height del inner window entonces añade el string "show" a la clase que llama al estilo de box show del CSS moviendo box a la posiscion 0 en x/ 
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}