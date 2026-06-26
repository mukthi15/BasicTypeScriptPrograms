let str : string[] = ["modi", "shah", "dowal", "bose", "kalam"]
//console.log(str.reverse)
let str1 : string[] = new Array(5)
let j:number = 0;
for(let i = str.length-1; i>=0; i--)
{
    str1[j] = str[i]
    j++
}
console.log(str1)