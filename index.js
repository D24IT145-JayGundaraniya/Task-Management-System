let tasks = [];

const addTask = (title, status, priority) => {
    tasks.push({ title, status, priority });
};

const filterByStatus = (status) => {
    return tasks.filter(task => task.status === status);
};

const findHighPriorityTask = () => {
    return tasks.find(task => task.priority === 5);
};

const getTaskTitlesWithStatus = () => {
    return tasks.map(task => `Task: ${task.title}, Status: ${task.status}`);
};

const logTaskDetails = () => {
    tasks.forEach(task => {
        console.log(`Title: ${task.title}, Status: ${task.status}, Priority: ${task.priority}`);
    });
};

addTask("Complete project", "Pending", 4);
addTask("Submit assignment", "Completed", 5);
addTask("Prepare presentation", "Pending", 3);

console.log("Filtered by Status (Pending):", filterByStatus("Pending"));
console.log("High Priority Task:", findHighPriorityTask());
console.log("Task Titles with Status:", getTaskTitlesWithStatus());
console.log("All Task Details:");
logTaskDetails();