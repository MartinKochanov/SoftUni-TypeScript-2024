export namespace FoodAndBeverages {
    export interface Delivery {
        newCustomer(customerName: string, visited: boolean): string;
        visitCustomer(customerName: string): void;
        showCustomers(): string;
    }

    export type PlaceToVisitType = {
        customerName: string;
        visited: boolean;
    }
}