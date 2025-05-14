// let theTitle= "Elzero", descriptionContent= "Elzero Web Scool", theDate= "17/10";

// let markUp= `
// <div class= "card">
// <h3>Hello ${theTitle}</h3>
// <p>${descriptionContent}<p/>
// <span>${theDate}</span>
// </div> `;
// document.write(markUp. repeat(4));

// let d = "-100", e = "20", f = 30, g = true;
// console.log(+e++ + -d + f + +g);
// e += e
// console.log(e + -d + f + +g);

// let a= 10, b= "20", c= 80;
// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);

// let a = 1_00, b = 2_00.5, c = 1e2, d = 2.4;

// console.log(Math.trunc(Math.min(a, b, c, d)));

// console.log(Math.pow(a, Math.trunc(d)))

// console.log(Number.parseInt(d))
// console.log(Math.round(d))
// console.log(Math.floor(d))
// console.log(Math.trunc(d))

// console.log((Math.trunc(b)/Math.ceil(d)).toFixed(2))
// console.log(Math.ceil(Math.trunc(b)/Math.ceil(d)))

// let a = "Elzero Web School"
// console.log(a.charAt(2).toUpperCase()+a.slice(3, 6))

// console.log(a.slice(-4, -3).toUpperCase().repeat(8))

// console.log(a.slice(0, 6).split())

// console.log(a.substr(0, 6) + a.substr(10, 7))

// console.log(a.charAt(0).toLowerCase() + a.slice(1, 16).toUpperCase() + a.slice(-1).toLowerCase())


// let a = 10
// a < 10 ? console.log(10) : a > 40 ? console.log("> 40") : a >= 10 && a < 40 ? console.log("10 to 40") : console.log("unknown")

// let st = "Elzero Web School"
// console.log(2 * st.length)
// if ((2 * st.length) === +"34") {
//     console.log("Good")
// }
//  if (st.indexOf("W")-1 === st.indexOf("w")+1) {
//      console.log("Good")
// }
// if (st !== "string") {
//     console.log("Good")
// }

// let job = "de"
// let salary = 0

// switch (job) {
//     case "manager":
//         salary = 8000
//         console.log(`salary is ${salary}`)
//         break
//     case "it":
//     case "support":
//         salary = 6000
//         console.log(`salary is ${salary}`)
//         break
//     default:
//         salary = 4000
//         console.log(`salary is ${salary}`)
// }

// let holidays = 2
// let money = 0

// if (holidays === 0) {
//     money = 5000
//     console.log(`my money is ${money}`)
// }else if (holidays === 1 || holidays === 2) {
//     money = 3000
//     console.log(`my money is ${money}`)
// }

// let zero = 0
// let country = 3
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gmaal", "Ameer"]

// my = my.slice(zero , ++country).reverse()
// console.log(my)
// my = my.slice(++zero, --country)
// console.log(my)

// my = [my[--zero].slice(zero, --country), my[++zero].slice(country)]
// console.log(my.join(""))
// console.log(my[zero][country] + my[zero][++country].toUpperCase())

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "samera"]
// let myEmployees = ["Amgad", "Sameh", "Ameer","Omar", "Othman", "Amany", "Samia"]
// let x = 3
// let countOne = 1
// let countTwo = 1
// let countThree = 1
// document.write(`<div>We Have ${x} Admins</div>`);
// for (let i = 0; i < x; i++) {
//     if (myAdmins[i] === "Stop") {
//         break
//     }
//     document.write(`<div>`)
//     document.write(`<hr>`)
//     document.write(`<div>The Admin For Team ${i + 1} Is ${myAdmins[i]}</div>`)
//     document.write(`<h3>TEAM MEMBERS:</h3>`)
//     for (j = 0; j < myEmployees.length; j++) {
//         if (myAdmins[i].startsWith("A") && myEmployees[j].startsWith("A")) {
//             document.write(`<p>- ${countOne++} ${myEmployees[j]}</p>`)
//         } else if(myAdmins[i].startsWith("O") && myEmployees[j].startsWith("O")) {
//                     document.write(`<p>- ${countTwo++} ${myEmployees[j]}</p`)
//                 }else if (myAdmins[i].startsWith("S") && myEmployees[j].startsWith("S")) {
//                     document.write(`<p>- ${countThree++} ${myEmployees[j]}</p>`)
//                 }
//         document.write(`</div>`)

