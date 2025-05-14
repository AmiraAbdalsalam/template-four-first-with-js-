repoPlace = document.getElementById("repo-input");

repoPlace.onfocus = function () {
    // 'use strict';
    this.setAttribute('copy-attr', this.getAttribute('placeholder'));
    this.setAttribute('placeholder', '');
}

repoPlace.onblur = function () {
    // 'use strict';
    this.setAttribute('placeholder', this.getAttribute('copy-attr'));
    this.setAttribute('copy-attr', '');
}






let myText = 'Hello I Am Amira Abdalsalam.',
    buttonOne = document.getElementById("button-one"),
    typeDiv = document.querySelector('.typing'),
    i = 0;

buttonOne.onclick = function () {
    'use strict'
    let pargraph = document.createElement('p');
    pargraph.id = 'text-one';
    typeDiv.appendChild(pargraph)
    
        let typing = setInterval(() => {
            document.getElementById('text-one').textContent += myText[i];
            i = i + 1
            
            if (i > myText.length - 1) {
                clearInterval(typing)
            }
        }, 200);
    }



    // password 1/2/2025

let passInput = document.querySelector(".pass")
let passIcon = document.querySelector("i")
let passForm = document.querySelector(".pass-form")
        let creatIcon = document.createElement("i")
creatIcon.className = "fa-solid fa-eye-slash"
    creatIcon.style.cssText = "font-size: 20px; font-weight: 800; color: red"
passIcon.onclick = function () {
    passInput.setAttribute("type", "text")

    passForm.appendChild(creatIcon)
    passIcon.remove()
}
creatIcon.onclick = function () {
    passInput.setAttribute("type", "password")
    creatIcon.remove()
    passForm.appendChild(passIcon)
}