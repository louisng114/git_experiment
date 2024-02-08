const userNumbers = document.getElementById("userNumbers");
let num0 = 0;
let num1 = 0;
let num2 = 0;
let num3 = 0;
const form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    generateMagicSquare();
})

function generateMagicSquare() {
    num0 = Number(userNumbers.elements[0].value);
    num1 = Number(userNumbers.elements[1].value);
    num2 = Number(userNumbers.elements[2].value);
    num3 = Number(userNumbers.elements[3].value);
    document.getElementById("cell01").innerHTML = num0 + num1 + num3;
    document.getElementById("cell02").innerHTML = num1 + num2;
    document.getElementById("cell03").innerHTML = num0 + num2 + num3;
    document.getElementById("cell10").innerHTML = num0 + num1 + num2;
    document.getElementById("cell11").innerHTML = num2 + num3;
    document.getElementById("cell12").innerHTML = num0;
    document.getElementById("cell13").innerHTML = num1 + num3;
    document.getElementById("cell20").innerHTML = num0 + num3;
    document.getElementById("cell21").innerHTML = num1;
    document.getElementById("cell22").innerHTML = num0 + num1 + num2 + num3;
    document.getElementById("cell23").innerHTML = num2;
    document.getElementById("cell30").innerHTML = num1 + num2 + num3;
    document.getElementById("cell31").innerHTML = num0 + num2;
    document.getElementById("cell32").innerHTML = num3;
    document.getElementById("cell33").innerHTML = num0 + num1;
    document.getElementById("magicsum").innerHTML = "Magic Sum = " + 2 * (num0 + num1 + num2 + num3);
}