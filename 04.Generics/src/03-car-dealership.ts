
interface Dealership<T> {
    dealershipName: T;
    soldCars: number;
}

interface Actions<T> {
    sellCar(dealerID: T, model: T): void;
}

class CarDealership<T> implements Dealership<T>, Actions<T> {

    dealershipName: T;
    soldCars: number;
    modelsSold: Map<T, T>;

    constructor(dealershipName: T) {
        this.dealershipName = dealershipName;
        this.soldCars = 0;
        this.modelsSold = new Map();
    }

    sellCar(dealerID: T, model: T): void {
        this.modelsSold.set(dealerID, model);
        this.soldCars++;
    }

    showDetails(): string {

        let details = `${this.dealershipName}:`

        this.modelsSold.forEach((model, dealerID) => {
            details += `\n${dealerID} sold ${model}`
        })

        return details;
    }

}

function carDealership(): void {
    let dealership = new CarDealership('SilverStar');

    dealership.sellCar('BG01', 'C Class');
    dealership.sellCar('BG02', 'S Class');
    dealership.sellCar('BG03', 'ML Class');
    dealership.sellCar('BG04', 'CLK Class');
    console.log(dealership.showDetails());

}


carDealership();