// Events

let body = document.querySelector("body")
body.style.backgroundColor = "white"
body.style.color = "black"

let h2 = document.querySelector(".h2")

let btn = document.createElement("button")

btn.innerText = "Enable Dark Mode"
btn.style.color = "black"
btn.style.backgroundColor = "black"
btn.style.margin = "2vh"
btn.style.padding = "2vh"
btn.style.borderRadius = "2vh"

body.append(btn)

let dark_mode = false;


btn.addEventListener("click",() => {

    if (dark_mode == false) {
        h2.innerText = "Click to enable dark-mode"
        btn.innerText = "Enable Dark Mode"
        btn.style.color = "black"
        btn.style.backgroundColor = "wheat"
        body.style.color = "black"
        body.style.backgroundColor = "wheat"

        dark_mode = true
    }

    else  {

        h2.innerText = "Click to enable light-mode"
        btn.innerText = "Enable Light Mode"
        btn.style.color = "white"
        btn.style.backgroundColor = "black"
        body.style.color = "white"
        body.style.backgroundColor = "black"

        dark_mode = false
    }

})