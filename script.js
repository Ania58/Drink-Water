const glasses = document.getElementById('glasses')
const litersLeft = document.getElementById('liters')
const fillCup = document.getElementById('fill-cup')
const fill = document.getElementById('fill')

let cupAdded = []
let maxCap = 2
const percentages = ['12.5','25','37,5','50','62.5','75','87.5','100']
//const height = [39]

const createTemplate = () => {
    
    for (let index = 0; index < 8; index++) {
        const template = `  <div id='${crypto.randomUUID()}' class='glass'><p>250</p><p>ml</p></div>`

        glasses.innerHTML +=  template
        
    }
    addListenerToGlasses()
}

const addListenerToGlasses = () => {

    const allGlasses = document.querySelectorAll('.glass') // all element with class .glass
    
    allGlasses.forEach(glass => {
        glass.addEventListener('click', () => { //adding listener
            const id = glass.id // extracting id from each element
            remainingAmount(id); // id in every loop
            updateNumber(); // this function update number 
            
        });
    });
}

const remainingAmount = (id) => {
     !cupAdded.includes(id) ? cupAdded.push(id) : deleteCup(id) //solution 1

    fill.innerHTML = cupAdded.length > 0 ? percentages[cupAdded.length - 1] + '%' : '' 
    
    fill.style.height = cupAdded.length * 39 + 'px'
    
    cupAdded.length >= 8 ? fillCup.style.height = 0 : fillCup.style.height = 0 

    cupAdded.length === 0 ? fill.classList.add('hidden') : fill.classList.remove('hidden')
     
    cupAdded.forEach(id => {
        const elementId = document.getElementById(`${id}`)
        
        elementId.classList.add('glassChosen')
     })
     

    //if(!cupAdded.includes(id) ) cupAdded.push(id)  //solution 2
    
    // if (cupAdded.includes(id)) {  //solution 3
        
    // }else{
    //     cupAdded.push(id)
    // }

    
}
const deleteCup = (id) => {
    const elementId = document.getElementById(`${id}`) // getting ID
    elementId.classList.remove('glassChosen') // if it exists, it removes class 
    cupAdded = cupAdded.filter(glass => glass !== id) // it returns all the ID different from the ID received as an argument 
}


const allTheGlassesDrunk = () => {
    return cupAdded.length * 0.25;
}


const glassesYouStillNeed = () => {
    const totalDrunk = allTheGlassesDrunk(); //allTheGlassesDrunk returns amount in mililiters
    const subtract = maxCap - totalDrunk; // subtract max cap which is a global variable(2liters) 
    return subtract;  //return subtracted number.
}

const updateNumber = () => {
    
    const remaining = glassesYouStillNeed(); // invokes  glassesYouStillNeed which returns a number :(
    // console.log("Total consumed: " + totalConsumed + " ml");
    // console.log("Remaining: " + remaining + " ml");

    litersLeft.textContent = `${remaining}L` // it changes the amount update
}

createTemplate()    
