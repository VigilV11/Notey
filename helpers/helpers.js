const fs = require('fs');

const getNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('data.json', 'utf8'));
  } catch {
    return [];
  }
};

const saveNotes = (data) => {
  fs.writeFileSync('data.json', JSON.stringify(data));
};

const notePresent = (title) => {
  const allNotes = getNotes();
  return Boolean(allNotes.find((note) => note.title === title));
};

module.exports = {
  getNotes: getNotes,
  saveNotes: saveNotes,
  notePresent: notePresent,
};
