interface homedata
{
    person1 : string,
    salary1 : number,
    person2 : string,
    working : boolean,
    person3 : string,
    grade : number,
    person4 : string,
    school : boolean

}

let home : homedata =
{
    person1 : "Mukthi",
    salary1 : 100,
    person2 : "Radha",
    working : true,
    person3 : "Nidhi",
    grade : 3,
    person4 : "Vikraant",
    school : false
}


console.log(home.grade)
home.salary2 = "10000"
//delete home.salary1
console.log(home)
console.log("person3" in home)

console.log(Object.keys(home))
console.log(Object.values(home))
console.log(Object.entries(home))
console.log(typeof(home.grade))
console.log(typeof(home))