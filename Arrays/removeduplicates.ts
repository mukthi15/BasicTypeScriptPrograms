let arr1: number[] = [23, 67, 87, 54, 44, 87, 67];
let uniqueArr: number[] = [];

for (let num of arr1) {
    if (!uniqueArr.includes(num)) {
        uniqueArr.push(num);
    }
}

console.log(uniqueArr);