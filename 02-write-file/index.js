const fs = require('fs');
const path = require('path');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const streamRead = fs.createReadStream(path.join(__dirname, 'note.txt'), 'utf-8');
const stream = fs.createWriteStream(path.join(__dirname, 'note.txt'));
let greeting = 'Write your text here:\n'
function writeText () {
    rl.question ( greeting, answer => {
        if (answer === 'exit') {
            rl.close();
        } else {
            stream.write(answer + '\n');
            greeting = '';
            writeText();
        }
    })
};
fs.promises.writeFile((path.join(__dirname, 'note.txt')), '');
writeText();
rl.on('close', ()=> rl.output.write('See you soon!'));


