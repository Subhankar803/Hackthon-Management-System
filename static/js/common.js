function showToast(message){

const toast=document.getElementById("toast");

if(!toast) return;

toast.innerHTML=message;

toast.style.display="block";

setTimeout(()=>{

toast.style.display="none";

},2500);

}

function closeModal(modal){

modal.style.display="none";

}

function openModal(modal){

modal.style.display="flex";

}

// ===========================
// Profile Dropdown
// ===========================

const profileHeader=document.querySelector(".profile-header");

const dropdown=document.querySelector(".dropdown-menu");

if(profileHeader){

profileHeader.onclick=function(e){

e.stopPropagation();

dropdown.classList.toggle("showDropdown");

}

window.onclick=function(){

dropdown.classList.remove("showDropdown");

}

}