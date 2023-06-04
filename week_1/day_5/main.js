console.log("connected");

class TaskRow{
    constructor(text, completed){
        this.text = text;
        this.completed = completed;
    }

    checkOrNo(){
        //keep track of the status of the checkbox 

        if (this.completed){
            this.completed = false;
        } else {
            this.completed = true;
        }

        //console.log(`checked change! now: ${this.completed}`);
    }

}

class UI{
    constructor(){
        //main IDs from the HTML file
        this.warningLabel = document.getElementById('warning-label');
        this.taskInput = document.getElementById('task-input');
        this.tableBody = document.getElementById('table-body');

        this.taskArray = [];        //fill with the tasks

        this.form = document.getElementById('form');
        this.form.addEventListener('submit', (e) => this.addTask(e)); 

    }

    //this is working
    addTask(e){
        e.preventDefault();     //don't refresh the page on submit
        //console.log('adding a new event now');

        let taskText = this.taskInput.value;
        this.warningLabel.innerHTML = "";       //start this blank

        this.taskInput.value = "";      //clear the text input area

        //check to make sure nothing empty was submitted
        if (taskText === ""){
            this.warningLabel.innerHTML = "Please insert a task before pressing submit";
            return;
        }

        let task = new TaskRow(taskText, false);
        //console.log(`input task: ${taskText}`);
        this.taskArray.push(task);

        this.createRow(task);
    }

    deleteTask(task){
        //console.log(`entering the delete function for task: ${task.text}`);
        this.tableBody.innerHTML = "";
        task.text = "";

        for (let i = 0; i < this.taskArray.length; i++){
            const currTask = this.taskArray[i];

            if (currTask.text !== ""){
                this.createRow(currTask);
            }
        }
    }

    createRow(task){
       //console.log('creating a new row');

       const tableRow = document.createElement('tr');
       const delButton = document.createElement('button');
       const checkBox = document.createElement('input');

       //td is for the cells
       const tdTask = document.createElement('td');
       const tdCheckBox = document.createElement('td');
       const tdButton = document.createElement('td');
       tdButton.appendChild(delButton);

        //changing the attributes
        tdTask.innerHTML = task.text;

        tdCheckBox.appendChild(checkBox);
        checkBox.type = 'checkbox';
        checkBox.setAttribute('class', 'form-check-input');
        checkBox.addEventListener('click', () => task.checkOrNo());
        this.boxSetup(checkBox, task.completed);

        delButton.setAttribute("class", "btn btn-outline-light");
        delButton.innerHTML = '🗑️';
        delButton.addEventListener('click', () => this.deleteTask(task));

        //adding things back to the row
       tableRow.appendChild(tdTask);
       tableRow.appendChild(tdCheckBox);
       tableRow.appendChild(tdButton);

       //adding the row to the table body
       this.tableBody.appendChild(tableRow);


       //maybe add a taskRow object??
    }

    boxSetup(box, bool){
        if (bool){
            //the box should be checked, so set the check box to checked
            box.setAttribute('id', 'flexCheckChecked');
            box.setAttribute('checked', true);
        } else {
            //the box shouldn't be checked, so set check box to unckeched
            box.setAttribute('id', 'flexCheckDefault');
        }
    }

}

let ui = new UI();