//Operators and Conditonal Statements

//Arithmetic Operators
let a = 3;
let b = 2;

//console.log("a = 10 ","b = 90 ", a+b)
console.log("a + b =", a+b)
console.log("a - b =", a-b)
console.log("a * b =", a*b)
console.log("a / b =", a/b)
console.log("a % b =", a%b)
console.log("a ** b =", a**b) // 3^2


//Unary Operator
console.log("a++ =", a++)
console.log("a-- =", a--)

//Assignment Operators
console.log("a += 2 =", a += 2)
console.log("a -= 2 =", a -= 2)
console.log("a *= 2 =", a *= 2)
console.log("a /= 2 =", a /= 2)


//Comparison Operators
console.log("a == b =", a == b)
console.log("a != b =", a != b)
console.log("a === b =", a === b)
console.log("a !== b =", a !== b)
console.log("a > b =", a > b)
console.log("a < b =", a < b)

//logical Operators
console.log("a && b")
console.log("a || b")
console.log("!(a  b)")



//Conditional Statements

if(a>b)
{
  console.log("a is bigger than b")
}

else if(a<b)
{
  console.log("b is bigger than a")
}

else{
console.log("Both are equal")
}

a=1;
b=1;

console.log(a>b ? b>a :("both are aqual"))



//Question : get a user to input a number using prompt() and check if the number is multiple of 5 or not

// let number = prompt('Enter a number')

// if(number % 5 == 0){
//   console.log("number is multiple of 5")
// }
// else{
//     console.log("number is not multiple of 5")
// }


//Question : Write a code which can give grades to student according to their numbers

let number = prompt("Enter a number")

if(number >= 80 && number <= 100)
{
    console.log("Your Grade is A")
}

else if (number >= 70 && number <=79 )
{
    console.log("Your Grade is B")
}
else if (number >= 60 && number <=69 )
{
    console.log("Your Grade is C")
}
else if (number >= 50 && number <=59 )
{
    console.log("Your Grade is D")
}
else
{
    console.log("Your Grade is F")
}
