let num : number[] = [34, 67, 83, 99, 35]
let L = num[0];
for(let i = 1; i<=num.length; i++)
    {
        if(num[i]>L){
            L = num[i]
        }

    }
console.log(L)