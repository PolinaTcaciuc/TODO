import setLang from './glossary';
import theme from './theme';
import tasks from './variables';
import Task from './Task';

function localsettings() {
  /* ------------------- tasks ------------------- */

  if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((task) => {
      task.__proto__ = new Task();
      task.setTaskPage(task);
      saveTaskCondition();
    });
  }
  const toggleTheme = document.querySelector('.header__theme__toggle');
  /* ------------------- local language ------------------- */
  if (localStorage.getItem('lang') === 'ru') {
    document.querySelector('.language-box__item--rus').classList.add('active-lang');
    document.querySelector('.language-box__item--eng').classList.remove('active-lang');
    setLang('ru');
  } else {
    document.querySelector('.language-box__item--rus').classList.remove('active-lang');
    document.querySelector('.language-box__item--eng').classList.add('active-lang');
    setLang('en');
  }
  /* ------------------- local theme ------------------- */
  if ((localStorage.getItem('theme') === 'dark')) {
    toggleTheme.checked = false;
    theme('notcheck');
  } else {
    toggleTheme.checked = true;
    theme('check');
  }
}

function saveTaskCondition() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default localsettings;
export { saveTaskCondition };