//     }
// }


// function showDetails(a, b, c) {
//     let Name;
//     let Age;
//     let Status;
//     typeof a === "string" ? Name = a : typeof a === "number" ? Age = a : Status = a
//     typeof b === "string" ? Name = b : typeof b === "number" ? Age = b : Status = b
//     typeof c === "string" ? Name = c : typeof c === "number" ? Age = c : Status = c
//     if (Status === true) {
//         Status = "you are hiring"
//     } else {
//         Status = "you are not hiring"
//     }
//         document.write(`<div>`)
//         document.write(`<p>"Hello ${Name} your age is ${Age} ${Status}"</p>`)
//         document.write(`</div>`)
// }
// showDetails("Osama", 20, true)
// showDetails(false, "Osama", 50)
//  showDetails( 30, true, "Osama")

// let names = function (...name) {
//     return `string [${name.join("], [")}] => Done !`
// }
// let names = (...name) => `string [${name.join("], [")}] => Done !`
// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"))

// let myNumbers = [20, 50, 10, 60]
// function calc(one, two, ...nums) {
//     return nums[+(Array.isArray(myNumbers))] + one + two
// }
// //let calc = (one, two, ...nums) => nums[+(Array.isArray(myNumbers))] + one + two
// console.log(calc(10, 50, 60, 20 ))

/*let mix = "A13BS2ZX"
let nums = mix.split("").filter(function (el){
    return !isNaN(parseInt(el)) ? el : ""
}).map(function (el){
    return el * el
}).join("")
    console.log(nums)

let myStrings = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z"

let solution = myStrings.split("").map(function (el) {
    return  el !== "," ? el : ""
}).filter(function (el) {
    return isNaN(parseInt(el)) ? el : ""
}).reduce(function (acc, current) {
    return acc + current;
    }).slice(true, -isNaN(myStrings)).replaceAll("_", " ")
 console.log(solution)*/

// let creat = el => document.createElement(`${el}`)
// let myHead = creat("header")

// myHead.className = "website-head"
// myHead.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 20px; background-color: white; text-align: center"
// document.body.style.cssText = "margin: 0; background-color: rgb(236, 236, 236); font-family: Tahoma, Arial;"
// let myHeadLogo = creat("h1")
// myHeadLogo.className = "logo"
// myHeadLogo.title = "website-logo"
// myHeadLogo.textContent = "Elzero"
// myHeadLogo.style.cssText = "color: green; font-size: 40px"

// myHead.appendChild(myHeadLogo)

// document.body.appendChild(myHead)

// let myList = creat("ul")
// myList.className = "menu"
// myList.style.cssText = "list-style: none; display: flex; gap: 20px;"
// for (i = 1; i <= 4; i++){
//     let myLi = creat("li")
//     myLi.className = `menu-list-${i}`
//     myList.appendChild(myLi)
//     myLi.style.cssText = "cursor: pointer;"
// }
// myHead.appendChild(myList)
// document.querySelector(".menu-list-1").textContent = "Home"
// document.querySelector(".menu-list-2").textContent = "About"
// document.querySelector(".menu-list-3").textContent = "Services"
// document.querySelector(".menu-list-4").textContent = "Contact"

// // content
// let content = creat("div")
// content.className = "content"
// document.body.appendChild(content)
// for (i = 1; i <= 15; i++){
//     let myContent = creat("div")
//     let myProduct = creat("span")
//     myContent.appendChild(myProduct)
//     myContent.className = "product"
//     myContent.textContent = `${i}`
//     myProduct.textContent = "product"
    
       
//  content.style.cssText = "display: flex; gap: 20px; flex-wrap: wrap; padding: 20px; justify-content: center; box-sizing: border-box; min-height: calc(100vh - 142px)"
// myContent.style.cssText = "color: black; font-size: 20px; background-color: white; border: 1px solid rgb(221, 221, 221); padding: 20px; text-align: center; box-sizing: border-box; width: calc((100% - 40px) / 3); border-radius: 0.5rem"
//     myProduct.style.cssText = "padding: 15px; display: block; color: rgb(136, 136, 136); font-size: 14px "
//     myContent.appendChild(myProduct)
//     content.appendChild(myContent)
// }

