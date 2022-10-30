// set up variables

let theInput = document.querySelector('.add-task input'),
    addBtn   = document.querySelector('.add-task .plus'),
    tasksContainer = document.querySelector(".tasks-content");
    tasksCount = document.querySelector(".tasks-count span"),
    completedTasks = document.querySelector(".completed-tasks span");
    let tasksArr = [];
//focus on input field
window.onload = function()
{
    theInput.focus();
};


addBtn.onclick = function()
{
    if(theInput.value === "")
    {
        alert("Sorry Your task is empty");
        theInput.focus();
    }
    else
    {
        if(document.body.contains(document.querySelector(".no-tasks")))
        {
            document.querySelector(".no-tasks").remove()
        }
        
        addNewTask();

        checkIfExist();

        theInput.value="";
        theInput.focus();
        
    }
};

//creating new task
function addNewTask()
{
    let mainSpan = document.createElement("span"),
        taskContent = document.createElement("span"),
        deleteSpan = document.createElement("span");

        //create main span
        mainSpan.append(taskContent);
        taskContent.append(theInput.value);
        deleteSpan.append("Delete");

        //delete span
        deleteSpan.className = "delete";
        taskContent.className = "task-content";
        mainSpan.className = "task-box";

        //appending childs
        mainSpan.appendChild(taskContent);
        mainSpan.appendChild(deleteSpan);
        tasksContainer.appendChild(mainSpan);

        calculateTasks();
};

//deleting task event
document.addEventListener('click', function(e)
{
    if(e.target.className == "delete")
    {
        e.target.parentNode.remove();
    }
    if (e.target.className =="deleteAll") /////////Complete it
    {
        console.log(document.getElementById("task-box"))
    }
    if(e.target.className == "finishAll")/////////Complete it
    {
        document.querySelectorAll(".task-content")
    }

    if(tasksContainer.childElementCount == 0 )
        noTasksCreator();

        calculateTasks();
});


//finishing tasks event  ERROR --------------
document.addEventListener('click' , function(e)
{
    if(e.target.className == "task-content")
        {
            e.target.classList.add("finished");
            calculateTasks();
        }
        
});

//creating no tasks message
function noTasksCreator()
{
    let noTasks = document.createElement("span"),
        noTasksMsg = document.createTextNode("Gontratulations you finish all tasks");
    

        noTasks.append(noTasksMsg);
        noTasks.className = "no-tasks";
        tasksContainer.appendChild(noTasks);
};

//calculate tasks

function calculateTasks()
{
    //task count

        tasksCount.innerHTML = document.querySelectorAll(".task-box").length;

        completedTasks.innerHTML = document.querySelectorAll(".finished").length;

};


//check if task is found  ----------

function checkIfExist(value)
{
    let exist = document.querySelectorAll(".task-content");
    
    newTask();

    // if (tasksArr.includes(theInput.value)) {
    //     console.log("EE")
    // }

    function newTask()
    {
        tasksArr =[];

        exist.forEach(element => 
        {
            tasksArr.push(element.textContent);
        });
        console.log(tasksArr);
    }
    
    
}

// if(confirm("This task was added before do you want to add it again") == true)
//             {
//                 tasksArr.push(element.textContent);
//             }
//             else
//             {
//                 // tasksContainer.lastChild.remove();
//             }