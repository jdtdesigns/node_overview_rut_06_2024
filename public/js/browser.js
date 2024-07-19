const noteOutput = document.querySelector('.note-output');

async function getNotes() {
  const res = await fetch('/api/notes');
  const notes = await res.json();

  // /note/2
  for (const noteObj of notes) {
    noteOutput.insertAdjacentHTML('beforeend', `
      <div class="note">
        <h3>${noteObj.text}</h3>
        <a href="/note?note_id=${noteObj.id}">View Note</a>
      </div>
    `);
  }
}

function init() {
  getNotes();
}

init();