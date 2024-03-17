//Document ObjecT Modle

//Question : add h2 tag with some text and then append some text in same h2
// let string = document.getElementById("h2")

// let string2 = " Developers!"
// let newText = string.innerText.concat(string2)

// string.innerText = newText


//Question create 3 divs of same class and then acess them and give unique text to each 


// let divs = document.querySelectorAll(".box")

// divs[0].innerText = "hello"
// divs[1].innerText = "yello"
// divs[2].innerText = "mello"

// let div = document.querySelector(".box")
// let attribute = div.getAttribute("class")

// console.log(attribute)


//Question : create a button using js , add text "click me" add background and text color of button
//insert the button at starting of body tag


let btn = document.createElement("button")
btn.innerText = "click me"
btn.style.color = "white"
btn.style.backgroundColor = "red"

let body = document.querySelector("body")
body.prepend(btn)


let h2 = document.querySelector("h2")
h2.classList.add("h2style")