/* eslint-disable default-case */
import addTask from './add';
import tasks from './variables';

import done from './done';
/* ------------------- call addTask ------------------- */
document.querySelector('.search-form').addEventListener('submit', addTask);

document.querySelector('.task-box__list').addEventListener('click', (e) => {
  const parentNode = e.target.closest('li');
  tasks.forEach((item) => {
    if (item.id == parentNode.id) {
      if (e.target.classList.contains('task-box__trash')) {
        item.deleteTask(parentNode);
      } else if (e.target.classList.contains('task-box__edit')) {
        item.editTask(parentNode);
      } else if (e.target.classList.contains('task-box__button')) {
        done(parentNode);
      }
    }
  });
});
