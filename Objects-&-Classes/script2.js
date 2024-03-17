// Question 1: Write a JavaScript program to list the properties of a JavaScript object.

let student = {
    fullName: "Numan Shahid",
    age: 22,
    gender: "Male",
    phone: "012345678910",
    email: "numanshahid@gmail.com"

}

for (const key in student) {
    if (Object.hasOwnProperty.call(student, key)) {
        const element = key;
        console.log(element + ",")
    }
}


// Question 2: Write a JavaScript program to delete the rollno property from 
//the following object. Also print the object before or after deleting the property.

// let student = {
//     fullName: "Numan Shahid",
//     age: 22,
//     gender: "Male",
//     phone: "012345678910",
//     email: "numanshahid@gmail.com",
//     rollno: "l1f21bsse0127"

// }

// console.log("Before deleting the rollno property")
// for (const key in student) {
//     if (Object.hasOwnProperty.call(student, key)) {
//         const element = key;
//         console.log(element + ",")
//     }
// }
// removeProperty = (object,property) => {

//     delete object[property]
// }

// console.log("After deleting the rollno property")
// for (const key in student) {
//     if (Object.hasOwnProperty.call(student, key)) {
//         removeProperty(student,'rollno')
//         const element = key;
//         console.log(element + ",")
//     }
// }



// Question 3: Write a JavaScript program to get the length of a JavaScript object

// let student = {
//     fullName : "Numan Shahid",
//     age: 22,
//     email:"numanshahid@gmail.com",
//     phone:321344453,
// }

// let length = 0;

// for (const key in student) {
//     if (Object.hasOwnProperty.call(student, key)) {
//         const element = student[key];
//         length++;
//     }
// }

// console.log(`Length of object is : ${length}`)


//Question 4: Write a JavaScript program to display the reading status 
//(i.e. display book name, author name and reading status) of the following books.

// let library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }];


// for (const key in library) {
//     if (Object.hasOwnProperty.call(library, key)) {
//         const element = library[key];
//         if (element.readingStatus == true) {
//             console.log(`You have read the book ${element.title} of author ${element.author}`)
//         }

//         else if (element.readingStatus == false) {
//             console.log(`You have not read the book ${element.title} of author ${element.author} yet`)
//         }
//     }
// }


// Question 5: Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
//Volume of a cylinder : V = πr^2h
//where r is the radius and h is the height of the cylinder.

// let cylinder = {
//     pie : 3.14,

//     calRadius : (r) =>
//     {
//        return r*r
//     },
//     calHeight : (h) =>
//     {
//        return h
//     }
// }

// let Volume = cylinder.pie*cylinder.calRadius(4)*cylinder.calHeight(7)

// console.log(`The volume of cylider is : ${Volume}`)



//Question 6: Write a bubble sort algorithm in JavaScript.
//Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted

// let array = [4,9,3,1,-2,-10,6]

// array.sort((a,b) => a - b)

// console.log(array)



// Question 7 : Create a clock and display the time in each second

// var test = setInterval(timer, 1000);

// function timer() {
// var d = new Date();
// console.log(d.toLocaleTimeString()) ;
// }


// Question :  Write a JavaScript program to sort an array of JavaScript objects.

let library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

    let res = library.sort((a, b) => {
        if (a.libraryID > b.libraryID) return -1;
        if (a.libraryID < b.libraryID) return 1;
        return 0;
    });
    
    console.log(res);
    
