const inquirer = require('inquirer');

const dbTools = require('../db/tools');

function showIncompleteTodos() {
  return dbTools.getTodos()
    .then(todosArray => {
      const filtered = todosArray.filter((todoObj) => {
        return !todoObj.completed;
      });

      if (!filtered.length) {
        return console.log('There are no incomplete todos\n');
      }

      return inquirer.prompt({
        name: 'completedTodos',
        message: 'Check any Todos that you would like to complete',
        type: 'checkbox',
        choices: filtered.map(todoObj => {
          return {
            name: todoObj.text,
            value: todoObj.id
          }
        })
      }).then(completedAnswerObj => {
        const checkedIdsArray = completedAnswerObj.completedTodos;
        // I need to set any of the todo objects completed property in the todosArray to true if that object's id matches any id in the inquirer answers array of ids
        if (!checkedIdsArray.length) {
          return;
        }

        for (const todoObj of todosArray) {
          // If the checkedArray includes the todoObj id, set the todoObj completed property to true
          if (checkedIdsArray.includes(todoObj.id)) {
            todoObj.completed = true;
          }
        }

        // Update the todos.json file with our newly completed todos
        return dbTools.saveTodos(todosArray);
      });
    })
}

module.exports = showIncompleteTodos;

