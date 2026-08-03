let firstNumber = null;
let currentOperator = null;
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');
operators.forEach(operator => {
    operator.addEventListener("click", () =>{
        firstNumber = Number (display.value);
        currentOperator = operator.textContent;
        display.value ="";
     console.log(firstNumber);
     console.log(currentOperator);
    });
});
const display = document.querySelector("#display");
numbers.forEach(number => {
    number.addEventListener("click",() =>{
       display.value += number.textContent;
       console.log(number.textContent);
    });
});
const clear = document.querySelector(".clear");
    clear.addEventListener("click", () =>{
        display.value  ="";
        console.log(clear.textContent);
    });
equals.addEventListener("click", () =>{
    let secondNumber = Number(display.value);
    let result;
    if (currentOperator === "+"){
        result = firstNumber + secondNumber;
    }
    else if(currentOperator === "-"){
        result = firstNumber - secondNumber;
    }
    else if(currentOperator === "*"){
        result = firstNumber * secondNumber;
    }
    else {
        result = firstNumber / secondNumber;
    }
    display.value = result;
})
