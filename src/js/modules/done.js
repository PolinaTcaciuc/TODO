import tasks from './variables';
import { saveTaskCondition } from './localsettings';
/* ------------------- done(status) ------------------- */

function done(parentNode) {
  const task = tasks.find((taskItem) => {
    if (String(taskItem.id) === parentNode.id) {
      return true;
    }
  });
  task.done = !task.done;
  parentNode.querySelector('.task-box__button').classList.toggle('check');
  parentNode.querySelector('.task-box__edit').classList.toggle('hide');
  parentNode.querySelector('.task-box__text').classList.toggle('text-compleate');
  saveTaskCondition();
}
export default done;
