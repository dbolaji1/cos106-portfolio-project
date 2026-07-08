/* =============================================
   COS 106 Portfolio - Main JavaScript
   Oluwadara Bolaji | MIVA Open University
   ============================================= */

// =============================================
// 1. Mobile Navigation Menu Toggle
// =============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    // Toggle mobile menu when hamburger is clicked
    hamburger.addEventListener('click', function () {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a nav link is clicked (for mobile usability)
    document.querySelectorAll('.nav-menu li a').forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}


// =============================================
// 2. Academic Planner (Task Manager)
// =============================================
const plannerForm = document.getElementById('add-task-form');
if (plannerForm) {
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    const taskPriority = document.getElementById('task-priority');
    const taskList = document.getElementById('task-list');
    const taskCountText = document.getElementById('task-count');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Retrieve tasks from localStorage, or initialize with a default course task
    let tasks = JSON.parse(localStorage.getItem('planner_tasks'));
    if (!tasks) {
        tasks = [
            {
                id: 1,
                text: "Read COS 106 Study Guide - Chapter 1",
                date: "2026-07-15",
                priority: "high",
                completed: false
            },
            {
                id: 2,
                text: "Complete Programming Logic flowchart assignment",
                date: "2026-07-20",
                priority: "medium",
                completed: false
            }
        ];
        localStorage.setItem('planner_tasks', JSON.stringify(tasks));
    }

    // Retrieve active filter from localStorage (default to 'all')
    let currentFilter = localStorage.getItem('planner_filter') || 'all';

    // Save tasks array to localStorage
    function saveTasks() {
        localStorage.setItem('planner_tasks', JSON.stringify(tasks));
    }

    // Save filter type to localStorage
    function saveFilter() {
        localStorage.setItem('planner_filter', currentFilter);
    }

    // Update the pending task count in the header
    function updateTaskCount() {
        const pendingCount = tasks.filter(function (t) { return !t.completed; }).length;
        if (pendingCount === 1) {
            taskCountText.textContent = '1 task pending';
        } else {
            taskCountText.textContent = pendingCount + ' tasks pending';
        }
    }

    // Render the task list based on the active filter
    function renderTasks() {
        // Clear list contents
        taskList.innerHTML = '';

        // Filter tasks based on the active button
        let filteredTasks = tasks;
        if (currentFilter === 'active') {
            filteredTasks = tasks.filter(function (t) { return !t.completed; });
        } else if (currentFilter === 'completed') {
            filteredTasks = tasks.filter(function (t) { return t.completed; });
        }

        // Show empty state message if no tasks exist under this filter
        if (filteredTasks.length === 0) {
            const emptyLi = document.createElement('li');
            emptyLi.className = 'empty-message';
            emptyLi.id = 'empty-message';
            
            if (currentFilter === 'all') {
                emptyLi.textContent = 'No tasks yet. Add your first task above!';
            } else if (currentFilter === 'active') {
                emptyLi.textContent = 'No pending tasks! You are all caught up.';
            } else if (currentFilter === 'completed') {
                emptyLi.textContent = 'No completed tasks yet.';
            }
            taskList.appendChild(emptyLi);
        } else {
            // Render each task item
            filteredTasks.forEach(function (task) {
                const li = document.createElement('li');
                li.className = 'task-item';
                if (task.completed) {
                    li.classList.add('completed');
                }

                // Completed Checkbox
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'task-checkbox';
                checkbox.checked = task.completed;
                checkbox.ariaLabel = 'Mark task as complete';
                checkbox.addEventListener('change', function () {
                    toggleTaskCompletion(task.id);
                });

                // Task Details container
                const detailsDiv = document.createElement('div');
                detailsDiv.className = 'task-details';

                const textSpan = document.createElement('span');
                textSpan.className = 'task-text';
                textSpan.textContent = task.text;
                detailsDiv.appendChild(textSpan);

                // Add due date if provided
                if (task.date) {
                    const dateDiv = document.createElement('div');
                    dateDiv.className = 'task-date';
                    dateDiv.textContent = '📅 Due: ' + task.date;
                    detailsDiv.appendChild(dateDiv);
                }

                // Priority Badge
                const prioritySpan = document.createElement('span');
                prioritySpan.className = 'task-priority priority-' + task.priority;
                prioritySpan.textContent = task.priority.charAt(0).toUpperCase() + task.priority.slice(1);

                // Edit Button
                const editBtn = document.createElement('button');
                editBtn.className = 'edit-btn';
                editBtn.title = 'Edit Task Description';
                editBtn.innerHTML = '✏️';
                editBtn.ariaLabel = 'Edit task description';
                editBtn.addEventListener('click', function () {
                    editTaskText(task.id);
                });

                // Delete Button
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-btn';
                deleteBtn.title = 'Delete Task';
                deleteBtn.innerHTML = '🗑️';
                deleteBtn.ariaLabel = 'Delete task';
                deleteBtn.addEventListener('click', function () {
                    deleteTaskItem(task.id);
                });

                // Append elements to list item
                li.appendChild(checkbox);
                li.appendChild(detailsDiv);
                li.appendChild(prioritySpan);
                li.appendChild(editBtn);
                li.appendChild(deleteBtn);

                taskList.appendChild(li);
            });
        }

        // Keep active button styles updated
        filterButtons.forEach(function (btn) {
            if (btn.getAttribute('data-filter') === currentFilter) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Sync count
        updateTaskCount();
    }

    // Add a new task on form submit
    plannerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const textValue = taskInput.value.trim();
        const dateValue = taskDate.value;
        const priorityValue = taskPriority.value;

        // Prevent blank or empty entries
        if (textValue === '') {
            alert('Please enter a task description.');
            return;
        }

        const newTask = {
            id: Date.now(),
            text: textValue,
            date: dateValue,
            priority: priorityValue,
            completed: false
        };

        tasks.push(newTask);
        saveTasks();
        renderTasks();

        // Clear form inputs
        taskInput.value = '';
        taskDate.value = '';
        taskPriority.value = 'medium';
    });

    // Toggle complete/incomplete state of a task
    function toggleTaskCompletion(id) {
        tasks = tasks.map(function (task) {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        saveTasks();
        renderTasks();
    }

    // Delete a task item by ID
    function deleteTaskItem(id) {
        if (confirm('Are you sure you want to delete this task?')) {
            tasks = tasks.filter(function (task) {
                return task.id !== id;
            });
            saveTasks();
            renderTasks();
        }
    }

    // Edit an existing task's text description using a browser prompt
    function editTaskText(id) {
        const taskToEdit = tasks.find(function (task) {
            return task.id === id;
        });

        if (taskToEdit) {
            const updatedText = prompt('Edit your task description:', taskToEdit.text);
            if (updatedText !== null) {
                const trimmed = updatedText.trim();
                if (trimmed === '') {
                    alert('Task description cannot be left blank.');
                    return;
                }
                taskToEdit.text = trimmed;
                saveTasks();
                renderTasks();
            }
        }
    }

    // Set up click handlers on filter buttons
    filterButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            currentFilter = btn.getAttribute('data-filter');
            saveFilter();
            renderTasks();
        });
    });

    // Run first rendering on page load
    renderTasks();
}


