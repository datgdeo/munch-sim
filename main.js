const tickRate = 1000 / 30;
let clickStrength = 1;
let score = 0;

let autoclicker = new Building('Autoclicker', 0.5, 15);
let worker = new Building('Worker', 1, 100);
let worker2 = new Building('Worker2', 5, 350);
let machine = new Building('Machine', 15, 1000);

let betterMachine = new Machine('Better Machine', 3000, autoclicker);
let fasterMachine = new Machine('Faster Machine', 5000, worker);

function scorePlusPlus() { 
    score += clickStrength;
}

function incScore() {
    score += autoclicker.cps;
    score += worker.cps;
    score += worker2.cps;
    score += machine.cps;
    }

    function updateButtons() {
        autoclicker.buttonState();
        worker.buttonState();
        worker2.buttonState();
        machine.buttonState();
        betterMachine.buttonState();
        fasterMachine.buttonState();
    }

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML = 
    "$" + Math.floor(score).toLocaleString();
    }

setInterval(updatePage, tickRate);
