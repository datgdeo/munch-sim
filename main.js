const tickRate = 1000 / 30;
let score = 0;

let autoclicker = new building('autoclicker', 0.5, 15, 'buyAutoclicker');
let worker = new building('worker', 1, 100, 'buyWorker');
let worker2 = new building('worker2', 5, 350, 'buyWorker2');


function incScore() {
    score += autoclicker.cps;
    score += worker.cps;
    score += worker2.cps;
}

function scorePlusPlus() {
    score++;
}

function updateButtons() {
    autoclicker.buttonState();
    worker.buttonState();
    worker2.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML = "$" + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);
