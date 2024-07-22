const router = require('express').Router();
const path = require('path');
const uuid = require('uuid');

const { getNotes, saveNotes } = require('../db');

// View Routes
router.get('/about', (requestObj, responseObj) => {
  responseObj.sendFile(path.join(__dirname, '../public/about.html'));
});

router.get('/note', (requestObj, responseObj) => {
  responseObj.sendFile(path.join(__dirname, '../public/note.html'));
});

// Receiving form data to create a note and sends the user back to the homepage
router.post('/notes', async (requestObj, responseObj) => {
  const noteText = requestObj.body.noteText;
  const id = uuid.v4();

  const notes = await getNotes();
  const newNote = {
    id: id,
    text: noteText
  };

  notes.push(newNote);

  await saveNotes(notes);

  responseObj.redirect('/');
});

module.exports = router;