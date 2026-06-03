function opt(name:string , num?:number):void
{
    if(name == undefined)
    {
        console.log("name is"+name+" and number is undefined")
    }
    else
    {
        console.log("name is "+name+" and number is "+num)
    }
}
 opt("test",9889)
