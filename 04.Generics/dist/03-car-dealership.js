class CarDealership {
    dealershipName;
    soldCars;
    modelsSold;
    constructor(dealershipName) {
        this.dealershipName = dealershipName;
        this.soldCars = 0;
        this.modelsSold = new Map();
    }
    sellCar(dealerID, model) {
        this.modelsSold.set(dealerID, model);
        this.soldCars++;
    }
    showDetails() {
        let details = `${this.dealershipName}:`;
        this.modelsSold.forEach((model, dealerID) => {
            details += `\n${dealerID} sold ${model}`;
        });
        return details;
    }
}
function carDealership() {
    let dealership = new CarDealership('SilverStar');
    dealership.sellCar('BG01', 'C Class');
    dealership.sellCar('BG02', 'S Class');
    dealership.sellCar('BG03', 'ML Class');
    dealership.sellCar('BG04', 'CLK Class');
    console.log(dealership.showDetails());
}
carDealership();
