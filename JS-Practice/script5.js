// Functions and Methods

//Question: Create an arrow function, pass a string argument and return number of vowels in that string

// let vowels = 0;
// let  countVowels = (string) =>{

//     for(let i of string)
//     {
//         if(([i] == "a")||([i] == "e")||([i] == "i")||([i] == "o")||([i] == "u"))
//         {
//             vowels++;
//         }
//     }

//     console.log(`Number of vowels in string are : ${vowels}`)
// }


// countVowels("i am a student in ucp, in bsse program")


//Question : for given array print square of each number using for each loop

// let array = [1,2,3,4]

// array.forEach(square = (val) =>{
    
//     return val % 2 == 0
// })


// Question : print the numbers greater than 90 using reduce method

let array = [81,99,67,91,77,90]

array.reduce(check = (prev,cur) => {

    console.log(  (cur > 90) ? cur : prev)

})