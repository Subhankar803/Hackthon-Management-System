// =============================
// Dashboard Variables
// =============================

let tasks = JSON.parse(localStorage.getItem("memberTasks")) || [

{

name:"Frontend Design",

priority:"High",

deadline:"28 June",

status:"In Progress"

},

{

name:"Database Schema",

priority:"Medium",

deadline:"30 June",

status:"Pending"

},

{

name:"Testing",

priority:"Low",

deadline:"5 July",

status:"Completed"

}

];

function renderTasks(){

const table=document.getElementById("memberTable");

table.innerHTML="";

tasks.forEach((task,index)=>{

table.innerHTML+=`

<tr>

<td>${index+1}</td>

<td>${task.name}</td>

<td>

<span class="${task.priority.toLowerCase()}">

${task.priority}

</span>

</td>

<td>

${task.deadline}

</td>

<td>

<span class="${task.status.toLowerCase().replace(" ","")}">

${task.status}

</span>

</td>

<td>

<button

class="completeBtn"

onclick="viewTask(${index})">

View

</button>

</td>

</tr>

`;

});

}

renderTasks();

const search=document.getElementById("searchTask");

search.addEventListener("keyup",function(){

const value=search.value.toLowerCase();

const rows=document.querySelectorAll("#memberTable tr");

rows.forEach(row=>{

row.style.display=row.innerText.toLowerCase().includes(value)

? ""

: "none";

});

});

const filter=document.getElementById("statusFilter");

filter.addEventListener("change",function(){

const value=filter.value;

const rows=document.querySelectorAll("#memberTable tr");

rows.forEach(row=>{

if(value==="All"){

row.style.display="";

return;

}

row.style.display=row.innerText.includes(value)

? ""

: "none";

});

});

let currentTask = null;

const modal = document.getElementById("taskModal");

function viewTask(id){

currentTask=id;

const task=tasks[id];

taskName.innerHTML=task.name;

taskPriority.innerHTML=task.priority;

taskDeadline.innerHTML=task.deadline;

taskStatus.innerHTML=task.status;

modal.style.display="flex";

}

document.getElementById("closeModal").onclick=function(){

modal.style.display="none";

}

document.getElementById("completeTask").onclick=function(){

tasks[currentTask].status="Completed";

localStorage.setItem("memberTasks",

JSON.stringify(tasks));

renderTasks();

updateDashboard();

showToast("Task Completed");

modal.style.display="none";

}

function updateDashboard(){

let completed=0;

tasks.forEach(task=>{

if(task.status==="Completed"){

completed++;

}

});

assigned.innerHTML=tasks.length;

pending.innerHTML=tasks.length-completed;

document.getElementById("completed").innerHTML=completed;

let percent=Math.round((completed/tasks.length)*100);

progressFill.style.width=percent+"%";

progressText.innerHTML=percent+"%";

}


updateDashboard();

window.onclick=function(e){

if(e.target===modal){

modal.style.display="none";

}

}