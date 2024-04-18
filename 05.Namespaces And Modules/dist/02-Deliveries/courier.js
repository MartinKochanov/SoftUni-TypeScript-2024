"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courier = void 0;
// TODO: Make it work with ///<reference path="">
class Courier {
    placeToVisit;
    constructor(placeToVisit) {
        this.placeToVisit = placeToVisit;
    }
    newCustomer(customerName, visited = false) {
        if (this.placeToVisit.find(obj => obj.customerName === customerName)) {
            throw new Error(`${customerName} is already a customer of yours!`);
        }
        this.placeToVisit.push({ customerName, visited, });
        return `${customerName} just became your client.`;
    }
    visitCustomer(customerName) {
        if (!this.placeToVisit.find(obj => obj.customerName === customerName)) {
            throw new Error(`${customerName} is not your customer`);
        }
        else {
            const customer = this.placeToVisit.find(obj => obj.customerName === customerName);
            customer.visited = true;
        }
    }
    showCustomers() {
        let result = '';
        this.placeToVisit.forEach(customer => {
            result += `${customer.customerName} -> ${customer.visited}\n`;
        });
        return result.trim();
    }
}
exports.Courier = Courier;
