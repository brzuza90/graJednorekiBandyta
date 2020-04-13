const divs = document.querySelectorAll(' section div');
const colors = ['red', 'green', 'blue'];
const form = document.querySelector('form');
let cash = document.querySelector('.cash');
let result = document.querySelector('.result');
let gameNumber = document.querySelector('.gameNumber');
let wins = document.querySelector('.wins');
let losses = document.querySelector('.loses');
const bid = document.getElementById('bid');
let number = 0;
let winsNumber = 0;
let lossesNumber = 0;
// Funkcje
const startGame = function (e) {
    e.preventDefault();
    const gameBid = bid.value;
    if (gameBid <= 0) {
        alert('Musisz podać stawkę!')
        return;
    }
    if (gameBid <= cash.textContent * 1) {
        cash.textContent = (cash.textContent * 1) - (bid.value * 1);
        letsRoll();
        checkResult();
        showResult();
    } else {
        alert("Nie posiadasz tyle środków w swoim portfelu :(");
        return;
    }
}
const letsRoll = function () {
    divs.forEach(div => {
        const index = Math.floor(Math.random() * 3);
        div.className = ""
        div.classList.add(colors[index]);
    })
}
const checkResult = function () {
    let index = 0;
    const divOne = divs[index++].className;
    const divTwo = divs[index++].className;
    const divThree = divs[index++].className;
    if ((divOne === divTwo && divOne === divThree) || (divOne !== divTwo && divOne !== divThree && divTwo !== divThree)) {
        result.textContent = `Wygrałeś ${bid.value*3}$.`
        cash.textContent = (cash.textContent * 1) + (bid.value * 3);
        bid.value = "";
        number++;
        winsNumber++;
    } else {
        result.textContent = `Przegrałeś ${bid.value*1}$.`
        bid.value = "";
        number++;
        lossesNumber++;
    }
}
const showResult = function () {
    gameNumber.textContent = number;
    wins.textContent = winsNumber;
    losses.textContent = lossesNumber;
}
// Nasłuchiwanie
form.addEventListener('submit', startGame);