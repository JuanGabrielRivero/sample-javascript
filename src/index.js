const btnRollDice = document.getElementById("rollDice");
const btnRollDice2 = document.getElementById("rollDice2");
const imgDice = document.getElementById("imgDice")

let array = ["./assets/dice-1.svg",
    "./assets/dice-2.svg",
    "./assets/dice-3.svg",
    "./assets/dice-4.svg",
    "./assets/dice-5.svg",
    "./assets/dice-6.svg"
];



btnRollDice.addEventListener("click", rollDice);
btnRollDice2.addEventListener("click", rollDice2);


function rollDice() {
    const dice = document.getElementById("dice")
    const diceNumber = Math.floor(Math.random() * (7 - 1) + 1);
    dice.textContent = diceNumber;
    imgDice.src = document.getElementById("imgDice").src = `./assets/dice-${diceNumber - 1}.svg`

}

function rollDice2() {
    const dice2 = document.getElementById("dice2")
    const diceNumber2 = Math.floor(Math.random() * (7 - 1) + 1);
    dice2.textContent = diceNumber2;
    imgDice.src = document.getElementById("imgDice").src = array[diceNumber2 - 1]

}


