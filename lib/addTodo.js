const inquirer = require('inquirer');
const uuid = require('uuid');

const dbTools = require('../db/tools');

function addTodo() {
  // Get the todo text from the user
  return inquirer.prompt({
    name: 'todoText',
    message: 'Type the text for your ToDo',
  }).then((addTodoAnswerObj) => {
    // Get the data from the todos.json file
    return dbTools.getTodos()
      .then(todosArray => {
        // Add the todo to a database
        const todoObj = {
          id: uuid.v4(),
          text: addTodoAnswerObj.todoText,
          completed: false
        };

        todosArray.push(todoObj);

        return dbTools.saveTodos(todosArray)
          .then(() => {
            console.log('Todos saved successfully!');
          });
      })
  })
}

module.exports = addTodo;