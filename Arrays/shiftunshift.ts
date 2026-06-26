let arr : number[] = [23,34,45,56,67]
arr.unshift(13)
console.log(arr)
arr.shift()
console.log(arr)
let mul2 = arr.map(num => num*2)
console.log(mul2)
let even = arr.filter(num => num%2==0)
console.log(even)