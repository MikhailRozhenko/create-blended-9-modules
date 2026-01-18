import { getFromLS, saveToLS } from './local-storage-api';
import { renderTasks } from './render-tasks';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const taskKey = 'tasks';

let tasksGet = getFromLS(taskKey) || [];

export function addTask(event) {
  event.preventDefault();

  const titleInputValue = event.target.elements.taskName.value.trim();
  const descriptionInputValue =
    event.target.elements.taskDescription.value.trim();

  if (!titleInputValue || !descriptionInputValue) {
    showError('Пожалуйста, заполните все поля формы');

    return;
  }

  const task = {
    title: titleInputValue,
    description: descriptionInputValue,
  };

  tasksGet.push(task);
  saveToLS(taskKey, tasksGet);
  renderTasks(tasksGet);

  event.target.reset();
}

export function inittaskList() {
  renderTasks(tasksGet);
}

export function deleteTasks(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const titleDel = event.target.nextElementSibling.textContent;

  tasksGet = tasksGet.filter(tas => titleDel !== tas.title);
  saveToLS(taskKey, tasksGet);
  renderTasks(tasksGet);
}

function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
    timeout: 3000,
    pauseOnHover: true,
    close: true,
  });
}
