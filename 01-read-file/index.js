const fs = require('fs');
const path = require('path');
let data = '';
const rs = fs.createReadStream(path.join(__dirname, 'text.txt'));

rs.on('data', (chunk) => {
     data += chunk.toString()});
rs.on('end', () => console.log(data));