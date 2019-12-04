function isSymbol(value) {
   return ['/', '*', '-', '+',].indexOf(value) !==-1
}
function getLastChar () {
    return screen.innerHTML.substr(-1)
}

function addToScreen(value) {
    if (!isStarted) {
        if (!isSymbol(value))
            screen.innerHTML = null
        isStarted = true
    }

    if (isSymbol(getLastChar()) && isSymbol(value)) {
        deleteToScreen()
    }
    
    // screen.innerHTML = value + screen.innerHTML   
    screen.innerHTML += value 
}

function deleteToScreen(lenght = -1) {
    screen.innerHTML = screen.innerHTML.slice(0, lenght)
    if (!screen.innerHTML) {
        screen.innerHTML = 0
        isStarted = false
    }
}






const screen = document.getElementById('screen')
const buttons = document.querySelectorAll('.btn')

let isStarted = false //statut démarrer ou pas calculatrice est à 0

buttons.forEach(element => {
    element.addEventListener('click', function(){
       console.log(getLastChar()) 
        let value = this.textContent
        if (value === 'CE') {
            deleteToScreen()
        } else if (value === '=') {
            const result = eval(screen.innerHTML)
            screen.innerHTML = eval(screen.innerHTML)
        } else {
            addToScreen(value)
        }
        
    })
})



        