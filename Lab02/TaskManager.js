'use strict';

class TaskManager {
    constructor(tasksInfo, id, callback) {
        this.id = id;
        this.callback = callback;
        this.tasks = tasksInfo;
    }

    render(date) {
        console.log("Date check inside render", date);

        document.getElementById(this.id).innerHTML = '';

        const datePicker = document.createElement('div');
        datePicker.classList.add('date-picker');

        const prevButton = document.createElement('button');
        prevButton.innerText = 'Previous';
        prevButton.addEventListener('click', () => this.render(new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000)));

        const nextButton = document.createElement('button');
        nextButton.innerText = 'Next';
        nextButton.addEventListener('click', () => this.render(new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000)));

        const dateRange = document.createElement('div');
        dateRange.innerText = `Week of ${date.toDateString()} to `;
        dateRange.appendChild(document.createTextNode(new Date(date.getTime() + 6 * 24 * 60 * 60 * 1000).toDateString()));

        datePicker.appendChild(prevButton);
        datePicker.appendChild(dateRange);
        datePicker.appendChild(nextButton);

        document.getElementById(this.id).appendChild(datePicker);

        const weekStartDate = new Date(date);
        weekStartDate.setDate(weekStartDate.getDate() - date.getDay());
        const weekEndDate = new Date(weekStartDate);
        weekEndDate.setDate(weekEndDate.getDate() + 6);

        const weekTasks = this.tasks.filter(task => task.dueDate >= weekStartDate && task.dueDate <= weekEndDate);

        const table = document.createElement('table');
        table.classList.add('task-table');

        const headerRow = document.createElement('tr');
        headerRow.innerHTML = `<th>Date</th><th>Task Name</th><th>Priority</th><th>Action</th>`;
        table.appendChild(headerRow);

        for (let i = 0; i < 7; i++) {
            const day = new Date(weekStartDate);
            day.setDate(weekStartDate.getDate() + i);

            const tasksForDay = weekTasks.filter(task => task.dueDate.toDateString() === day.toDateString());

            tasksForDay.forEach(task => {
              const row = document.createElement('tr');
          
              const detailsButton = document.createElement('button');
              detailsButton.innerText = 'Details';
          
              detailsButton.onclick = () => this.callback(task);
          
              row.innerHTML = `<td>${day.toDateString()}</td><td>${task.name}</td><td>${task.priority}</td><td></td>`;
              row.querySelector('td:last-child').appendChild(detailsButton);
              
              table.appendChild(row);
          });
          
        }

        document.getElementById(this.id).appendChild(table);
    }
}


