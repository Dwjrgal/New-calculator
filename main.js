//----------------- Calculator programm  --------------//

const numbersBtn = document.querySelectorAll(".numbers");
const inputValue = document.getElementsByTagName("button");
const display = document.getElementById("display");
const clearBtn = document.getElementById("clear");
const opBtns = document.getElementsByClassName("operators");
const equalBtn = document.getElementById("equal");

console.log(numbersBtn);
let operator = "";
let firstNum = 0;

// ----- Append to display -----/

for (let i = 0; i < numbersBtn.length; i++) {
  numbersBtn[i].addEventListener("click", (event) => {
    console.log("numbers clicked", event.target.textContent);
    display.value += event.target.textContent;
  });
}
for (let i = 0; i < opBtns.length; i++) {
  opBtns[i].addEventListener("click", function () {
    operator = numbersBtn[i].textContent;
    firstNum = display.textContent;
    display.textContent = "";
  });
}

equalBtn.addEventListener("click", function () {
  let res = 0;
  if (operator === "+") {
    res = Number(firstNum) + Number(display.textContent);
  } else if (operator === "-") {
    res = Number(firstNum) - Number(display.textContent);
  } else if (operator === "*") {
    res = Number(firstNum) * Number(display.textContent);
  } else if (operator === "/") {
    res = Number(firstNum) / Number(display.textContent);
  }
  display.textContent = res;
});

//------ Clear button ------//

clearBtn.addEventListener("click", function () {
  display.value = "";
});

//-------- Calculate ------//
