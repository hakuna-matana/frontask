const Tasks = require('../data/tasks');

class Task {
  static getAll(category) {
    if (!category || category === 'general') return Tasks
    const filteredTasks = Tasks.filter(task => task.category.includes(category))
    return filteredTasks
  }

  getById(id) {
    return Tasks.find(task => task.id === id);
  }
}

module.exports = {
  Task
}