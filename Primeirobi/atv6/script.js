const input = document.getElementById('taskInput');
const btn = document.getElementById('addTaskBtn');
const list = document.getElementById('taskList');

function addTask() {
    const taskText = input.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        
        li.innerHTML = `
            <input type="checkbox" class="complete-check">
            <span>${taskText}</span>
        `;

        list.appendChild(li);
        input.value = "";
        input.focus();
    }
}

btn.addEventListener('click', addTask);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

list.addEventListener('click', (e) => {
    if (e.target.classList.contains('complete-check')) {
        e.target.parentElement.classList.toggle('completed');
        return;
    }

    const li = e.target.closest('li');
    if (li) {
        li.remove();
    }
});