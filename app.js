const util = require('./util.js');
let yargs = require('yargs');
const chalk = require('chalk');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Body of the note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        util.addNote(argv.title,argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove Command',
    builder: {
        title: {
            describe: 'Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        util.removeNotes(argv.title);
    }
});

yargs.command({
    command: 'read',
    describe: 'Read the notes!',
    builder: {
        title: {
            describe: 'Title',
            demandOption: true,
            type: 'string'
        }
    }
    ,
    handler: function(argv){
        util.readNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function(){
        util.listNotes();
    }
});

yargs.parse();

//console.log(yargs.argv);
/*
//Notes function called!

if(util.writeNotes("notes.txt","Sahib Arora")){
    console.log("Notes Created");
}else{
    console.log("Notes could not be created");
}

console.log(util.getNotes("notes.txt").toString());

// Validator

console.log("Validatior ->", validator.isEmail('andrew@example.com'));
console.log("Vsalidator URL ->", validator.isURL('https://mead.io'))

// Chalk

console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + ' !'))
console.log(chalk.green.bold.inverse("Success!"))

// Nodemon ->
console.log("Nodemon automatically compiles the script again when saved")

// command line arguments

console.log(process.argv[2]);*/