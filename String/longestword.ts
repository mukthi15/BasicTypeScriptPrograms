let str : String = "This is a playwright training"
let arr = str.split(" ")
let largest = 0
let largestword : string = ""
for(let i = 0; i<=arr.length-1;i++)
{
   if(arr[i].length > largest)
    {
      largest =  arr[i].length
      largestword = arr[i]
    }  
}
console.log(largestword)
console.log(largest)