/*const numericArray: number[] = [10, 20, 30, 40, 50];

const a: number = 30;
const b: number = 99;

// Method 1: Using the includes() method (Best for primitive types)
const present: boolean = numericArray.includes(a);
console.log(present); // Output: true

const absent: boolean = numericArray.includes(b);
console.log(absent); // Output: false*/

let nums : number[] = [1, 12, 45, 47, 24]
const evenNumbers: number[] = nums.filter((num) => num % 2 === 0);
console.log(evenNumbers);
const oddNumbers: number[] = nums.filter((num) => num % 2 !== 0);
console.log(oddNumbers);
console.log(nums.length)

