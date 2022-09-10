import tasks from './variables';
/* this class generates a task object that has the following properties:
 ID, status(done) and task text.
The class contains the following methods:
1.Editing (editTask)
2.Setting to the page (setTaskPage)
3.Delete(deleteTask) */

class Task {
  /* ------------------- task object ------------------- */
  constructor(taskText) {
    this.id = Date.now();
    this.done = false;
    this.text = taskText;
  }
  /* ------------------- set task to page ------------------- */

  setTaskPage() {
    const tasksList = document.querySelector('.task-box__list');
    const element = document.createElement('li');
    element.classList.add('task-box__item');
    element.id = this.id;
    const html = `
         <button class="task-box__button" data-action ='done'></button>
         <div class="task-box__trash" data-action='delete'></div>
         <div class="task-box__edit" data-action='edit'></div>
         <div contenteditable='false' type="text" class="task-box__text">${this.text}</div>`;
    element.innerHTML = html;
    tasksList.prepend(element);
  }
  /* ------------------- edit task ------------------- */

  editTask(element) {
    const pencil = element.querySelector('.task-box__edit');
    const text = element.querySelector('.task-box__text');
    pencil.classList.toggle('available');
    if (pencil.classList.contains('available')) {
      document.addEventListener('click', (e) => {
        if (e.target !== pencil && pencil.classList.contains('available')) {
          pencil.classList.toggle('available');
        }
      });
      const selection = window.getSelection();
      const range = new Range();
      text.setAttribute('contenteditable', 'true');
      range.selectNodeContents(text);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    } else if (!pencil.classList.contains('available')) {
      text.setAttribute('contenteditable', 'false');
    }
  }
  /* ------------------- delete task ------------------- */

  deleteTask(element) {
    const index = tasks.findIndex((task) => task.id == element.id);
    tasks.splice(index, 1);
    element.remove();
  }
}

export default Task;
