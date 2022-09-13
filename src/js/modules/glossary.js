// import tasks from './variables';
function setLang(langPage) {
  const languageItems = document.querySelectorAll('.lng-item');
  const inputCreateTask = document.querySelector('.search-form__input');
  const langGlossary = {
    en: ['EN', 'RU', 'TODO'],
    ru: ['АНГЛ', 'РУС', 'Планировщик задач'],
  };
  const placeholderLangGlossary = {
    ru: ['Создайте новую задачу...'],
    en: ['Create a new todo...'],
  };
  for (let i = 0; i < languageItems.length; i++) {
    languageItems[i].textContent = langGlossary[langPage][i];
  }
  inputCreateTask.placeholder = placeholderLangGlossary[langPage];
}

export default setLang;
