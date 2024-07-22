const router = require('express').Router();

const db = require('../db');

// API Routes
router.get('/notes', async (requestObj, responseObj) => {
  const notes = await db.getNotes();

  responseObj.json(notes);
});

router.get('/note/:noteId', async (requestObj, responseObj) => {
  const id = requestObj.params.noteId;
  const notes = await db.getNotes();

  const note = notes.find(noteObj => noteObj.id == id);

  responseObj.json(note || {});
});

module.exports = router;