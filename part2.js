const chalk = require('chalk')
const { demandOption } = require('yargs')
const yargs = require('yargs')
const getNotes = require('./notes.js')

yargs.version('1.1.0')
//create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe:'note title',
            demandOption: true,
            type:'string' 
        },
        body:{
            describe:'note body',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv) {
        console.log('Title:' + argv.title)
        console.log('body:' + argv.body)
    }
})
//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    handler: function() {
        console.log('removing the note!')
    }
})
//create list command
yargs.command({
    command: 'list',
    describe: 'list the new note',
    handler: function() {
        console.log('listing the new note!')
    }
})
//create read command
yargs.command({
    command: 'read',
    describe: 'read the new note',
    handler: function() {
        console.log('reading the content of note!')
    }
})

console.log(yargs.argv)

