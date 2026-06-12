function selectcolor(colour : string) : void
{
    console.log(colour)
}
selectcolor("orange");
function selectnewcolour(newcolour : (colour : string) => void) : void
{
    newcolour("red");
}
selectnewcolour(selectcolor);

function drivesafe(speed : number):void
{
    console.log("speed is "+speed)
}

drivesafe(60)

function drivecareful(limit : (speed : number) => void) : void
{
    console.log(80)
}

drivecareful(drivesafe)