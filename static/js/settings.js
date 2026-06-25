console.log("Settings Loaded");

// --------------------------
// Dark Mode
// --------------------------

const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("change", function(){

if(this.checked){

document.body.style.background="#111827";

document.body.style.color="white";

showToast("Dark Mode Enabled");

}

else{

document.body.style.background="#F8FAFC";

document.body.style.color="black";

showToast("Dark Mode Disabled");

}

});

// --------------------------
// Logout
// --------------------------

document.getElementById("logoutBtn").onclick=function(){

showToast("Logout Feature Coming Soon");

};

// --------------------------
// Account Buttons
// --------------------------

document.querySelectorAll(".setting-card button").forEach(button=>{

button.onclick=function(){

showToast(this.innerText+" Coming Soon");

};

});