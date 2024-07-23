const router = require('express').Router();
const path = require('path');

// View Routes
router.get('/about', (requestObj, responseObj) => {
  responseObj.sendFile(path.join(__dirname, '../public/about.html'));
});

router.get('/note', (requestObj, responseObj) => {
  responseObj.sendFile(path.join(__dirname, '../public/note.html'));
});

module.exports = router;