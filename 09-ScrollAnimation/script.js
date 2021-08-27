/*selecciona los objetos de la clase box en el documento 
Y lo guarda en la constante Boxes*/
const boxes = document.querySelectorAll('.box')
/*En el objeto window recibe el evento cuando el usuario hace scroll*/
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    
    console.log(window.innerHeight / 5 * 4)
    

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}