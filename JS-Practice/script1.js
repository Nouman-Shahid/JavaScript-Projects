//Datatypes and Variables

// there are three types of data types : var, let , const
// dont use var because its not recommended according to ES6
// instead of var use let

// Question : Variables for instagram profile page

let person = {
    name : "Numan Shahid",
    btnFollow: false,
    btnMessage: false,
    posts: 21,
    followers: 105,
    following : 126,
    bio:"console.log('hello world')",
}

person.posts = person.posts + 10
person.bio = "Software Engineer"

console.log(person)