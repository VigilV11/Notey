const chalk = require('chalk');
const fs = require('fs');
const notes = require('./notes');

const yargs = require('yargs');

// customize yargs version
yargs.version('1.2.0');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: 'list',
  describe: 'List of all notes',
  handler: function () {
    notes.listNotes();
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
