
class Car {

    public brand: string;
    public model: string;
    public horsePower: number;


    constructor(brand: string, model: string, horsePower: number) {
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
    }

    public get getBrand(): string {
        return this.brand;
    }

    public set setBrand(newBrand: string) {
        this.brand = newBrand;
    }

    public get getModel(): string {
        return this.model;
    }

    public set setModel(newModel: string) {
        this.model = newModel;
    }

    public get getHorsePower(): number {
        return this.horsePower;
    }

    public set setHorsePower(newHorsePower: number) {
        this.horsePower = newHorsePower;
    }

    public getCarInfo():string {
        return `The car is: ${this.brand} ${this.model} - ${this.horsePower} HP.`
    }
}

function carInfo(carData: string) {
    const [brand, model, horsePower] = carData.split(' ');

    const car = new Car(brand, model, Number(horsePower));
    console.log(car.getCarInfo());
}

carInfo('Chevrolet Impala 390');