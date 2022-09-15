import Task from './Task';
import tasks from './variables';
import { saveTaskCondition } from './localsettings';
import footer from './footer';

/* ------------------- adding a task ------------------- */
function addTask(e) {
  e.preventDefault();
  const inputCreateTask = document.querySelector('.search-form__input');
  if (inputCreateTask.value !== '' && inputCreateTask.value !== undefined) {
    const taskElement = new Task(inputCreateTask.value);
    tasks.push(taskElement);
    taskElement.setTaskPage(taskElement);
    inputCreateTask.value = '';
    inputCreateTask.focus();
    saveTaskCondition();
    footer(tasks.length);
  }
}

export default addTask;
