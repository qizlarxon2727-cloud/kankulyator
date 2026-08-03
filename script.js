let firstNumber = null;
let currentOperator = null;
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');
operators.forEach(operator => {
    operator.addEventListener("click", () =>{
        if(display.value === "Xato"){
            display.value = "0";
        }
        if(display.value !==""){
           firstNumber = Number (display.value);
        }
       
        currentOperator = operator.textContent;
        display.value ="";
    });
});
const display = document.querySelector("#display");
numbers.forEach(number => {
    number.addEventListener("click",() =>{
       if(display.value === "Xato"){
        display.value = "";
       }
       display.value += number.textContent;
    });
});
const clear = document.querySelector(".clear");
    clear.addEventListener("click", () =>{
        display.value  ="";
        
    });
equals.addEventListener("click", () =>{
     if(currentOperator === null){
        return;
    }
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
    
    else if(currentOperator === "/"){
        if(secondNumber === 0){
            result = "Xato";
        }
        else{
            result = firstNumber / secondNumber;
        }
    }
    display.value = result;
    currentOperator = null;
});
decimal.addEventListener("click", () =>{
    if(!display.value.includes(".")){
        display.value += ".";
    }
})
