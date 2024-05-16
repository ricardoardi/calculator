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
