let numberOne = document.querySelector('#number1')
let numberTwo = document.querySelector('#number2')

let result = document.querySelector('#result')

let buttonSum = document.querySelector('#sum')
let buttonSub = document.querySelector('#sub')
let buttonMulti = document.querySelector('#multi')
let buttonDiv = document.querySelector('#div')

buttonSum.onclick = () => {
    let newCalc = Number(numberOne.value) + Number(numberTwo.value)
    return result.textContent = `Resultado: ${newCalc}`
}

buttonSub.onclick = () => {
    let newCalc = Number(numberOne.value) - Number(numberTwo.value)
    return result.textContent = `Resultado: ${newCalc}`
}

buttonMulti.onclick = () => {
    let newCalc = Number(numberOne.value) * Number(numberTwo.value)
    return result.textContent = `Resultado: ${newCalc}`
}

buttonDiv.onclick = () => {
    let newCalc = Number(numberOne.value) / Number(numberTwo.value)
    return result.textContent = `Resultado: ${newCalc}`
}