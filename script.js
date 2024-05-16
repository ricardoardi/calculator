const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")
const bagi = document.querySelector(".divide")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const kali = document.querySelector(".multiply")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const kurang = document.querySelector(".subtract")
const zero = document.querySelector(".zero")
const clear = document.querySelector(".clear")
const tambah = document.querySelector(".add")
const equal = document.querySelector(".equal")
const display = document.querySelector(".display")
const decimal = document.querySelector(".decimal")

seven.addEventListener("click",()=>{
    display.textContent+="7"
})
eight.addEventListener("click",()=>{
    display.textContent+="8"
})
nine.addEventListener("click",()=>{
    display.textContent+="9"
})
bagi.addEventListener("click",()=>{
    display.textContent+="/"
})
four.addEventListener("click",()=>{
    display.textContent+="4"
})
five.addEventListener("click",()=>{
    display.textContent+="5"
})
six.addEventListener("click",()=>{
    display.textContent+="6"
})
kali.addEventListener("click",()=>{
    display.textContent+="x"
})
one.addEventListener("click",()=>{
    display.textContent+="1"
})
two.addEventListener("click",()=>{
    display.textContent+="2"
})
three.addEventListener("click",()=>{
    display.textContent+="3"
})
kurang.addEventListener("click",()=>{
    display.textContent+="-"
})
zero.addEventListener("click",()=>{
    display.textContent+="0"
})
clear.addEventListener("click",()=>{
    display.textContent=""
})
tambah.addEventListener("click",()=>{
    display.textContent+="+"
})
equal.addEventListener("click",()=>{
    display.textContent+="="
})

decimal.addEventListener("click",()=>{
    display.textContent+="."
})

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}


let firstNumber = a;
let operator = operator;
let lastNumber = b;

function operate(operator,firstNumber,lastNumber){
    let result;
    switch(operator){
        case "+":
            result = add(firstNumber,lastNumber)
            break;
        case "-":
            result = subtract(firstNumber,lastNumber)
            break;
        case "*":
            result = multiply(firstNumber,lastNumber)
            break;
        case "/":
            result = divide(firstNumber,lastNumber)
            break;
    }
}
