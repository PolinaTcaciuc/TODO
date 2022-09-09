import '../index.html';
import '../scss/style.scss';

/* ------------------- variables ------------------- */
const form = document.querySelector('.search-form');
let tasks = [];

form.addEventListener('submit', addTask);
/* ------------------- adding a task ------------------- */
function addTask(e) { 
  e.preventDefault();
  const inputCreateTask = document.querySelector('.search-form__input');
  if (inputCreateTask.value !== '' && inputCreateTask.value !== undefined) {
    const taskElement = new Task(inputCreateTask.value);
    tasks.push(taskElement);
    taskElement.setTaskPage();
    inputCreateTask.value = '';
    inputCreateTask.focus();
  }
}

class Task {
  /* ------------------- task object ------------------- */
  constructor(taskText) {
    this.id = Date.now();
    this.done = false;
    this.text = taskText;
  }
  /* ------------------- set task to page ------------------- */

  setTaskPage() {
    const cssClass = this.done ? 'complete' : 'no-complete';
    const cssButtonClasses = this.cssClass === 'complete' ? 'complete-btn' : 'no-complete-btn';
    const html = `
       <button class="${cssButtonClasses}" data-action ='done'></button>
       <div class="delete" data-action='delete'></div>
       <div class="edit" data-action='edit'></div>
       <div contenteditable='false' type="text" class="${cssClass}">${this.text}</div>`;
    const element = document.createElement('li');
    const tasksList = document.querySelector('.task-box__list');
    element.classList.add('task-box__item');
    element.innerHTML = html;
    tasksList.prepend(element);
  }
}
