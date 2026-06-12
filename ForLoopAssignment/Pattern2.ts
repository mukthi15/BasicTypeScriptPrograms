
for(let r:number = 1; r<=1 ; r++)
{
    let s:string = ""
    let b:number = 0
    for(let c:number = 1; c<=12; c++)
    {
        s += c
        b++
        if(b==4)
        {
            b=0
            console.log(s);
            s=""
            
        }
        
    }
    
}