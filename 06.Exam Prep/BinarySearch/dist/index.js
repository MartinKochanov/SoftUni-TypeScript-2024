const sortedNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
function binarySearch(sortNums, target, startIndex = 0, endIndex = sortNums.length - 1) {
    if (endIndex < startIndex)
        return -1;
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    const currentElement = sortNums[middleIndex];
    //to right
    if (currentElement < target) {
        return binarySearch(sortNums, target, middleIndex + 1, endIndex);
    }
    //to left
    if (currentElement > target) {
        return binarySearch(sortNums, target, startIndex, middleIndex - 1);
    }
    return middleIndex;
}
console.log(binarySearch(sortedNums, 3));
