import  {validateTitle,validatePriority,validateDueDate} from "./validator.js";

let tasks = [];
function addTask(title, priority, dueDate) {
    if(!validateTitle()||!validatePriority()||!validateDueDate()){
        return "Invalid task"
    }
    tasks.push({title,priority,dueDate})
    console.log("Added Successfully")
}

// 2. Get all tasks
function getAllTasks() {
     console.log(tasks)  
}

function completeTask(taskId) {
    tasks.splice(taskId-1,1)
    console.log("removed the Task from TODO")
}

export {addTask,getAllTasks,completeTask}
