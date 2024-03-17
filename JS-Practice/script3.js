//Loops and Strings

/*
1- for loop
1a- for-of loop
1b- for-in loop
2- while loop
3- do-while loop
*/

// for-of loop (strings , arrays)
/* 
let str = "NumanShahid"

for(let i of str)
{
    console.log("i =",i)
}
*/

// for-in loop (objects, arrays)
/*
let student = {
    name: "Numan Shahid",
    age: 22,
    gender: "male",
    student: true,
    phone: 123456789,
}

for(let key in student)
{
    console.log("keys = ",key, "value = ", student[key])
}
*/

//Question : Create a game in which user will guess the number until the user enter correct value

// let guessNumber = 11;

// let number =  prompt("Enter the number to guess")

// while(number != guessNumber)
// {
//    number =  prompt("You guessed wrong number. Enter the number again")
// }

// console.log("you won")


//Template literals

// let student = {
//     name: 'Numan',
//     rollno: "l1f21bsse0127",
//     age:22,
//     semester: 5,
// }

// let string = `     the student ${student.name}, Registration number is ${student.rollno}, age is ${student.age}, semester is
// ${student.semester}th                 `

// console.log(string.toUpperCase())
// console.log(string.trim())


// Question : take the name of user as prompt and then generate a username, username should start with @
// and end with the total length of name enter.  for eg name entered is : Numan Shahid  output: @numanshahid11


let fullname = prompt("Enter Your name")

let string = `@${fullname.toLowerCase()}${fullname.length}`

console.log(string)