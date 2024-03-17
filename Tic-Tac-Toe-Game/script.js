// 123 , 456 , 789 , 147 , 258 , 369 , 159 , 357

let turn = false
let reset = false

let winScenarios = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],

]

let buttons = document.querySelectorAll(".btn")
let resetBtn = document.querySelector(".reset")

for (let i = 0; i < buttons.length; i++) {

    buttons[i].innerText = ""
}

resetBtn.addEventListener("click", () => {
    location.reload()

})

buttons.forEach((box) => {

    box.addEventListener("click", () => {
        if (turn == false) {
            box.innerText = "X"
            box.style.color= "red"
            turn = true

            if(winScenarios == (box.innerText = 'X'))
            {
                alert("Player X Won")
            }
        }

        else {
            box.innerText = "O"
            box.style.color= "blue"
            turn = false
        }

            box.disabled =true

            checkWinner()
    })

})

const checkWinner = () => {
    for (let i of winScenarios) {
        let pos1 = buttons[i[0] - 1].innerText;
        let pos2 = buttons[i[1] - 1].innerText;
        let pos3 = buttons[i[2] - 1].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            setTimeout(() => {
                
                alert("Player " + pos1 + " Won");
            }, 300);
            setTimeout(() => {
                
                location.reload()
            }, 500);
        }

}
};





