import { FoodAndBeverages } from "./FoodAndBeverages";
// TODO: Make it work with ///<reference path="">

export class Courier implements FoodAndBeverages.Delivery {


    protected placeToVisit: FoodAndBeverages.PlaceToVisitType[];

    constructor(placeToVisit: FoodAndBeverages.PlaceToVisitType[]) {
        this.placeToVisit = placeToVisit;
    }
    newCustomer(customerName: string, visited: boolean = false): string {
        if (this.placeToVisit.find(obj => obj.customerName === customerName)) {
            throw new Error(`${customerName} is already a customer of yours!`)
        }
        this.placeToVisit.push({ customerName, visited, })
        return `${customerName} just became your client.`;
    }
    visitCustomer(customerName: string): void {
        if (!this.placeToVisit.find(obj => obj.customerName === customerName)) {
            throw new Error(`${customerName} is not your customer`)
        } else {
            const customer: FoodAndBeverages.PlaceToVisitType = this.placeToVisit.find(obj => obj.customerName === customerName);
            customer.visited = true;
        }
    }
    showCustomers(): string {
        let result: string = '';
        this.placeToVisit.forEach(customer => {
            result += `${customer.customerName} -> ${customer.visited}\n`
        })

        return result.trim();
    }
}