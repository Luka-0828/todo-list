function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">✕</button>
  `;
  document.getElementById("task-list").appendChild(li);
  input.value = "";
}

function toggleComplete(element) {
  element.parentElement.classList.toggle("completed");
}

function deleteTask(button) {
  button.parentElement.remove();
}