const tickRate = 1000 / 30;
let score = 0;

let autoclicker = new building('autoclicker', 0.5, 15);
let worker = new building('worker', 1, 100);
let worker2 = new building('worker2', 5, 350);
let machine = new building('machine', 15, 1000);


function incScore() {
    score += autoclicker.cps;
    score += worker.cps;
    score += worker2.cps;
    score += machine.cps;
}

function scorePlusPlus() {
    score++;
}

function updateButtons() {
    autoclicker.buttonState();
    worker.buttonState();
    worker2.buttonState();
    machine.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML = "$" + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);
