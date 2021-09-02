// it takes the tags "label" and save it in a variable" //
const labels = document.querySelectorAll('.form-control label')
console.log(labels)
// the function walks each elemnt label //  
labels.forEach(label => {
// the function walks each elemnt label //  
    label.innerHTML = label.innerText
    .split('')
    .map((letter, index) => `<span style ="transition-delay:${index*50}ms">${letter}</span>`)
    .join('');
})