class CompareElements {
    data;
    constructor(arrData) {
        this.data = arrData;
    }
    compare(element) {
        let matches = 0;
        for (const dataElement of this.data) {
            if (dataElement === element) {
                matches++;
            }
        }
        return matches;
    }
}
function genericCompareElements() {
    let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
    console.log(c.compare('b'));
    let d = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
    console.log(d.compare(1));
}
genericCompareElements();