// // footer
// let myFooter = creat("footer")
// myFooter.textContent = "copyright 2024"
// myFooter.style.cssText = "padding: 20px; text-align: center; color: white; background: rgb(39 102 39); font-size: 30px"
// document.body.appendChild(myFooter)


// odd , largest numbers
let lst = [3, 7, 3, 5, 11, 9, 7, 1]
let newLst = [];
let repeated = {};
lst.forEach(num => {
    // if (num % 2 === 1) {
    //      newLst.push(num)
    // }
    if (num === num && num % 2 !== 0) {
        
        repeated[num] = (repeated[num] || 0) + 1 
        
    }
})
repeated = Object.fromEntries(Object.entries(repeated).filter(([key, value]) => {
    if (value > 1) {
     return key
 }
}))
console.log(lst.sort().reverse().join(""))
//  for (let i = 0; i < lst.length; i++){
//         if (lst[i]) {
//             // return num
//             repeated++
//             newLst.push(lst[i])
//         }
//     }
console.log(repeated)
console.log(newLst)
 


//  string length 19/12/2025
function getString(str) {
    // let myString = Array.from(str);
    let rev = ""
    for (let i = str.length - 1; i >= 0; i--){
        rev += str[i];
        
    }
    return rev;
    // let stringNum = 0
    // myString.forEach( (lit) => {
    //     // // stringNum++
    // })
    
    // return stringNum
}
console.log(getString("abc"))
// function getString(str) {
//     let stringNum = 0
//     while (str[stringNum] !== undefined){
//             stringNum++
//  }
//     return stringNum
// }

console.log(getString("amira"));
console.log(getString("amira abdo"));



// count letters

let textArea = document.getElementById("text"),
    textSpan = document.getElementById("count"),
    maxLength = textArea.getAttribute('maxlength'),
    star = [];

star.push(textArea.value)
    console.log(star)
textArea.oninput = function () {
    textSpan.innerHTML = maxLength - this.value.length 
    
    if (textSpan.innerHTML == 0) {
        textSpan.classList.add("zero")
    } else {
        textSpan.classList.remove("zero")
    }
    }



// quiz

// select html elements
let questionsCount = document.querySelector(".q-count span"),
    bulletsContainer = document.querySelector(".bollutes .spans"),
    bollut = document.querySelector(".bollutes"),
    qArea = document.querySelector(".q-area"),
    answerArea = document.querySelector(".answar-area"),
    submitButton = document.querySelector(".submit-button"),
    myResult = document.querySelector(".results"),
    timer = document.querySelector(".bollutes .count-down"),
    mainTimer = document.querySelector(".time"),
    startQuiz = document.querySelector(".start"),
    questionIndex = 0,
    rightAnswers = 0,
    interval;
let intervals;
function creatBollutes(num) {
    questionsCount.innerHTML = num
    for (let i = 0; i < num; i++){
        let bolluteSpan = document.createElement("span")
        if (i === 0) {
            bolluteSpan.className = "on"
        }
    bulletsContainer.appendChild(bolluteSpan)
    }
    
} 
startQuiz.onclick = function () {
        setTimer(150, 11)
        getQuestions()
            }
function getQuestions() {
    const request = new XMLHttpRequest()

    request.onreadystatechange = function () {
        if (this.readyState === 4 & this.status === 200) {
            let converJson = JSON.parse(this.responseText)
            let countSpan = converJson.length
            creatBollutes(countSpan);
           addQuestions(converJson[questionIndex], countSpan)
            countDown(3, countSpan);
              
             submitButton.onclick = function () {
        
        let rAnswer = converJson[questionIndex].right_answer; 
        checkAnswer(rAnswer, countSpan)
        questionIndex++;
        qArea.innerHTML = ""
        answerArea.innerHTML = ""
        addQuestions(converJson[questionIndex], countSpan);
       
                 handleBollutes();
                 
        clearInterval(interval);
        countDown(3, countSpan)
            questionsCount.innerHTML--;
        showResult(countSpan);
        
            }
            
        }
       
            // submit
    }
    request.open("get", "data.json", true);
    request.send();
    }
    
    



