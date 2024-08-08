const glasses = document.getElementById('glasses')
let cupAdded = []
let maxCap = 2
const litersLeft = document.getElementById('liters')

console.log(litersLeft)

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
            remainingAmount(id);
            updateConsole();
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


const allTheGlassesDrunk = () => {
    return cupAdded.length * 0.25;
}


const glassesYouStillNeed = (maxCap) => {
    const totalDrunk = allTheGlassesDrunk();
    const subtract = maxCap - totalDrunk;
    return subtract;   
}

const updateConsole = () => {
    const totalConsumed = allTheGlassesDrunk();
    const remaining = glassesYouStillNeed(maxCap);
    console.log("Total consumed: " + totalConsumed + " ml");
    console.log("Remaining: " + remaining + " ml");

    litersLeft.textContent = `${remaining}`
}

createTemplate()    