// =============================================
// 3. Contact Form Submission & Validation
// =============================================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const formSuccess = document.getElementById('form-success');

    // Error text fields
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const messageError = document.getElementById('message-error');

    // Display inline error style and message text
    function triggerError(input, errorElement, errorMessage) {
        input.classList.add('error');
        errorElement.textContent = errorMessage;
        errorElement.style.display = 'block';
    }

    // Clear inline error style and message text
    function clearError(input, errorElement) {
        input.classList.remove('error');
        errorElement.style.display = 'none';
    }

    // Live validation listener for full name
    nameInput.addEventListener('input', function () {
        if (nameInput.value.trim() !== '') {
            clearError(nameInput, nameError);
        }
    });

    // Live validation listener for email
    emailInput.addEventListener('input', function () {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() !== '' && emailPattern.test(emailInput.value.trim())) {
            clearError(emailInput, emailError);
        }
    });

    // Live validation listener for phone numbers (digit check)
    phoneInput.addEventListener('input', function () {
        const onlyDigits = /^[0-9]+$/;
        if (phoneInput.value.trim() !== '' && onlyDigits.test(phoneInput.value.trim())) {
            clearError(phoneInput, phoneError);
        }
    });

    // Live validation listener for message minimum length
    messageInput.addEventListener('input', function () {
        if (messageInput.value.trim().length >= 10) {
            clearError(messageInput, messageError);
        }
    });

    // Submit listener with full validation suite
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let isFormValid = true;

        // 1. Validate full name is not blank
        const nameVal = nameInput.value.trim();
        if (nameVal === '') {
            triggerError(nameInput, nameError, 'Full Name is a required field.');
            isFormValid = false;
        } else {
            clearError(nameInput, nameError);
        }

        // 2. Validate email address matches format
        const emailVal = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailVal === '') {
            triggerError(emailInput, emailError, 'Email Address is a required field.');
            isFormValid = false;
        } else if (!emailPattern.test(emailVal)) {
            triggerError(emailInput, emailError, 'Please enter a valid email address (e.g., example@domain.com).');
            isFormValid = false;
        } else {
            clearError(emailInput, emailError);
        }

        // 3. Validate phone contains only digits (per MIVA term project PDF guidelines)
        const phoneVal = phoneInput.value.trim();
        const onlyDigits = /^[0-9]+$/;
        if (phoneVal === '') {
            triggerError(phoneInput, phoneError, 'Phone Number is a required field.');
            isFormValid = false;
        } else if (!onlyDigits.test(phoneVal)) {
            triggerError(phoneInput, phoneError, 'Phone number must contain only numbers (no spaces, dashes, or symbols).');
            isFormValid = false;
        } else {
            clearError(phoneInput, phoneError);
        }

        // 4. Validate message meets the minimum length requirements
        const messageVal = messageInput.value.trim();
        if (messageVal === '') {
            triggerError(messageInput, messageError, 'Message is a required field.');
            isFormValid = false;
        } else if (messageVal.length < 10) {
            triggerError(messageInput, messageError, 'Message is too short. Please enter at least 10 characters.');
            isFormValid = false;
        } else {
            clearError(messageInput, messageError);
        }

        // Form is fully valid, handle successful submission
        if (isFormValid) {
            // Show successful submit box
            formSuccess.style.display = 'block';

            // Clear the form fields
            contactForm.reset();

            // Clear any old validation styles
            clearError(nameInput, nameError);
            clearError(emailInput, emailError);
            clearError(phoneInput, phoneError);
            clearError(messageInput, messageError);

            // Automatically hide success notification after 5 seconds
            setTimeout(function () {
                formSuccess.style.display = 'none';
            }, 5000);
        }
    });
}
