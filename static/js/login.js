const params = new URLSearchParams(window.location.search);

const role = params.get("role");

document.getElementById("roleTitle").innerHTML = role.toUpperCase();

document.getElementById("show").onclick=()=>{

let p=document.getElementById("password");

p.type=p.type==="password"?"text":"password";

}

document.getElementById("registerLink").href="register.html?role="+role;

document.getElementById("loginForm").onsubmit=function(e){

e.preventDefault();

const username=document.getElementById("username").value;

const password=document.getElementById("password").value;

console.log(username,password,role);

/*

FASTAPI API

POST

/login

*/

alert("Login API will be connected later.");

}