const API_URL = "http://Backend-EBS-env.eba-7csmg6mp.ap-south-1.elasticbeanstalk.com/tasks";

function fetchTasks() {

fetch(API_URL)
.then(response => response.json())
.then(data => {

const taskList = document.getElementById("taskList");
taskList.innerHTML="";

data.forEach(task => {

const li = document.createElement("li");
li.textContent = task.task;
taskList.appendChild(li);

});

});

}

function addTask(){

const taskInput=document.getElementById("taskInput").value;

fetch(API_URL,{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({task:taskInput})

})

.then(response=>response.json())
.then(data=>{
fetchTasks();
document.getElementById("taskInput").value="";
});

}

fetchTasks();