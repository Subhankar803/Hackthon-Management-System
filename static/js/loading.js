let text=document.getElementById("loadingText");

let messages=[

"Loading Dashboard...",

"Preparing Workspace...",

"Almost Ready...",

"Welcome to Mind Hackers"

];

let index=0;

setInterval(()=>{

index++;

if(index<messages.length){

text.innerHTML=messages[index];

}

},900);

/*

Later

Depending on login role

Redirect to

leader-dashboard.html

or

member-dashboard.html

using FastAPI Authentication

*/