const API_URL = "http://Todo-backend-env.eba-zv3zrdie.ap-south-1.elasticbeanstalk.com/tasks";

function fetchTasks() {
fetch(API_URL)
.then(response => response.json())
.then(data => {

```
        console.log("Tasks:", data);

        const taskList = document.getElementById("taskList");
        taskList.innerHTML = "";

        data.forEach(task => {
            const li = document.createElement("li");
            li.textContent = task.task;
            taskList.appendChild(li);
        });

    })
    .catch(error => console.log("Fetch Error:", error));
```

}

function addTask() {

```
const taskInput = document.getElementById("taskInput").value;

fetch(API_URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ task: taskInput })
})
.then(response => response.json())
.then(data => {
    console.log("Added:", data);
    fetchTasks();
    document.getElementById("taskInput").value = "";
})
.catch(error => console.log("POST Error:", error));
```

}

fetchTasks();
