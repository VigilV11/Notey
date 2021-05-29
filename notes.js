const chalk = require('chalk');
const helpers = require('./helpers/helpers');

const addNote = (title, body) => {
  const allNotes = helpers.getNotes();

  const itemPresent = helpers.notePresent(title);

  debugger;

  if (!itemPresent) {
    allNotes.push({ title, body });
    helpers.saveNotes(allNotes);

    console.log(chalk.green.inverse('New note added!\n'));
    console.log(chalk.magenta.bold('Title: ', title));
    console.log(chalk.magenta('Body: ', body + '\n'));
  } else {
    console.error(
      chalk.inverse.red('Title alread exists. Please add new title.')
    );
  }
};

const removeNote = (title) => {
  const allNotes = helpers.getNotes();

  const itemPresent = helpers.notePresent(title);

  if (itemPresent) {
    const newNotes = allNotes.filter((note) => note.title !== title);

    helpers.saveNotes(newNotes);

    console.log(chalk.green.inverse('Note removed!\n'));
  } else {
    console.error(chalk.inverse.red('There is no matching title.'));
  }
};

const listNotes = () => {
  const allNotes = helpers.getNotes();

  console.log(chalk.green.inverse('List of all notes...\n'));

  allNotes.forEach((note) => {
    console.log(chalk.magenta.bold('Title: ', note.title));
    console.log(chalk.magenta('Body: ', note.body + '\n'));
  });
};

const readNote = (title) => {
  const itemPresent = helpers.notePresent(title);

  if (itemPresent) {
    const allNotes = helpers.getNotes();

    const selectedNote = allNotes.find((note) => note.title === title);

    console.log(chalk.magenta.bold('Title: ', selectedNote.title));
    console.log(chalk.magenta('Body: ', selectedNote.body + '\n'));
  } else {
    console.error(chalk.inverse.red('There is no matching title.'));
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
