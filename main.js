const tickRate = 1000 / 30;
let clickStrength = 1;
let score = 0;

let autoclicker = new Building('Autoclicker', 0.5, 15);
let worker = new Building('Worker', 1, 100);
let worker2 = new Building('Worker 2', 5, 350);
let machine = new Building('Machine', 15, 1000);
let cookieDecorator = new Building('Cookie Decorator', 30, 3000);
let limitedEditionCookies = new Building('Limited Edition Cookies', 50, 5000);
let cookiePie = new Building('Cookie Pie', 125, 13000);
let cookieCake = new Building('Cookie Cake', 150, 20000);
let cookieStatue = new Building('Cookie Statue', 300, 50000);


let betterMachine = new Machine('Better Machine', 3800, autoclicker);
let fasterMachine = new Machine('Faster Machine', 5000, worker);
let celebrityCookieDesigns = new Celebrity('Celebrity Cookie Designs', 7500, limitedEditionCookies);
let largeCookieCake = new LCC('Large Cookie Cakes', 10000, cookieCake);
let giantCookieStatue = new 


function scorePlusPlus() { 
    score += clickStrength;
}

function incScore() {
    score += autoclicker.cps;
    score += worker.cps;
    score += worker2.cps;
    score += machine.cps;
    score += cookieDecorator.cps;
    score += limitedEditionCookies.cps;
    score += cookiePie.cps;
    score += cookieCake.cps;
    score += cookieStatue.cps;
    }

    function updateButtons() {
        autoclicker.buttonState();
        worker.buttonState();
        worker2.buttonState();
        machine.buttonState();
        betterMachine.buttonState();
        fasterMachine.buttonState();
        cookieDecorator.buttonState();
        limitedEditionCookies.buttonState();
        celebrityCookieDesigns.buttonState();
        cookiePie.buttonState();
        cookieCake.buttonState();
        cookieStatue.buttonState();
    }

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML = 
    "$" + Math.floor(score).toLocaleString();
    }

setInterval(updatePage, tickRate);
