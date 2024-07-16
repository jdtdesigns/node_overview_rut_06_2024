const fs = require('fs').promises;

function getTodoData() {
  return fs.readFile('./db/todos.json', 'utf8')
    .then(rawData => {
      return JSON.parse(rawData);
    })
    .catch((error) => {
      console.log(error);
    });
}

function saveTodoData(updatedTodos) {
  return fs.writeFile('./db/todos.json', JSON.stringify(updatedTodos, null, 2));
}

// Default Export - Overwriting the exports object with your own value 
module.exports = {
  getTodos: getTodoData,
  saveTodos: saveTodoData
};
