console.log("connected");

class Task{
    constructor(text){
        this.text = text;
    }

    static fromJSON(json) {
        return new Task(json.text);
    }
}

class UI{
    constructor(){
        this.taskArray = [];        //keep track of the tasks
        console.log(`starting task array: ${this.taskArray}`)
        this.form = document.getElementById('form');

        this.warningLabel = document.getElementById('warning-label');
        this.warningLabel.innerHTML = "";

        this.taskInput = document.getElementById('task-input');

        this.tableBody = document.getElementById('table-body');

        this.form.addEventListener('submit', (e) => this.addTask(e));

        //this.loadFromLocalStorage();
    }

    addTask(e){
        e.preventDefault();
        let ti = this.taskInput;
        let ta = this.taskArray;

        console.log(`submit clicked, task: ${ti.value}`);

        //if there was nothing input just return
        if (ti.value === '' ) {
            this.warningLabel.innerHTML = "Please enter a task before pressing 'add task'";
            return;
        } else {
            this.warningLabel.innerHTML = "";
        }

        const newTask = new Task(ti.value);
        ta.push(newTask);

        //save to local storage?
        this.updateTable();
    }

    deleteTask(task){

        let ta = this.taskArray;
        this.taskArray = ta.filter((x) => {
            return task.text !== x.task;
        });
        
        console.log(`deleted, new task array: ${this.taskArray}`);
      
        //save to local storage?
        this.updateTable();
    }

    updateTable() {
        //this.tableBody.innerHTML = '';
        this.tableBody.value = "";
    
        for (let i = 0; i < this.taskArray.length; i++) {
          const task = this.taskArray[i];
    
          const tr = this.createRow(task);
          this.tableBody.appendChild(tr);
        }

        this.taskInput.value = "";
    }

    createRow(task){
        const tr = document.createElement('tr');

        const tdTask = document.createElement('td');
        const tdComplete = document.createElement('input');
        const tdDeleteButton = document.createElement('button');

        //setting up the task cell
        tdTask.innerHTML = task.text;

        //setting up the checkbox cell
        tdComplete.type = 'checkbox';

        //setting up the delete button
        tdDeleteButton.setAttribute('class', 'btn btn-outline-danger');
        tdDeleteButton.innerHTML = '🗑️';
        tdDeleteButton.addEventListener('click', () => this.deleteTask(task));

        tr.appendChild(tdTask);
        tr.appendChild(tdComplete);
        tr.appendChild(tdDeleteButton);

        return tr;
    }

}

let ui = new UI();