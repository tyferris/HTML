function roll(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function rollDice() {
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

let total = 0;
let diceResults = [];

for (let i = 0; i < numD4; i++) {
    let result = roll(4);
    diceResults.push(result);
    total += result;
    diceBox.innerHTML += `<div class="die"><p>${result}/4</p></div>`;
}
for (let i = 0; i < numD6; i++) {
    let result = roll(6);
    diceResults.push(result);
    total += result;
    diceBox.innerHTML += `<div class="die"><p>${result}/6</p></div>`;
}
for (let i = 0; i < numD8; i++) {
    let result = roll(8);
    diceResults.push(result);
    total += result;
    diceBox.innerHTML += `<div class="die"><p>${result}/8</p></div>`;
}
for (let i = 0; i < numD10; i++) {
    let result = roll(10);
    diceResults.push(result);
    total += result;
    diceBox.innerHTML += `<div class="die"><p>${result}/10</p></div>`;
}
for (let i = 0; i < numD12; i++) {
    let result = roll(12);
    diceResults.push(result);
    total += result;
    diceBox.innerHTML += `<div class="die"><p>${result}/12</p></div>`;
}
for (let i = 0; i < numD20; i++) {
    let result = roll(20);
    diceResults.push(result);
    total += result;
    diceBox.innerHTML += `<div class="die"><p>${result}/20</p></div>`;
}
for (let i = 0; i < numD100; i++) {
    let result = roll(100);
    diceResults.push(result);
    total += result;
    diceBox.innerHTML += `<div class="die"><p>${result}/100</p></div>`;
}
for (let i = 0; i < numCoinFlip; i++) {
    let result = roll(2);
    diceResults.push(result);
    total += result;
    diceBox.innerHTML += `<div class="die"><p>${result}/2</p></div>`;
}

document.querySelector('.results-box .result p').textContent = total;

let finalTotal = total;
document.querySelector('.final-result-box .result p').textContent = finalTotal;
}
function applyModifier(modifierName) {
    let modifierValue = parseInt(document.querySelector(`input[name="${modifierName}"]`).value) || 0;


    let currentFinalTotal = parseInt(document.querySelector('.final-result-box .result p').textContent);

    currentFinalTotal += modifierValue;

    document.querySelector('.final-result-box .result p').textContent = currentFinalTotal;
}
document.querySelector('.roll-button').addEventListener('click', rollDice);

document.querySelector('.mod-button[data-modifier="Atk"]').addEventListener('click', function() {applyModifier('Atk')});
document.querySelector('.mod-button[data-modifier="Str"]').addEventListener('click', function() {applyModifier('Str')});
document.querySelector('.mod-button[data-modifier="Dex"]').addEventListener('click', function() {applyModifier('Dex')});
document.querySelector('.mod-button[data-modifier="Con"]').addEventListener('click', function() {applyModifier('Con')});
document.querySelector('.mod-button[data-modifier="Int"]').addEventListener('click', function() {applyModifier('Int')});
document.querySelector('.mod-button[data-modifier="Wis"]').addEventListener('click', function() {applyModifier('Wis')});
document.querySelector('.mod-button[data-modifier="Cha"]').addEventListener('click', function() {applyModifier('Cha')});
document.querySelector('.mod-button[data-modifier="Save"]').addEventListener('click', function() {applyModifier('Save')});
document.querySelector('.mod-button[data-modifier="Prof"]').addEventListener('click', function() {applyModifier('Prof')});
document.querySelector('.mod-button[data-modifier="Exp"]').addEventListener('click', function() {applyModifier('Exp')});