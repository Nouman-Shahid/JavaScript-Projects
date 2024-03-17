//Object and Classes

let office = {
    calcSalary (name,salary) {

        console.log(`The salary of employee ${name} is ${salary}`)
    }
}

let employee = {
    fullname : "Ahmed Shehzad",
    age : 25,
    phone : 32140432,
    salary: 500000
}

employee.__proto__ = office


class User{

    constructor(name,email){
        this.name = name
        this.email = email
    }

    viewData = () =>{
        console.log(`The user ${this.name} can view website data`)
    }

}

let username = prompt("Enter Your Name")

let useremail = `@${username.toLowerCase()}${(username.length)}`
console.log(useremail)

let student = new User(username,useremail)

console.log(student)