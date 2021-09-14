

const buttons = document.querySelectorAll('.button')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        
        let x = e.clientX - e.target.offsetLeft -60;
        let y = e.clientY - e.target.offsetTop -20;

        //revisar 
        console.log(x,y);

        const buttonTop = e.target.offsetTop 
        const buttonLeft = e.target.offsetLeft 

        console.log(buttonTop,buttonLeft);

        let xInside = x - buttonLeft
        let yInside = y - buttonTop

        //console.log(xInside,yInside);

        let ripples = document.createElement('span');
        ripples.style.left = x +'px'
        ripples.style.top = y +'px'
        this.appendChild(ripples)
        
        setTimeout(() => {ripples.remove()},1000);
        
        
    })
})

var name ="john"
