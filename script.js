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
const del = document.querySelector(".delete")

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
    rules(),
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
    rules(),
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
    rules(),
    display.textContent+="-"
})
zero.addEventListener("click",()=>{
    display.textContent+="0"
})
clear.addEventListener("click",()=>{
    display.textContent=""
})
tambah.addEventListener("click",()=>{
    rules(),
    display.textContent+="+"
})
equal.addEventListener("click",()=>{
    intialize();
})

decimal.addEventListener("click",()=>{
    display.textContent+="."
    
})

del.addEventListener("click",()=>{
    display.textContent=display.textContent.slice(0,-1);
})


const alat = "+-x/";

function rules(){
    if(!display.textContent){
        display.textContent="0";
    }
    let correction = display.textContent.split("")
    if(alat.includes(correction[correction.length-1])){
        display.textContent=display.textContent.slice(0,-1)
    }
}

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


function intialize(){
    let arr = display.textContent.split('')
    const operator = arr.filter((tanda)=>alat.includes(tanda)).join("")
    const operatorIndex = arr.indexOf(operator)
    const firstNumber = parseFloat(arr.slice(0,operatorIndex).join(""));
    const lastNumber = parseFloat(arr.slice(operatorIndex+1,arr.length).join(""));
    operate(operator,firstNumber,lastNumber);

}

function operate(operator,firstNumber,lastNumber){
    let result;
    switch(operator){
        case "+":
            result = add(firstNumber,lastNumber)
            break;
        case "-":
            result = subtract(firstNumber,lastNumber)
            break;
        case "x":
            result = multiply(firstNumber,lastNumber)
            break;
        case "/":
            result = divide(firstNumber,lastNumber)
            break;
    }

    display.textContent=result;
}

