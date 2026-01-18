import { refs } from './js/refs';
import { addTask, deleteTasks, inittaskList } from './js/tasks';
import { applySavedTheme, themeSwitch } from './js/theme-switcher';

inittaskList();
applySavedTheme();

refs.form.addEventListener('submit', addTask);

refs.taskList.addEventListener('click', deleteTasks);

refs.buttonTheme.addEventListener('click', themeSwitch);
