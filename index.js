const axios = require('axios');

async function doSomethingSlowly() {
  const url = 'https://swapi.dev/api/people/?search=darth';
  const errorMessage = 'No characters found matching that search phrase';

  const res = await axios.get(url);

  if (res.data.results.length && res.data.results[0].name !== 'Luke Skywalker') {
    throw new Error('That\'s not Luke!');
  }

  if (res.data.results.length) {
    return res.data.results[0].name;
  } else {
    throw new Error(errorMessage)
  }
}

function nextThing(passVal) {
  console.log(passVal);
}

doSomethingSlowly()
  .then((charName) => {
    console.log('resolve is triggered', charName);
    return 'passed';
  })
  .then(nextThing)
  .catch((errorObj) => {
    console.log(errorObj);
  });