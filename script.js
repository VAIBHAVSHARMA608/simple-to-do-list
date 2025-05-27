const clickSound = document.getElementById('clickSound');
const typeSound = document.getElementById('typeSound');

document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const completedTasks = document.getElementById('completed-tasks');

 
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            if (clickSound) {
                clickSound.currentTime = 0;
                clickSound.play();
            }
        });
    });

    
    if (todoInput && typeSound) {
        todoInput.addEventListener('input', () => {
            typeSound.currentTime = 0;
            typeSound.play();
        });
    }

    todoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            todoInput.value = '';
        }
    });

    function addTask(text) {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            <span>${text}</span>
            <div>
                <button class="btn btn-success btn-sm me-2 complete-btn">Complete</button>
                <button class="btn btn-danger btn-sm delete-btn">Delete</button>
            </div>
        `;
        todoList.appendChild(li);
    }

    // Handle complete and delete actions
    todoList.addEventListener('click', function (e) {
        if (e.target.classList.contains('complete-btn')) {
            const li = e.target.closest('li');
            completeTask(li);
        } else if (e.target.classList.contains('delete-btn')) {
            const li = e.target.closest('li');
            li.remove();
        }
    });

    function completeTask(li) {
        li.querySelector('.complete-btn').remove();
        completedTasks.appendChild(li);
    }

    completedTasks.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-btn')) {
            const li = e.target.closest('li');
            li.remove();
        }
    });
});