class Car {
    constructor(brand, model, horsePower) {
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
    }
    get getBrand() {
        return this.brand;
    }
    set setBrand(newBrand) {
        this.brand = newBrand;
    }
    get getModel() {
        return this.model;
    }
    set setModel(newModel) {
        this.model = newModel;
    }
    get getHorsePower() {
        return this.horsePower;
    }
    set setHorsePower(newHorsePower) {
        this.horsePower = newHorsePower;
    }
    getCarInfo() {
        return `The car is: ${this.brand} ${this.model} - ${this.horsePower} HP.`;
    }
}
function carInfo(carData) {
    const [brand, model, horsePower] = carData.split(' ');
    const car = new Car(brand, model, Number(horsePower));
    console.log(car.getCarInfo());
}
carInfo('Chevrolet Impala 390');
