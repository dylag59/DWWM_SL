//DOM elements
let resultEl = document.getElementById('result')
let lengthEl = document.getElementById('length')
let numbersEl = document.getElementById('numbers')
let uppercaseEl = document.getElementById('uppercase')
let lowercaseEl= document.getElementById('lowercase')
let symbolsEl = document.getElementById('symbols')
let generateEl = document.getElementById('generate')


let randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol }

//Generate event listener
generateEl.addEventListener('click', () => {
    let length = +lengthEl.value
    let hasLower = lowercaseEl.checked
    let hasUpper = uppercaseEl.checked
    let hasNumber = numbersEl.checked
    let hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(
      hasLower, 
      hasUpper,
      hasNumber, 
      hasSymbol, 
      length) })

//Create password function
function generatePassword(lower, upper, number, symbol, length) {
  
    let generatedPassword = '' /*empty string*/
    let typesCount = lower + upper + number + symbol // i - pt counting
  //filter out unchecked boxes/types
    let typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]) //daca sunt false,sa nu le puna in parola - filter
    
    if(typesCount === 0) {  //daca nu sunt checked boxes
        return ''
    }
// loop over lenght call generator function every time
    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            let funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }
    return generatedPassword 
}


// Generate my functions - https://www.asciitable.com/
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    let symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

