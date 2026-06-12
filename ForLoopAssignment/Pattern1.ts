for(let r:number = 2; r<=11 ; r++)
{
    let s:string = ""
    for(let c:number = 10; c>=r-1; c--)
    {
        s += c
    }
    console.log(s)
}