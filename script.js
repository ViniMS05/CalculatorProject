/* 
const numberOne = document.querySelector('#number1')
const numberTwo = document.querySelector('#number2')

const result = document.querySelector('#result')

const buttonSum = document.querySelector('#sum')
const buttonSub = document.querySelector('#sub')
const buttonMulti = document.querySelector('#multi')
const buttonDiv = document.querySelector('#div') 
*/

sum.onclick = () => {
    let newCalc = Number(number1.value) + Number(number2.value)
    return result.textContent = `Resultado: ${newCalc}`
}

sub.onclick = () => {
    let newCalc = Number(number1.value) - Number(number2.value)
    return result.textContent = `Resultado: ${newCalc}`
}

multi.onclick = () => {
    let newCalc = Number(number1.value) * Number(number2.value)
    return result.textContent = `Resultado: ${newCalc}`
}

div.onclick = () => {
    let newCalc = Number(number1.value) / Number(number2.value)
    return result.textContent = `Resultado: ${newCalc}`
}
