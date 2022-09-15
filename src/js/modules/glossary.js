import tasks from './variables';
/* ------------------- glossary ------------------- */

function setLang(langPage) {
  const languageItems = document.querySelectorAll('.lng-item');
  const inputCreateTask = document.querySelector('.search-form__input');
  const langGlossary = {
    en: ['EN', 'RU', 'TODO', ' task', 'Clear Complete'],
    ru: ['АНГЛ', 'РУС', 'Планировщик задач', ' задач', 'удалить завершенные'],
  };
  const placeholderLangGlossary = {
    ru: ['Создайте новую задачу...'],
    en: ['Create a new todo...'],
  };
  for (let i = 0; i < languageItems.length; i++) {
    if (languageItems[i].classList.contains('task-box__numeric-text')) {
      languageItems[i].textContent = numberGlossary(langPage);
    } else {
      languageItems[i].textContent = langGlossary[langPage][i];
    }
  }
  inputCreateTask.placeholder = placeholderLangGlossary[langPage];
}
/* ------------------- number glossary ------------------- */

function numberGlossary(langPage) {
  if (langPage === 'ru') {
    const str = 'задач';
    if (tasks.length >= 11 && tasks.length <= 14) {
      return ` ${str}`;
    }
    if (tasks.length === 1) {
      return ` ${str}a`;
    }
    if (tasks.length >= 2 && tasks.length <= 4) {
      return ` ${str}и`;
    }
    if (tasks.length >= 5 && tasks.length <= 10) {
      return ` ${str}`;
    }
    if (tasks.length % 10 === 0) {
      return ` ${str}`;
    }
    if (tasks.length % 10 === 1) {
      return ` ${str}a`;
    }
    if (tasks.length % 10 === 2 || tasks.length % 10 === 3 || tasks.length % 10 === 4) {
      return ` ${str}и`;
    }
    return ` ${str}`;
  }
  const str = 'task';
  if (tasks.length === 1) {
    return ` ${str}`;
  }
  return ` ${str}s`;
}
export {
  numberGlossary,
};
export default setLang;
