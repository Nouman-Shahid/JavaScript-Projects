let URL = "https://official-joke-api.appspot.com/random_joke"

let para = document.querySelector("#para")
let btn = document.querySelector("#btn")

let getApi = async () => {

    let response = await fetch(URL)
    let data = await response.json()

    let joke = para.innerText = `${data.setup} \n ${data.punchline} \n\n Type : ${data.type}`
    console.log(joke)

}

btn.addEventListener("click",getApi)
getApi()