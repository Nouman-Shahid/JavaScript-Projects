//Arrays

// Question : Array of student marks [85,97,44,37,76,60] calculate average 

// let marks = [85,97,44,37,76,60]
// let sum=0,avg=0

// for(let i =0; i< marks.length; i++)
// {
//     sum += marks[i]
// }

// avg = sum / marks.length

// console.log(avg)


//Question : create array to store companies [Bloomber,Microsoft,Uber,Google,IBM,Netflix]
//a: remove first company
//b: remove uber and add ola in its place 
//c: add amazon at end

let companies = ["Bloomber","Microsoft","Uber","Google","IBM","Netflix"]
companies.shift()
console.log(companies)

companies.splice(1,1,"Ola")

console.log(companies)

companies.push("Amazon")

console.log(companies)