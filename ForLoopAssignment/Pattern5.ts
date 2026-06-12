for(let r:number = 1; r <= 5 ; r++)
{
    let s:string = ""
    for(let c:number = 1; c <= 10; c++)
    {
        if (r%2==0)
        {
         if (c%2==1)
            {
                s += 1
            }   
         if (c%2==0)
            {
               s += 0 
            }
        }

         if (r%2==1)
        {
         if (c%2==0)
            {
                s += 1
            }   
         if (c%2==1)
            {
               s += 0 
            }
        }

        //s += c
    }
    console.log(s)
}