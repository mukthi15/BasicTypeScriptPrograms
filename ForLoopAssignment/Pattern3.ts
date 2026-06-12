let s:string = ""
let i:number = 0
for(let r:number = 1; r<=4 ; r++)
{
    for(let c:number = 1; c <= r; c++)
    {
        i++   
        s += i
       
    }
    console.log(s+"\n")
    s=""
    
}