function addQuestions(obj, count) {
    if(questionIndex < count){
        let questionText = document.createElement("h2")
    questionText.appendChild(document.createTextNode(obj["title"]))
    qArea.appendChild(questionText)

    //  answers
    for (let i = 1; i <= 4; i++){
        let answerDiv = document.createElement("div"),
            answerInput = document.createElement("input"),
            answerLabel = document.createElement("label")

        answerDiv.className = "answar"
       
        answerInput.name = "Questions"
        answerInput.id = `answar-${i}`
        answerInput.type = "radio"
        answerInput.dataset.answer = obj[`answar-${i}`]
        if (i === 1) {
            answerInput.checked = true
        }
        answerLabel.htmlFor = `answar-${i}`
        answerLabel.appendChild(document.createTextNode(obj[`answar-${i}`]))
    
        answerDiv.appendChild(answerInput)
        answerDiv.appendChild(answerLabel)
        answerArea.appendChild(answerDiv)
    }
    }
    
    }
    
    function checkAnswer(right, count) {
    let getAnswer = document.getElementsByName("Questions"),
        chosenAnswer;
    for (let i = 0; i < getAnswer.length; i++){
        if (getAnswer[i].checked) {
            chosenAnswer = getAnswer[i].dataset.answer;
        }

    }
    if (right === chosenAnswer) {
        rightAnswers++;
        
    }
    }


    function handleBollutes() {
        let bolluteSpans = document.querySelectorAll(".bollutes .spans span")
    let ArrayBollutes = Array.from(bolluteSpans)
    ArrayBollutes.forEach((span, index) => {
        if (questionIndex === index) {
                span.className = "on"
            }
    })
    
}
function showResult(count) {
    let yourAnswers;
    if (questionIndex === count) {
        qArea.remove();
        answerArea.remove();
        bollut.remove();
        submitButton.remove();
        if (rightAnswers > (count / 2) && rightAnswers < count) {
            yourAnswers = `<span>WELL DONE..</span> you answered <span>${rightAnswers}</span> from ${count}`
                myResult.classList.add("moderat")
        } else if (rightAnswers === count) {
            yourAnswers = `<span>AMAZING..</span> you answered <span>${rightAnswers}</span> from ${count}`
                myResult.classList.add("perfect")
        } else {
        yourAnswers = `<span>OH..</span> you just answered <span>${rightAnswers}</span> from ${count}`
            myResult.classList.add("bad")
        }
        myResult.innerHTML = yourAnswers
    }
}
function countDown(duration, count) {
    if (questionIndex < count) {
        let minutes, seconds;
        interval = setInterval(function () {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);
            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = seconds < 10 ? `0${seconds}` : seconds;
                timer.innerHTML = `<span>${minutes}</span> : <span>${seconds}</span>`   
            if (--duration < 0) {
                clearInterval(interval);
                if (questionIndex < count) {
                    submitButton.click()
                }
                }
        },1000)
    }
}
 
function setTimer(duration, count) {
    if (questionIndex < count) {
        let minutes, seconds;
        intervals = setInterval(function () {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);
            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = seconds < 10 ? `0${seconds}` : seconds;
            mainTimer.innerHTML = `<span>${minutes}</span> : <span>${seconds}</span>`
            duration--
            if (questionIndex === count) {
                clearInterval(intervals);
                }
        },2500)
    }
}
    
   

// end quiz 17 / 12 / 2025


// start color box

