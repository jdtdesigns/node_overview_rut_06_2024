const router = require('express').Router();
const uuid = require('uuid');

const { getNotes, saveNotes } = require('../db');

// API Routes
// /api/notes
router.get('/notes', async (requestObj, responseObj) => {
  const notes = await getNotes();

  responseObj.json(notes);
});

router.get('/note/:noteId', async (requestObj, responseObj) => {
  const id = requestObj.params.noteId;
  const notes = await getNotes();

  const note = notes.find(noteObj => noteObj.id == id);

  responseObj.json(note || {});
});

// Receiving form data to create a note and sends the user back to the homepage
// /api/notes POST
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

  responseObj.json(newNote);
});

module.exports = router;