// =============================
// Dashboard Variables
// =============================

function animateCounter(id,value){

let start=0;

const speed=20;

const element=document.getElementById(id);

const timer=setInterval(()=>{

start++;

element.innerHTML=start;

if(start>=value){

clearInterval(timer);

}

},speed);

}

console.log("Leader Dashboard Loaded");

const searchBox = document.getElementById("searchTask");

searchBox.addEventListener("keyup", function () {

    const filter = searchBox.value.toLowerCase();

    const rows = document.querySelectorAll("#taskTable tr");

    rows.forEach(function (row) {

        const text = row.innerText.toLowerCase();

        row.style.display = text.includes(filter) ? "" : "none";

    });

});

const filter = document.getElementById("statusFilter");

filter.addEventListener("change", function () {

    const value = filter.value;

    const rows = document.querySelectorAll("#taskTable tr");

    rows.forEach(function (row) {

        if (value === "All") {

            row.style.display = "";

            return;

        }

        row.style.display = row.innerText.includes(value) ? "" : "none";

    });

});

/*

FastAPI Integration Later

GET /tasks

POST /tasks

PUT /tasks/{id}

DELETE /tasks/{id}

*/

// --------------------
// Modal
// --------------------

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveStorage(){

    localStorage.setItem("tasks",JSON.stringify(tasks));

}

function renderTasks(){

    const table=document.getElementById("taskTable");

    table.innerHTML="";

    if(tasks.length===0){

    table.innerHTML=`

    <tr>

    <td colspan="7"

    style="padding:60px;text-align:center;color:gray;">

    <h2>📂</h2>

    <h3>No Tasks Found</h3>

    <p>Create your first task.</p>

    </td>

    </tr>

    `;

    document.getElementById("totalTasks").innerHTML=0;

    document.getElementById("completedTasks").innerHTML=0;

    document.getElementById("pendingTasks").innerHTML=0;

    document.getElementById("progressTasks").innerHTML=0;

    return;

    }

    let completed=0;

    let pending=0;

    let progress=0;

    tasks.forEach((task,index)=>{

        if(task.status==="Completed") completed++;

        if(task.status==="Pending") pending++;

        if(task.status==="In Progress") progress++;

        table.innerHTML+=`

<tr>

<td>${index+1}</td>

<td>${task.name}</td>

<td>${task.assigned}</td>

<td><span class="${task.priority.toLowerCase()}">${task.priority}</span></td>

<td>${task.deadline}</td>

<td><span class="${task.status.toLowerCase().replace(" ","")}">${task.status}</span></td>

<td>

<button class="edit" onclick="editTask(${index})">

<i class="fa-solid fa-pen"></i>

</button>

<button class="delete" onclick="deleteTask(${index})">

<i class="fa-solid fa-trash"></i>

</button>

</td>

</tr>

`;

    });

    animateCounter("totalTasks",tasks.length);

    animateCounter("completedTasks",completed);

    animateCounter("pendingTasks",pending);

    animateCounter("progressTasks",progress);

}

renderTasks();

const modal=document.getElementById("taskModal");

document.getElementById("addTask").onclick=function(){

document.getElementById("modalTitle").innerHTML="Add Task";

document.getElementById("taskForm").reset();

document.getElementById("taskId").value="";

modal.style.display="flex";

};

document.getElementById("closeModal").onclick=function(){

modal.style.display="none";

};

document.getElementById("cancelBtn").onclick=function(){

modal.style.display="none";

};

document.getElementById("taskForm").onsubmit = function (e) {

    e.preventDefault();

    const id = document.getElementById("taskId").value;

    const task = {

        name: document.getElementById("taskName").value,

        assigned: document.getElementById("assignedTo").value,

        priority: document.getElementById("priority").value,

        deadline: document.getElementById("deadline").value,

        status: document.getElementById("status").value

    };

    if (id === "") {

        tasks.push(task);

        showToast("Task Added Successfully");

    }

    else {

        tasks[id] = task;

        showToast("Task Updated Successfully");

    }

    saveStorage();

    renderTasks();

    modal.style.display = "none";

    document.getElementById("taskForm").reset();

};

function editTask(id){

document.getElementById("modalTitle").innerHTML="Edit Task";

const task=tasks[id];

taskId.value=id;

taskName.value=task.name;

assignedTo.value=task.assigned;

priority.value=task.priority;

deadline.value=task.deadline;

status.value=task.status;

modal.style.display="flex";

}

function deleteTask(id){

if(confirm("Are you sure?")){

tasks.splice(id,1);

saveStorage();

renderTasks();

}

}

window.onclick=function(e){

if(e.target===modal){

modal.style.display="none";

}

}

const toast=document.getElementById("toast");


const menu=document.querySelector(".menu-btn");

const sidebar=document.querySelector(".sidebar");

menu.onclick=function(){

sidebar.classList.toggle("show");

}

const menuItems=document.querySelectorAll(".sidebar li");

menuItems.forEach(item=>{

item.onclick=function(){

menuItems.forEach(i=>i.classList.remove("active"));

this.classList.add("active");

}

});