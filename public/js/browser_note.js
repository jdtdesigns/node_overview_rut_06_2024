const outputDiv = document.querySelector('.note');

const params = new URLSearchParams(window.location.search);
const noteId = params.get('note_id');

async function getNote() {
  const res = await fetch('/api/note/' + noteId);
  const note = await res.json();

  outputDiv.innerHTML = `
    <h1>View Note</h1>
    <h2>${note.text || 'No note matching that id.'}</h2>
  `;
}

getNote();