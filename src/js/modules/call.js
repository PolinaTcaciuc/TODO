/* eslint-disable default-case */
import addTask from './add';
import tasks from './variables';
import done from './done';
import theme from './theme';
import setlang from './glossary';

/* ------------------- call addTask ------------------- */
document.querySelector('.search-form').addEventListener('submit', addTask);

document.querySelector('.task-box__list').addEventListener('click', (e) => {
  const parentNode = e.target.closest('li');
  tasks.forEach((item) => {
    if (String(item.id) === parentNode.id) {
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
/* ------------------- call toggle theme ------------------- */

document.querySelector('.header__theme__toggle').addEventListener('click', () => {
  if (document.querySelector('.header__theme__toggle').checked) {
    theme('check');
  } else {
    theme('notcheck');
  }
});
/* ------------------- call lang ------------------- */

document.querySelector('.language-box').addEventListener('click', (e) => {
  if (e.target.classList.contains('language-box__item--eng')) {
    e.target.classList.add('active-lang');
    document.querySelector('.language-box__item--rus').classList.remove('active-lang');
    localStorage.setItem('lang', 'en');
    setlang('en');
  } else if (e.target.classList.contains('language-box__item--rus')) {
    e.target.classList.add('active-lang');
    document.querySelector('.language-box__item--eng').classList.remove('active-lang');
    localStorage.setItem('lang', 'ru');
    setlang('ru');
  }
});
