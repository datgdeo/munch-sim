class Building {
    constructor(BuildingName, baseCps, baseCost, buttonId) {
        this.BuildingName = BuildingName;
        this.baseCps = baseCps / (1000 / tickRate);
        this.Cost = baseCost;
        this.buttonId = buttonId;
        this.amountOwned = 0;
        this.cps = 0;
        this.visibile = true; //!!!Change this to false!!!!!!

    }

    purchase(){
        score-= this.Cost;
        this.amountOwned++;
        this.cps = this.baseCps * this.amountOwned;
        this.cost = Math.ceil(this.cost * 1.15** this.amountOwned);
    }
}