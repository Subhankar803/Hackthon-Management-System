const params=new URLSearchParams(window.location.search);

const role=params.get("role");

document.getElementById("roleTitle").innerHTML=role.toUpperCase();

document.getElementById("loginLink").href="login.html?role="+role;

document.getElementById("show").onclick=()=>{

let a=document.getElementById("password");

let b=document.getElementById("confirm");

a.type=a.type==="password"?"text":"password";

b.type=b.type==="password"?"text":"password";

}

document.getElementById("registerForm").onsubmit=function(e){

e.preventDefault();

let p=document.getElementById("password").value;

let c=document.getElementById("confirm").value;

if(p!=c){

alert("Passwords do not match");

return;

}

console.log("Register",role);

/*

FASTAPI

POST

/register

*/

alert("Registration API will be connected later.");

}