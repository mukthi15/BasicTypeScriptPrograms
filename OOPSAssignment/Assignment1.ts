class funcmethod
{
    nexon() : void
    {
        console.log("this car is nexon")
    }

    figo(car:string = "figo") : void
    {
        console.log("this car is "+car)
    }

    harrier(car:string = "Harrier") : string
    {
        //console.log("this car is "+car)
        return "Hi "+car
    }

    Audi() : string
    {
        return "Hello Audi"
    }

}
let fm = new funcmethod();
fm.figo()
fm.nexon()
console.log(fm.Audi())
console.log(fm.harrier())