let lis = document.querySelectorAll("ul li")
let exm = document.querySelector(".experiment")
if (window.localStorage.getItem("color")) {
    exm.style.backgroundColor = window.localStorage.getItem("color")
    lis.forEach((li) => {
        li.classList.remove("active")
    })
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")
    
    lis.forEach((li) => {
        li.addEventListener("click", e => {
            lis.forEach((li) => {
                li.classList.remove("active")
            })
            e.currentTarget.classList.add("active")
            window.localStorage.setItem("color", e.currentTarget.dataset.color)
            exm.style.backgroundColor = e.currentTarget.dataset.color
        })
    })



    // slider
    let sliderImage = Array.from(document.querySelectorAll(".slider-content img"))
    let currentSlide = 1
    let sliderNumb = document.getElementById("slider-numb")
    let nextButten = document.getElementById("next")
    let prevButten = document.getElementById("prev")
    // next and prev function
    // function nextSlide() {
    //     console.log("next")
    // }

    // handel next and prev buttons
    nextButten.addEventListener("click", function () {
        if (nextButten.classList.contains("disable")) {
        
        } else {
            currentSlide++
            theChecker()
        }
    })
    prevButten.addEventListener("click", function () {
        if (prevButten.classList.contains("disable")) {
        
        } else {
            currentSlide--
            theChecker()
        }
    })

    // ballutes
    let indicators = document.getElementById("indicators")
    let indicatorsList = document.createElement("ul")
    indicatorsList.setAttribute("id", "indicatorsList-ul")

    for (let i = 1; i <= sliderImage.length; i++) {
        let indicatorsListLis = document.createElement("li")
        indicatorsListLis.setAttribute("data-index", i)
        let lisText = document.createTextNode(i)
        indicatorsListLis.appendChild(lisText)
        indicatorsList.appendChild(indicatorsListLis)
    }
    indicators.appendChild(indicatorsList)
    // handle class active
    let newUl = document.getElementById("indicatorsList-ul")
    let createdListUl = Array.from(document.querySelectorAll("#indicatorsList-ul li"));

    for (let i = 0; i < createdListUl.length; i++) {
        createdListUl[i].addEventListener("click", function () {
            currentSlide = parseInt(this.getAttribute("data-index"))
            theChecker()
        })
    }

    function theChecker() {
        sliderNumb.textContent = "slide #" + (currentSlide) + " of " + (sliderImage.length)

        removeActive()

        sliderImage[currentSlide - 1].classList.add("active")
        newUl.children[currentSlide - 1].classList.add("active")

        // check if slide number is the first
        if (currentSlide == 1) {
            prevButten.classList.add("disable")
        } else {
            prevButten.classList.remove("disable")
        }
        // check if slide number is last
        if (currentSlide == sliderImage.length) {
            nextButten.classList.add("disable")
        } else {
            nextButten.classList.remove("disable")
        }
    }
    theChecker()

    // remove class active 
    function removeActive() {
        sliderImage.forEach(function (img) {
            img.classList.remove("active")
        })
        createdListUl.forEach(function (bullet) {
            bullet.classList.remove("active")
        })
    }
    // slider

    // add tasks

    let taskInput = document.querySelector(".add-task input"),
        addButten = document.querySelector(".add-task .plus")
    taskContent = document.querySelector(".task-content"),
        tasksCount = document.querySelector(".tasks-count span"),
        tasksCompleted = document.querySelector(".tasks-completed span"),
   
        // window.onload = function () {
        //     taskInput.focus()
        // }

        addButten.addEventListener("click", function () {
            if (taskInput.value === "") {
                window.Swal.fire({
                    icon: "error",
                    title: "OOPs...",
                    text: "Task input is empty"
                })
        
            } else {
                deletAll()
                let tasks = document.querySelectorAll(".task-box")
                let taskExist = false;
                tasks.forEach(function (task) {
                    let taskText = task.childNodes[0].textContent.trim();
                    if (taskText === taskInput.value.trim()) {
                        taskExist = true;
                    }
                });

                if (taskExist) {
            
                    window.Swal.fire({
                        icon: "error",
                        title: 'Oops...',
                        text: 'Task already exists!',
                    })
           
                } else {
                    noTaskMsg = document.querySelector(".task-content .no-tasks");
            
                    if (document.body.contains(noTaskMsg)) {
                        noTaskMsg.remove();
                    }
                    let mainSpan = document.createElement("span")
                    let deleteButton = document.createElement("span")
                    mainSpan.className = "task-box"
                    deleteButton.className = "delete"
                    spanText = document.createTextNode(taskInput.value)
                    buttonText = document.createTextNode("Delete")
                    mainSpan.appendChild(spanText)
                    deleteButton.appendChild(buttonText)
                    mainSpan.appendChild(deleteButton)
                    taskContent.appendChild(mainSpan)
                    taskInput.value = ""
                    taskInput.focus()
                    tasksCalculation()
                    window.localStorage.setItem("task", taskContent.innerHTML)
            
                }
            }
        })
    taskContent.innerHTML = window.localStorage.getItem("task")
    document.addEventListener("click", function (e) {
        if (e.target.className === "delete") {
            e.target.parentNode.remove()
            window.localStorage.setItem("task", taskContent.innerHTML)
            if (taskContent.childElementCount == 0) {
                creatNoTaskMsg()
            }
            tasksCalculation()
        }
        if (e.target.classList.contains("task-box")) {
            e.target.classList.toggle("finshed")
            tasksCalculation()
        }
        tasksCalculation()
    })
    function tasksCalculation() {
        tasksCount.innerHTML = document.querySelectorAll(".task-content .task-box").length,
            tasksCompleted.innerHTML = document.querySelectorAll(".task-content .finshed").length
    }
    function creatNoTaskMsg() {
        let noMsg = document.createElement("span")
        noMsg.className = "no-tasks"
        noMsg.appendChild(document.createTextNode("no tasks to show"))
        taskContent.appendChild(noMsg)

    }
    let delAll = document.createElement("butten")
    let finishAll = document.createElement("butten")
    finishAll.appendChild(document.createTextNode("Finish All"))
    finishAll.className = "finish-all"
    delAll.appendChild(document.createTextNode("Delete All"))
    delAll.className = "delete-all"
    let taskState = document.querySelector(".task-state")
    taskState.appendChild(delAll)
    taskState.appendChild(finishAll)
    function deletAll() {

        delAll.addEventListener("click", function () {
            let allTasks = document.querySelectorAll(".task-content .task-box")
            allTasks.forEach(function (task) {
                task.remove()
            })
        })
        finishAll.onclick = function () {
            let allTask = document.querySelectorAll(".task-box")
            allTask.forEach(function (task) {
                task.classList.toggle("finshed");
            })
        }
        // finishAll.addEventListener("click", function () {
        //         let allTask = document.querySelectorAll(".task-box")
        //         allTask.forEach(function (task) {
        //             task.classList.toggle("finshed");
        // })
        // })
    }


    // add tasks

    // repos
    let repoInput = document.querySelector(".get-repos input"),
        getButton = document.querySelector('.get-button'),
        showRepos = document.querySelector(".show-data")

    getButton.onclick = function () {
        getRepos()
    }
    function getRepos() {
        if (repoInput.value == "") {
            let sp = document.createElement("span")
            sp.appendChild(document.createTextNode("Please Inter User Name"))
            sp.style.cssText = "background-color: red; color: white; padding: 15px; font-size: 20px"
            showRepos.appendChild(sp)
        
        } else {
        
            fetch(`https://api.github.com/users/${repoInput.value}/repos`)
                .then((response) => response.json())
                .then((repos) => {
                    showRepos.innerHTML = ""
                    repos.forEach(repo => {
                        let repoDiv = document.createElement("div")
                        repoDiv.appendChild(document.createTextNode(repo.name))
                        let divLink = document.createElement("a")
                        divLink.appendChild(document.createTextNode("Visit"))
                        divLink.href = `https://github.com/${repoInput.value}/${repo.name}`
                        divLink.setAttribute("target", "_blank_")
                        repoDiv.appendChild(divLink)

                        let repoSpan = document.createElement("span")
                        repoSpan.appendChild(document.createTextNode(`stars ${repo.stargazers_count}`))
                        repoDiv.className = "repos-box"
                        repoDiv.appendChild(repoSpan)
                        showRepos.appendChild(repoDiv)
                    })
                })
            
        }
    }
    // repos


    // vars
    let ty = document.querySelector(".input")
    let btn = document.querySelector(".add")
    let ta = document.querySelector(".tasks")

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (ty.value.length < 5) {
       
            window.Swal.fire({
                title: "OoPs...",
                text: "inter more than 5 charchters",
            })
        }
        if (ty.value.length >= 5 && ty.value.length <= 30) {
            let task = document.createElement("div")
            task.classList.add("task")
            let p = document.createElement("p")
            let del = document.createElement("button")
            del.classList.add("del")
            p.textContent = ty.value
            del.textContent = "Delete"
            task.appendChild(p)
            task.appendChild(del)
            ta.appendChild(task)
            task.style.cssText = "padding: 5px; background-color: white; margin: 5px 10px; display: flex; justify-content: space-between; align-items: center; border-radius: 5px; font-size: 14px"
            del.style.cssText = "background-color: #ff4400; color: white; border: none; padding: 2px 5px; cursor: pointer"

            del.addEventListener("click", () => {
            
                task.remove()
                window.localStorage.setItem("tasks", ta.innerHTML)
                if (ta.innerHTML === "") {
                    ta.style.cssText = "height: 50px"
                }
            })
            if (ta.innerHTML !== "") {
                ta.style.cssText = "height: fit-content"
            }
            window.localStorage.setItem("tasks", ta.innerHTML)
        }
    
    })
    ta.innerHTML = window.localStorage.getItem("tasks")
    if (ta.innerHTML === "") {
        ta.style.cssText = "height: 50px"
    }
    let task = document.querySelector(".task")
    let del = document.querySelectorAll(".del")

    for (let i = 0; i < del.length; i++) {
        del[i].addEventListener("click", function () {
            if (del[i].className === "del") {
                del[i].parentNode.remove()
                window.localStorage.setItem("tasks", ta.innerHTML)
                if (ta.innerHTML === "") {
                    ta.style.cssText = "height: 50px"
                }

            }
        })
    }


    let chosen = 3
    let myFriends = [
        { title: "Osama", age: 39, avaliable: true, skills: ["html", "css"] },
        { title: "Ahmed", age: 25, avaliable: false, skills: ["java", "python"] },
        { title: "Ali", age: 33, avaliable: true, skills: ["php", "larva"] },
    ]

    if (chosen === 1) {
        let [{ title, age, avaliable = "avaliable", skills: [, c] }, ,] = myFriends
        if (avaliable === true) {
            avaliable = "avaliable"
        } else {
            avaliable = "not avaliable"
        }
        console.log(title)
        console.log(age)
        console.log(avaliable)
        console.log(c)
    } else if (chosen === 2) {
        let [, { title, age, avaliable = "avaliable", skills: [, c] },] = myFriends
        if (avaliable === true) {
            avaliable = "avaliable"
        } else {
            avaliable = "not avaliable"
        }
        console.log(title)
        console.log(age)
        console.log(avaliable)
        console.log(c)
    } else if (chosen === 3) {
        let [, , { title, age, avaliable = "avaliable", skills: [, c] }] = myFriends
        if (avaliable === true) {
            avaliable = "avaliable"
        } else {
            avaliable = "not avaliable"
        }
        console.log(title)
        console.log(age)
        console.log(avaliable)
        console.log(c)
    }

    let n1 = [10, 30, 10, 20]
    let n2 = [30, 20, 10]
    // 210 *
    // let n3 = [...n1, ...n2]
    console.log(Math.max(...Array.from([...n1, ...n2], (e) => e * [...n1, ...n2].length)))

    // solution 2

    console.log(Array.from(n1, (e) => e * n2.length).reduce(function (acc, current) {
        return acc + current
    }))


    let names = "osamaz 1ahmedZ"
    console.log(names.match(/\w{5}(?=z)/ig))

    let url1 = "elzero.org"
    let url2 = "http://elzero.org"
    let url3 = "https://elzero.org"
    let url4 = "https://WWW.elzero.org"
    let url5 = "https://WWW.elzero.org:8000/articles.php?id=100&cat=topics"
    let url6 = "https://WWW.elzero.acadimey:8000/articles.php"
    let re = /(http:\/\/|https:\/\/)?(www.)?\w+.\w+(:\d+\/\w+.\w+)?(\W\w+\W\d+\W\w+\W\w+)?/ig
    console.log(url1.match(re))
    console.log(url2.match(re))
    console.log(url3.match(re))
    console.log(url4.match(re))
    console.log(url5.match(re))
    console.log(url6.match(re))

    class User {
        #e;
        constructor(id, username, esalary) {
            this.i = id
            this.u = username
            this.#e = esalary
        }
        get() {
            return parseInt(this.#e)
        }
    }

    class newUser extends User {
        #e;
        constructor(id, username, esalary, pass) {
            super(id, username, esalary)
            this.p = pass
        }
        //     get() {
        //     return parseInt(this.#e)
        //}
    }
}