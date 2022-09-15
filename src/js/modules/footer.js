import tasks from './variables';
import { numberGlossary } from './glossary';
import { saveTaskCondition } from './localsettings';
/* ------------------- footer ------------------- */

function footer(num) {
  if (num === 0 && document.querySelector('.task-box__footer')) {
    document.querySelector('.task-box__footer').remove();
  } else if (num > 0 && !document.querySelector('.task-box__footer')) {
    createFooterSection(num);
  } else if (num > 0 && document.querySelector('.task-box__footer')) {
    updateNumberFooter();
  }

  function createFooterSection() {
    const taskBox = document.querySelector('.task-box__list');
    const li = document.createElement('li');
    li.classList.add('task-box__footer');
    li.innerHTML = `
        <span class="task-box__number"><span class='task-box__numeric'>${num} </span><span class='lng-item task-box__numeric-text'>${numberGlossary(localStorage.getItem('lang') || 'en')}</span></span>
        <span class="task-box__delete"><span class='compleate lng-item'>Clear Complete</span></span>`;
    taskBox.append(li);
    updateNumberFooter();
    const clearAll = document.querySelector('.task-box__delete');
    clearAll.addEventListener('click', deleteAllCompTask);
  }
}

function deleteAllCompTask() {
  const deleteArr = [];
  tasks.forEach((item) => (item.done === true ? deleteArr.push(item.id) : ''));
  deleteArr.forEach((id) => {
    const elem = document.getElementById(`${id}`);
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    elem.remove();
  });
  updateNumberFooter();
  saveTaskCondition();
}

function updateNumberFooter() {
  const footerElement = document.querySelector('.task-box__footer');
  if (tasks.length === 0 && footer) {
    footerElement.remove();
  } else {
    footerElement.querySelector('.task-box__numeric').textContent = `${tasks.length}`;
    footerElement.querySelector('.task-box__numeric-text').textContent = numberGlossary(localStorage.getItem('lang') || 'en');
  }
}
export default footer;
export { updateNumberFooter };
