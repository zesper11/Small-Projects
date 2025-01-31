let multiplyNum = 10;
let multiplyLength = 10;
let multiply;

for (let i = 1; i < multiplyLength + 1; i++) {
    multiply = multiplyNum * i;
   let pElement = document.createElement("P");
   pElement.textContent = `${multiplyNum} X ${i} = ${multiply}`;
   document.querySelector(".result").appendChild(pElement);
}