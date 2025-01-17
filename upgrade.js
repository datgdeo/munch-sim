class Upgrade {
    constructor (buildingName, baseCost) {
        this.buildingName = buildingName;
        this.baseCost = baseCost;
        this.buttonID = 'buy' + buildingName;
    }
}