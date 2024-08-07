const glasses = document.getElementById('glasses')
let cupAdded = []
let maxCap = 2
const createTemplate = () => {
    
    
    for (let index = 0; index < 8; index++) {
        const template = `  <div id='${crypto.randomUUID()}' class='glass'><p>250</p><p>ml</p></div>`

        glasses.innerHTML +=  template
        
    }
    addListenerToGlasses()
}

const addListenerToGlasses = () => {

    const allGlasses = document.querySelectorAll('.glass')
    
    allGlasses.forEach(glass => {
        glass.addEventListener('click', () => {
            const id = glass.id
            remainingAmount(id)
        });
    });
}

const remainingAmount = (id) => {
     !cupAdded.includes(id) ? cupAdded.push(id) : deleteCup(id) //solution 1

    
     cupAdded.forEach(glass => {
        const elementId = document.getElementById(`${glass}`)
        
        elementId.classList.add('glassChosen')
     })
    //if(!cupAdded.includes(id) ) cupAdded.push(id)  //solution 2
    
    // if (cupAdded.includes(id)) {  //solution 3
        
    // }else{
    //     cupAdded.push(id)
    // }

    console.log(cupAdded);
}
const deleteCup = (id) => {
    const elementId = document.getElementById(`${id}`)
    elementId.classList.remove('glassChosen')
    cupAdded = cupAdded.filter(cup => cup !== id)
}
createTemplate()    
