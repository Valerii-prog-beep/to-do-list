const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
      <button>Удалить</button>
    `;

    const checkbox = listItem.querySelector('input[type="checkbox"]'); // Получаем ссылку на чекбокс
    const deleteButton = listItem.querySelector('button'); // Получаем ссылку на кнопку "Удалить"

    checkbox.addEventListener('change', toggleTask); // Добавляем обработчик события для чекбокса
    deleteButton.addEventListener('click', deleteTask); // Добавляем обработчик события для кнопки "Удалить"

    taskList.appendChild(listItem);
    taskInput.value = '';
  }
}

function toggleTask(event) {
  const listItem = event.target.parentNode; // Получаем родительский элемент (li)
  listItem.classList.toggle('completed'); // Добавляем/удаляем класс "completed"
}

function deleteTask(event) {
  console.log("Функция deleteTask вызвана");
  const listItem = event.target.parentNode; // Получаем родительский элемент (li)
  taskList.removeChild(listItem); // Удаляем элемент списка из списка задач
}
