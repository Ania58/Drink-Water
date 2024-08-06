const glasses = document.getElementById('glasses')





const createTemplate = () => {
    const template = `  <div id='${crypto.randomUUID()}' class='glass'><p>250</p><p>ml</p></div>`
    for (let index = 0; index < 8; index++) {
        
        glasses.innerHTML +=  template
        
    }
}

createTemplate()    

document.querySelectorAll('.glass').forEach(glass => {
    glass.addEventListener('click', () => {
        console.log(glass.className);
    });
});