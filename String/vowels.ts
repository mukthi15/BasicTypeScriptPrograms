let str : string = "This is a playwright training"
/*let vowel:number = 0
let consonant:number = 0
for(let i = 0; i<=str.length-1; i++)
{
    if(str(i).toLowerCase ==="a" || str(i).toLowerCase==="e" || str(i).toLowerCase==="i" || str(i).toLowerCase==="o" || str(i).toLowerCase==="u" )
    {
       vowel++
    }
    else
    {
        consonant++
    }
}
console.log("Total vowels are - "+vowel+" and total consonants are - "+consonant)*/

let vowelsCount = (str.match(/[aeiou]/g) || []).length;

let consonantsCount = str.length - vowelsCount;
console.log(vowelsCount)

console.log(consonantsCount)
