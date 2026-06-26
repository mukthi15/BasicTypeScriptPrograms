let str:string = "Hi this is & # % ^ me."
let str1 = str.replace(/[^a-zA-Z0-9\s]/g, '')
console.log(str1.replaceAll("  ",""))

