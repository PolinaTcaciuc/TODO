import tasks from './variables';

function done(parentNode) {
  const task = tasks.find((task) => {
    if (task.id == parentNode.id) {
      return true;
    }
  });
  task.done = !task.done;
  parentNode.querySelector('.task-box__button').classList.toggle('check');
  parentNode.querySelector('.task-box__edit').classList.toggle('hide');
  parentNode.querySelector('.task-box__text').classList.toggle('text-compleate');
}
export default done;