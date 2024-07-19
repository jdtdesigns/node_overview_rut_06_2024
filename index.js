const express = require('express');
const cors = require('cors');

const app = express();

// Base route - domain.com (root route) is represented by a '/' - this slash directly follows the domain address (jdtadlock.com/)

app.use(cors())

app.get('/', (requestObj, responseObj) => {
  responseObj.send({
    name: 'JD',
    age: 44
  });
});

app.listen(3333, () => {
  console.log('Server started');
})