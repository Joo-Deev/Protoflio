let copyBtn = document.querySelectorAll(".pre-btn")
let text = document.querySelectorAll('pre')

copyBtn.forEach(function (e) {
    e.addEventListener("click" , function () {
        let countCopy = 2 
        e.innerHTML = 'Copied'
        text.forEach(function (el) {
            navigator.clipboard.writeText(e.parentElement.textContent)
        })
        let CopyTime = setInterval(() => {
            countCopy--;
            if (countCopy === 0) {
                e.innerHTML = 'Copy'
                clearInterval(CopyTime)
            }
        }, 1000);
    })
})

/********************************************************* */

let color = document.querySelector("#color")
let TextColor = text[2]

color.onblur = function () {
    TextColor.style.color = color.value
    window.localStorage.setItem("TextColor" , color.value)
}

if (window.localStorage.getItem("TextColor")) {
    color.value = window.localStorage.getItem("TextColor")
    TextColor.style.color = color.value
}

/*************************************************************** */

//! This Is Solution

let solutionBtn = document.querySelector(".solution-btn")
let solution = document.querySelector(".solution")

solutionBtn.onclick = function () {
    if (!solutionBtn.classList.contains("acitve")) {
        solution.style.display = 'block'
        solutionBtn.classList.add("acitve")
    } else if (solutionBtn.classList.contains("acitve")) {
        solution.style.display = 'none'
        solutionBtn.classList.remove("acitve")
    }
}
