const tickRate = 1000 / 30;
let score = 0;

let autoclicker = new building('autoclicker', 0.1, 15, 'buyAutoclicker');
let worker = new building('worker', 1, 100, 'buyworker');

function incScore() {
    score += autoclicker.cps;
    score += worker.cps;
}

function scorePlusPlus() {
    score++;
    document.getElementById("score").innerHTML = score;
}

function updateButtons() {
    juicer.buttonState();
    worker.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML = "$" + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);
