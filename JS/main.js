//header

let other = document.querySelector("#Other")
let oLinks = document.querySelector(".big-menu ul")

other.onclick = function () {
    if (!other.classList.contains("active")) {
        oLinks.style.display = 'block'
        other.classList.add("active")
        oLinks.parentElement.parentElement.style.backgroundColor = '#f1c000'
    } else if (other.classList.contains("active")) {
        oLinks.style.display = 'none'
        other.classList.remove("active")
        oLinks.parentElement.parentElement.style.backgroundColor = 'var(--main-color)'
    }
}



/***********************************************************************************************/

let burger = document.querySelector('.burger-icon')
let ul = document.querySelector('ul')

burger.onclick = function () {
    if (burger.classList.contains ('nav-hide')) {
        ul.style.display = 'flex';
        burger.classList.add('nav-active')
        burger.classList.remove('nav-hide')
    } else if (burger.classList.contains('nav-active')) {
        ul.style.display = 'none';
        burger.classList.remove('nav-active')
        burger.classList.add('nav-hide')
    }
}



let bgMainAlert = document.querySelector(".bg-main-alert");
let MainALert = document.querySelector(".main-alert-parent");
let ButtonMainALret = document.querySelector(".button button");
let SawMainAlret = false;

let MainAlertClear = function () {
    bgMainAlert.remove()
    MainALert.remove()
    document.body.removeAttribute('style')
    SawMainAlret = true
    window.sessionStorage.setItem("MainAlert" , SawMainAlret)
}

bgMainAlert.onclick = MainAlertClear
ButtonMainALret.onclick = MainAlertClear

if (window.sessionStorage.getItem("MainAlert")) {
    bgMainAlert.remove()
    MainALert.remove()
    document.body.removeAttribute('style')
}

/*********************************************************************************************/

let scroller = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll" , () => {
    let scrollTop = document.documentElement.scrollTop
    scroller.style.width = `${(scrollTop / height) * 100}%`
    if (scrollTop < 96) {
        scroller.style.backgroundColor = 'red'
    } else if (scrollTop > 96) {
        scroller.style.backgroundColor = '#FFCD00'
    }
})

/*********************************************************************************/

let sec3 = document.querySelector(".section-3")
let prog = document.querySelectorAll(".progress-bar")
let GoTop = document.querySelector(".top")
let numProg = document.querySelectorAll(".int")
let started = false
let circle = document.querySelector(".circle")
let Cbefore = window.getComputedStyle(circle , ':before') 

function plusNum(el) {
    let goal = el.dataset.goal
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 1500 / goal);
}

window.onscroll = function () {
    if (window.scrollY >= 1541) {
        prog.forEach( function (el) {
            el.style.width = el.dataset.width
        }
        )
        if (!started) {
            numProg.forEach( (el) => plusNum(el) )
        }
        started = true
    }
    if (window.scrollY >= 125) {
        GoTop.style.opacity = '1'
    } else if (window.scrollY <= 124) {
        GoTop.style.opacity = '0'
    }
    if (window.scrollY >= 4000) {
        GoTop.style.marginBottom = '107px'
    } else {
        GoTop.style.marginBottom = '0'
    }
}

/****************************************************************************************/
/*
let copy = document.querySelector(".copy")
let copyText = document.querySelector("#copyText")

let btnCopyText = document.querySelector(".btnCopy")
let btnCopyMark = document.querySelector(".mark")

copy.onclick = function () {
    btnCopyText.style.display = 'none';
    btnCopyMark.style.display = 'block';
    btnCopyMark.style.animation = 'mark 0.4s alternate'
    btnCopyMark.style.opacity = '1';
    let countCopyNum = 0;
    let countCopy = setInterval(() => {
        countCopyNum++;
        if (countCopyNum === 1) {
            copyText.removeAttribute('disabled')
            copyText.select();
            document.execCommand('copy')
        }
        if (countCopyNum === 2) {
            clearInterval(countCopy)
            btnCopyMark.style.display = 'none';
            btnCopyText.style.display = 'block';
            btnCopyText.style.animation = 'markText 0.4s alternate'
            btnCopyText.style.opacity = '1';
            copyText.setAttribute('disabled' , '')
        }
    }, 1000);
}
*/
/******************************************************************************** */

let form = document.querySelector("form")
let usermail = document.querySelector("#mail")
let username = document.querySelector("#name")
let message = document.querySelector("#Message")

form.onsubmit = function (e) {
    e.preventDefault()
    Email.send({
        SecureToken : "91c51ca0-2fe9-4500-bcc4-b6701099d02b",
        To : 'joothedev@gmail.com',
        From : usermail.value,
        Subject : "Need To Contact You",
        Body : "HI"
    }).then(
        message => alert("Email Was Sent")
    );
    this.reset()
}

/********************************************************************************** */

let laPost = document.querySelector("#la-post")
let laArticle = document.querySelector("#la-article")
let laVideo = document.querySelector("#la-video")


laPost.onclick = function () {
    window.open("https://www.instagram.com/p/CpdsOAho3dv/?utm_source=ig_web_copy_link" , '_blank')
}

/*laPost.onclick = function () {
    window.open("https://www.instagram.com/p/CoOF_pLobYy/?utm_source=ig_web_copy_link" , '_blank')
}*/

laVideo.onclick = function () {
    window.open("https://www.youtube.com/watch?v=hayGscPVYPQ" , '_blank')
}

/***********************************************************************************/

