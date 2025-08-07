document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const todoList = document.getElementById('todo-list');  
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const prioritySelect = document.getElementById('priority-select');
    const list = document.getElementById('todo-list');

    let todos = [];

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const task = input.value.trim();
        const priority = prioritySelect.value;
        if (task && priority) {
            todos.push({ text: task, priority: priority, completed: false });
            input.value = '';
            prioritySelect.selectedIndex = 0;
            renderTodos();
        }
    });

        function renderTodos() {
            const priorityOrder = { High: 1, Medium: 2, Low: 3 };
            todos.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    
            list.innerHTML = '';
            todos.forEach((todo, idx) => {
                const li = document.createElement('li');
                li.className = 'todo-item';
    
                const prioritySpan = document.createElement('span');
                prioritySpan.className = `priority ${todo.priority}`;
                prioritySpan.textContent = todo.priority;
    
                const span = document.createElement('span');
                span.className = 'todo-text' + (todo.completed ? ' completed' : '');
                span.textContent = todo.text;
                span.addEventListener('click', function() {
                    todo.completed = !todo.completed;
                    renderTodos();
                });
    
               
    
                const delBtn = document.createElement('button');
                delBtn.className = 'delete-btn';
                delBtn.textContent = 'Delete';
                delBtn.addEventListener('click', function() {
                    todos.splice(idx, 1);
                    renderTodos();
                });
    
                li.appendChild(prioritySpan);
                li.appendChild(span);
                li.appendChild(delBtn);
                list.appendChild(li);
            });
        }
    
        
        document.getElementById('all-todos').addEventListener('click', () => {
            renderTodos();
        });
    
        document.getElementById('high-priority').addEventListener('click', () => {  
            const highPriorityTodos = todos.filter(todo => todo.priority === 'High');
            list.innerHTML = '';
            highPriorityTodos.forEach(todo => {
                const li = document.createElement('li');
                li.textContent = todo.text;
                li.className = 'todo-item';
                list.appendChild(li);
            });
        });             
    
        document.getElementById('medium-priority').addEventListener('click', () => {        
            const mediumPriorityTodos = todos.filter(todo => todo.priority === 'Medium');
            list.innerHTML = '';
            mediumPriorityTodos.forEach(todo => {
                const li = document.createElement('li');
                li.textContent = todo.text;
                li.className = 'todo-item';
                list.appendChild(li);

            
            });
        
    
        });
    
    }); 

















    
    
