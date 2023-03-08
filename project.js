let project = document.querySelectorAll(".project-box")
let info = document.querySelectorAll(".info")
let checkBox = document.querySelector(".checkProject")



project.forEach(function (el) {
    el.onclick = function () {
        if (!el.classList.contains("active")) {
            el.children[1].style.top = '0'
            el.children[1].style.opacity = '1'
            el.classList.add("active")
        } else if (el.classList.contains("active")) {
            el.children[1].style.top = '290px'
            el.children[1].style.opacity = '0'  
            el.classList.remove("active")
        }
    } 
})

checkBox.onclick = function () {
    if (checkBox.checked === true) {
        console.log("D")
        project.forEach(function (el) {
            if (el.classList.contains("!page")) {
                el.style.display = 'none'
            }
        })
    } else if (checkBox.checked === false) {
        project.forEach(function (el) {
            if (el.classList.contains("!page")) {
                el.style.display = 'block'
            }
        })
    }
}
