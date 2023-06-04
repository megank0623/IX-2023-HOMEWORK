console.log("connected");

class Task{
    constructor(task){
        this.task = task;
    }

    static fromJSON(json) {
        return new Book(json.title, json.author, json.isbn);
    }
}

class UI{
    constructor(){
        this.tasksUsed = 0;         //keep track of the tasks used already
        this.taskArray = [true, true, true];        //keep track of the tasks - false if occupied
        this.form = document.getElementById('form');

        this.warningLabel = document.getElementById('warning-label');
        this.warningLabel.innerHTML = "";

        this.task1 = document.getElementById("task1");
        this.task2 = document.getElementById("task2");
        this.task3 = document.getElementById("task3");

        this.form.addEventListener('submit', (e) => this.addTask(e));
    }

    addTask(e){
        let taskArray = this.taskArray;
        console.log(taskArray);
        e.preventDefault();
        let task = document.getElementById('taskInput');
        console.log(`the input task was: ${task.value}`);

        if (this.tasksUsed === 3){
            console.log("Already have three tasks listed, need to delete one before adding others");
            this.warningLabel.innerHTML = "Sorry, please delete one of your tasks before adding another";
            task.value = "";
        } else {
            //check to see which task area is open
            if (taskArray[0]){
                this.task1.innerHTML = task.value;

                this.updateTable(0);

            } else if (taskArray[1]){
                this.task2.innerHTML = task.value;

                this.updateTable(1);
            } else {
                this.task3.innerHTML = task.value;

                this.updateTable(2);
            }
        }
    }

    deleteTask(){

    }


    updateTable(index){
        let task = document.getElementById('taskInput');
        
        //update values
        this.taskArray[index] = false;
        task.value = "";
        this.tasksUsed += 1;
        this.warningLabel.innerHTML = "";
    }


}

let ui = new UI();