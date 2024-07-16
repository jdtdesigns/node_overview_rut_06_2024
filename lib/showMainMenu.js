const inquirer = require('inquirer');

const addTodo = require('./addTodo');
const showIncompleteTodos = require('./showIncompleteTodos');
const showCompletedTodos = require('./showCompletedTodos');

function showMainMenu() {
  return inquirer.prompt({
    name: 'menuChoice',
    message: 'Please select an option',
    // Output a list of options - the user can select one
    type: 'list',
    choices: [
      'Show Incomplete ToDos',
      'Show Completed Todos',
      'Add a ToDo',
      'Exit'
    ]
  }).then((menuAnswerObj) => {
    switch (menuAnswerObj.menuChoice) {
      case 'Add a ToDo':
        addTodo()
          .then(showMainMenu);
        break;
      case 'Show Incomplete ToDos':
        showIncompleteTodos()
          .then(showMainMenu)
        break;
      case 'Show Completed Todos':
        showCompletedTodos()
          .then(showMainMenu);
        break;
      case 'Exit':
        console.log('------\nThanks for using the Todo Wiz!\n------');

        process.exit();
    }
  });
}

module.exports = showMainMenu;