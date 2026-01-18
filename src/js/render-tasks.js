import { refs } from './refs';

export function renderTasks(tasks) {
  const markup = tasks
    .map(
      task => `<li class="task-list-item">
        <button class="task-list-item-btn">Delete</button>
        <h3>${task.title}</h3>
        <p>${task.description}</p>
      </li>`
    )
    .join('');

  refs.taskList.innerHTML = markup;
}
