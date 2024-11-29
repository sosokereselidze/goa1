function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');
  var taskText = taskInput.value;
  if (taskText.trim() === '') {
      alert('Please enter a task.');
      return;
  }
  var listItem = document.createElement('li');
  listItem.innerHTML = '<input class="check" type="checkbox" onclick="checkTask(this)">' + taskText +
                       '<button class="deleteButton" onclick="deleteTask(this)">Delete</button>';

  taskList.appendChild(listItem);
  taskInput.value = '';
}

function checkTask(checkbox) {
  var listItem = checkbox.parentNode;
  listItem.classList.toggle('checked', checkbox.checked);
}

function deleteTask(button) {
  var listItem = button.parentNode;
  if (listItem.classList.contains('checked')) {
      listItem.parentNode.removeChild(listItem);
  } else {
      alert('Please complete the task before deleting.');
  }
}
