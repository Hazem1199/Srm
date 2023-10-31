// function signIn() {
//     let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"
//     let form = document.createElement('form')
//     form.setAttribute('method', 'POST')
//     form.setAttribute('action', oauth2Endpoint)

//     let params = {
//         "client_id": "768857244422-1b8mje373gjmjsi5hdv7kcatja1roos2.apps.googleusercontent.com",
//         "redirect_uri": "http://127.0.0.1:5501/SRM.html",
//         "response_type": "token",
//         "scope": "https://www.googleapis.com/auth/userinfo.profile",
//         "include_granted_scopes": "true",
//         "clientSecret": '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',
//         'state': 'pass-through-value'
//     }

//     for (var p in params) {
//         let input = document.createElement('input')
//         input.setAttribute('type', 'hidden')
//         input.setAttribute('name', p)
//         input.setAttribute('value', params[p])
//         form.appendChild(input)
//     }
//     console.log();

//     document.body.appendChild(form)
//     form.submit()
// }


// var loadingDiv = document.querySelector(".loading-div");

// var overlay = document.createElement("div");
// overlay.style.position = "fixed";
// overlay.style.display = "none";
// overlay.style.top = "0";
// overlay.style.left = "0";
// overlay.style.width = "0%";
// overlay.style.height = "0%";
// overlay.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
// // overlay.style.backdropFilter = "blur(5px)";
// overlay.style.zIndex = "1";
// document.body.appendChild(overlay);

// function change() {
//     loadingDiv.style.display = "block";
//     overlay.style.display = "block";
// }

// function hide() {
//     overlay.style.display = "none";
//     loadingDiv.style.display = "none";
// }




// const file = window.location.pathname + "/index.html";
// const destination = "http://127.0.0.1:5501/index.html";

// async function transferFile() {
//     const response = await fetch(file);
//     const data = await response.text();

//     const xhr = new XMLHttpRequest();
//     xhr.open("PUT", destination);
//     xhr.setRequestHeader("Content-Type", "text/html");
//     xhr.send(data);
// }

// transferFile();

const spinnerLog = document.querySelector('#spinnerLog')
function show() {
    spinnerLog.style.display = "block";
}

function hide() {
    spinnerLog.style.display = "none";
}


const form = document.querySelector('.form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const myButton = document.querySelector('.myButton');
var correct = false;
var count = 0;

//old api : https://script.google.com/macros/s/AKfycbzx8H-FSFyj8P5VMxSx5n47ddnurdrbuhCXHr0VEN5ZjbferzGecElgJdEv9mdX3l2X/exec

async function getdata() {
    const url = `https://script.google.com/macros/s/AKfycby74bvG7BwMd-CI4NsPUC_y2oB4PAKC7SH2q4aiHiR9hF1ZC3eMR5tKeNb0xx8cEk-r/exec`;
    response = await fetch(url);
    data = await response.json();
    return data;
}

myButton.addEventListener('click', async () => {
    show()
    var users = await getdata();


    users.forEach((user) => {
        console.log(user.Username + "  " + user.Password);
        console.log(username.value + "  " + password.value);
        if (username.value === user.Username && password.value == user.Password) {
            // alert('Done!');
            const emp = {
                username: user.Username,
                password: user.Password,
                role: user.Role,
                Code : user.Code
            }
            // console.log("test " + emp.username);
            localStorage.setItem('myUser', emp.username)
            localStorage.setItem('myCode', emp.Code)
            localStorage.setItem('myUserRole', emp.role)
            correct = true;
            return;
        }
        count++;
        console.log(count);

    }
    );


    if (correct == true) {
        hide()
        window.location.href = "../SRM.html";

    }
    else {
        hide()
        alert("incorrect Username or Password");
    }
});

// const togglePassword = document.querySelector('#togglePassword');


// togglePassword.addEventListener("click", function () {
//     // toggle the type attribute
//     const type = password.getAttribute("type") === "password" ? "text" : "password";
//     password.setAttribute("type", type);

//     // toggle the icon
//     this.classList.toggle("bi-eye");
// });

const passwordInput = document.querySelector('#password');
const passwordEye = document.querySelector('.password-eye');

passwordEye.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordEye.classList.add('fa fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        passwordEye.classList.remove('fa fa-eye-slash');
    }
});


//for pervent back btn of browser
function preventBack() { window.history.forward(); }
setTimeout("preventBack()", 0);
window.onunload = function () { null };




form.addEventListener('submit', (e) => {
    e.preventDefault();
    getdata();
});


