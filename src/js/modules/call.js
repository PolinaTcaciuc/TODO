import tasks from './variables';
import addTask from './add';
/* ------------------- call addTask ------------------- */
document.querySelector('.search-form').addEventListener('submit', addTask);

document.querySelector('.task-box__list').addEventListener('click', (e) => {
  if (e.target.classList.contains('task-box__trash') || e.target.classList.contains('task-box__edit')) {
    const parentNode = e.target.closest('li');
    tasks.forEach((item) => {
      if (item.id == parentNode.id) {
        e.target.classList.contains('task-box__trash') ? item.deleteTask(parentNode) : item.editTask(parentNode);
      }
    });
  }
});
