document.addEventListener('DOMContentLoaded', function () {
    let finalTotal = 0;
    let diceResults = [];
    let total = 0;
    let modTotal = 0;

    function roll(sides) {
        return Math.floor(Math.random() * sides) + 1;
}
    function updateFinalTotal() {
        const finalTotal = total + modTotal;
        document.querySelector('.final-result-box .result p').textContent = finalTotal;
    }

    function toggleButton(button) {

        const modifierName = button.dataset.modifier;
        const modifierInput = document.getElementById(modifierName);
        const modifierValue = parseInt(modifierInput.value) || 0;

        if (button.classList.contains('active')) {
            button.classList.remove('active');
            button.classList.add('inactive');
            modTotal -= modifierValue;
        } else {
            button.classList.remove('inactive');
            button.classList.add('active');
            modTotal += modifierValue;
        }
        updateFinalTotal();
    }

    function rollDice() {
        total = 0;
let numD4 = parseInt(document.getElementById("d4").value) || 0;
let numD6 = parseInt(document.getElementById("d6").value) || 0;
let numD8 = parseInt(document.getElementById("d8").value) || 0;
let numD10 = parseInt(document.getElementById("d10").value) || 0;
let numD12 = parseInt(document.getElementById("d12").value) || 0;
let numD20 = parseInt(document.getElementById("d20").value) || 0;
let numD100 = parseInt(document.getElementById("d100").value) || 0;
let numCoinFlip = parseInt(document.getElementById("CoinFlip").value) || 0;

const diceBox = document.querySelector(".dice-box");
diceBox.innerHTML = '';

for (let i = 0; i < numD4; i++) {
    if (numD4 > 0) {
        let result = roll(4);
        diceResults.push(result);
        total += result;
        diceBox.innerHTML += `<div class="die"><p>${result}/4</p></div>`;
    }
}
for (let i = 0; i < numD6; i++) {
    if (numD6 > 0) {
        let result = roll(6);
        diceResults.push(result);
        total += result;
        diceBox.innerHTML += `<div class="die"><p>${result}/6</p></div>`;
    }
}
for (let i = 0; i < numD8; i++) {
    if (numD8 > 0) {
        let result = roll(8);
        diceResults.push(result);
        total += result;
        diceBox.innerHTML += `<div class="die"><p>${result}/8</p></div>`;
    }
}
for (let i = 0; i < numD10; i++) {
    if (numD10 > 0) {
        let result = roll(10);
        diceResults.push(result);
        total += result;
        diceBox.innerHTML += `<div class="die"><p>${result}/10</p></div>`;
    }
}
for (let i = 0; i < numD12; i++) {
    if (numD12 > 0) {
        let result = roll(12);
        diceResults.push(result);
        total += result;
        diceBox.innerHTML += `<div class="die"><p>${result}/12</p></div>`;
    }
}
for (let i = 0; i < numD20; i++) {
    if (numD20 > 0) {
        let result = roll(20);
        diceResults.push(result);
        total += result;
        diceBox.innerHTML += `<div class="die"><p>${result}/20</p></div>`;
    }
}
for (let i = 0; i < numD100; i++) {
    if (numD100 > 0) {
        let result = roll(100);
        diceResults.push(result);
        total += result;
        diceBox.innerHTML += `<div class="die"><p>${result}/100</p></div>`;
    }
}
for (let i = 0; i < numCoinFlip; i++) {
    if (numCoinFlip > 0) {
        let result = roll(2);
        diceResults.push(result);
        total += result;
        diceBox.innerHTML += `<div class="die"><p>${result}/2</p></div>`;
    }
}
finalTotal = total;
console.log(diceResults);

document.querySelector('.results-box .result p').textContent = total;
document.querySelector('.final-result-box .result p').textContent = finalTotal;

modButtons.forEach(button => {
    if (button.classList.contains('active')) {
        toggleButton(button);
    }
});
}

document.querySelector('.roll-button').addEventListener('click', rollDice);

const modButtons = document.querySelectorAll('.mod-button');
modButtons.forEach(button => {
    button.addEventListener('click', function () {
        toggleButton(button);
    });
    
});
});