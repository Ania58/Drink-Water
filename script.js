const glasses = document.getElementById('glasses')
const litersLeft = document.getElementById('liters')
const fill = document.getElementById('fill')

let cupAdded = []
let maxCap = 2
const percentages = ['12.5','25','37,5','50','62.5','75','87.5','100']
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
            updateNumber();
        });
    });
}

const remainingAmount = (id) => {
     !cupAdded.includes(id) ? cupAdded.push(id) : deleteCup(id) //solution 1

    fill.innerHTML = percentages[cupAdded.length - 1] + '%'
    //fill.style.height = percentages[cupAdded.length - 1] + '%'
     cupAdded.forEach(glass => {
        const elementId = document.getElementById(`${glass}`)
        
        elementId.classList.add('glassChosen')
     })
     

    //if(!cupAdded.includes(id) ) cupAdded.push(id)  //solution 2
    
    // if (cupAdded.includes(id)) {  //solution 3
        
    // }else{
    //     cupAdded.push(id)
    // }

    
}
const deleteCup = (id) => {
    const elementId = document.getElementById(`${id}`)
    elementId.classList.remove('glassChosen')
    cupAdded = cupAdded.filter(cup => cup !== id)
}


const allTheGlassesDrunk = () => {
    return cupAdded.length * 0.25;
}


const glassesYouStillNeed = () => {
    const totalDrunk = allTheGlassesDrunk(); 
    const subtract = maxCap - totalDrunk;
    return subtract;   
}

const updateNumber = () => {
    
    const remaining = glassesYouStillNeed();
    // console.log("Total consumed: " + totalConsumed + " ml");
    // console.log("Remaining: " + remaining + " ml");

    litersLeft.textContent = `${remaining}L`
}

createTemplate()    
