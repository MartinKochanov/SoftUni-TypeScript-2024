
class CompareElements<T> {
    data: T[];

    constructor(arrData: T[]) {
        this.data = arrData;
    }

    compare(element: T): number {

        let matches = 0;

        for (const dataElement of this.data) {
            if (dataElement === element) {
                matches++;
            }
        }
        return matches;
    }
}


function genericCompareElements(): void {

    let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
    console.log(c.compare('b'));


    let d = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
    console.log(d.compare(1));

}

genericCompareElements();