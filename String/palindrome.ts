let pstr:string = "train"
let reversed = pstr.split('').reverse().join('');
if(pstr == reversed)
{
    console.log("String is palindrome")
}
else
{
    console.log("String is not palindrome")
}