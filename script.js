let a = 0;
let b = 0;
let operator = "";
operatorTrigger = false;
addToB = false;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

function disNum() {
  let numButtons = document.querySelectorAll(".display-num");

  numButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let display = document.querySelector(".screen");

      if (display.textContent === "0") {
        display.textContent = "";
      }

      if (operatorTrigger) {
        display.textContent = "";
        operatorTrigger = false;
      }

      if (addToB) {
        if (display.textContent.length < 21) {
          display.textContent += button.textContent;
          b = parseFloat(display.textContent);
          console.log(b);
        } else {
          alert("Max number of digits reached");
        }
      } else {
        if (display.textContent.length < 21) {
          display.textContent += button.textContent;
          a = parseFloat(display.textContent);
          console.log(a);
        } else {
          alert("Max number of digits reached");
        }
      }
    });
  });
}

disNum();

let operators = document.querySelectorAll(".operator-btn");

operators.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", () => {
    if (addToB && b !== 0) {
      a = operate(operator, a, b);
      b = 0;
      console.log("Total: " + a);
    }
    operator = operatorBtn.textContent;
    console.log(operator);
    operatorTrigger = true;

    addToB = true;
  });
});

let equals = document.querySelector(".equal-btn");
equals.addEventListener("click", () => {
  let display = document.querySelector(".screen");
  display.textContent = operate(operator, a, b);
  a = parseFloat(display.textContent);
  b = 0;
  console.log(a);
});

let clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", () => {
  let display = document.querySelector(".screen");
  display.textContent = "0";
  a = 0;
  b = 0;
  operator = "";
  operatorTrigger = false;
  addToB = false;
});

let ceBtn = document.querySelector(".ce-btn");
ceBtn.addEventListener("click", () => {
  let display = document.querySelector(".screen");
  display.textContent = display.textContent.slice(0, -1);
  if (display.textContent === "") {
    display.textContent = "0";
  }
  if (addToB) {
    b = parseFloat(display.textContent);
  } else {
    a = parseFloat(display.textContent);
  }
});
