import Task from './Task';
import tasks from './variables';
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

export default addTask;
