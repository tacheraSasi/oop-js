class Task{
    constructor(desc){
        this.desc = desc
        this.completed = false
    }
    toggleCompleted(){
        this.completed = !this.completed
    }
}

class ToDoList{
    constructor(){
        this.tasks = []
    }
    addTask(desc){
        const task = new Task(desc)
        this.tasks.push(task)
        this.render()
    }
    deleteTask(index){
        this.tasks.splice(index,1)
        this.render()
    }
    toggleTask(index){
        this.tasks[index].toggleCompleted()
        this.render()
    }
    render(){
        const taskList = document.getElementById("tasklist")
        taskList.innerHTML = ""
        this.tasks.forEach((task,index)=>{
            const taskItem = document.createElement("li")
            taskItem.textContent = task.desc
            taskItem.className = task.completed?'completed':''
            taskItem.onclick = ()=>{
                this.toggleTask(index)
            }

            const delBtn = document.createElement("button")
            delBtn.textContent = "delete"
            delBtn.onclick = (event)=>{
                event.stopPropagation()
                this.deleteTask(index)
            }
            taskItem.appendChild(delBtn)
            taskList.appendChild(taskItem)
        })
        console.log(this.tasks)
    }
}

const todolist = new ToDoList()
const addTask = ()=>{
    const taskInput = document.getElementById("task-input")
    let desc = taskInput.value.trim()
    if(desc){
        todolist.addTask(desc)
        taskInput.value = ""
    }
}
const addBtn = document.getElementById("add-btn")

addBtn.addEventListener("click",()=>{
    addTask()
})