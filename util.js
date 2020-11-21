var fs = require('fs');
var chalk = require('chalk');

/*module.exports.factorial = function(num){
    if(num == 1 || num == 0)
        return 1
    else
        return num * this.factorial(num-1) 
}*/

module.exports.addNote = function(title, body){
    try{

        // Pulling out all the notes...
        var notes = this.loadNotes();

        // Pull --  chrome://inspect -- at google chrome to debug the application
        debugger 

        // filter function will work as much notes are in the notes object - for 2 notes 2 times, for 5 it will run 5 times.
        var duplicateNotes = notes.filter((note) => {
            return note.title === title ? true : false;
        });
        // added a new note to the Notes
        if(duplicateNotes.length === 0){

            notes.push({
                title: title,
                body: body
            });

            if(this.saveNotes(notes)){
                console.log("Notes Saved")
            }else{
                console.log("Error while saving note ");
            }
        }else{
            console.log("Duplicate Note");
        }

    }catch(Exception){
        console.log("Error...")
    }
};

module.exports.removeNotes = function(title){
    var notes = this.loadNotes();

    if(notes === []){
        console.log("You don't have any notes yet!");
    }else{
        var newNotes = notes.filter((note) => {
            if(note.title === title){
                console.log(chalk.green("Deleted!"));
                return false;
            }else
                return true;
        });

        this.saveNotes(newNotes);
    }
};

module.exports.listNotes = function(){
    var notes = this.loadNotes();

    console.log(chalk.inverse("Here are your notes -> \n"));

    if(notes.length === 0){
           console.log(chalk.red("Notes are empty..."));
    }else{
        notes.forEach(element => {
            console.log(chalk.green(element.title));
        });
    }
};

module.exports.readNote = function(title){
    var notes = this.loadNotes();

    var noteFound = notes.find((n) => {
        return n.title === title
    });

    if(noteFound){
        console.log(chalk.italic.green(noteFound.title) + " - " + noteFound.body);
    }else{
        console.log(chalk.red("Note not found!"));
    }
};

module.exports.loadNotes = function(){
    try{
        var dataBuffer = fs.readFileSync('notes.json');
        var dataString = dataBuffer.toString();
        return JSON.parse(dataString);
    }catch(e){
        return [];
    }
};

module.exports.saveNotes = function(notes){
    try{
        fs.writeFileSync('notes.json',JSON.stringify(notes));
        return true;
    }catch(e){
        return false;
    }
};

// OR
/*

To send OBJECT of EXPORTS... 

module.exports = {
    getNotes: this.getNotes,
    addNote: this.addNote
}
*/