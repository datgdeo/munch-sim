class upgrade {
    constructor(upgradeName, baseCps, cost, buttonId) {
        this.upgradeName = upgradeName;
        this.baseCps = baseCps / (1000 / tickRate);
        this.cost = cost;
        this.buttonId = 'buy' + upgradeName;
        this.owned = false;

    }

    purchase() {
        score -= this.cost;
        this.cost
    }

    buttonState() {
        if (!this.visible) {
            document.getElementById(this.buttonId).style.display = 'none';
            if (score >= this.cost) {
                this.visible = true;
                document.getElementById(this.buttonId).style.display = 'initial';
            }
        }
        if (score < this.cost) {
            document.getElementById(this.buttonId).disabled = true;
        } 
        else {
                document.getElementById(this.buttonId).disabled = false;
            }
            document.getElementById(this.buttonId).innerHTML = "Buy" + this.upgradeName + 
            " (Cost: $" + Math.ceil(this.cost).toLocaleString() + ") <br> Adds $" +
             (this.baseCps * (1000 / tickRate)).toLocaleString() + 'Per Second <br> [Owned: ' + this.amountOwned + ']';
        }
    }