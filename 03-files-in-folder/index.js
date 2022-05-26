const fs = require('fs');
const path = require('path');

fs.readdir((path.join(__dirname,'secret-folder')), (err, files) => {
    if (err) throw err;
    else { 
        files.forEach((file) => {
             if (file.isFile()) {
                let fileName = path.parse(files[i]).name;
                fs.stat(path.join(path.join(__dirname,'secret-folder'))), (err, stats) => {
                    if (err) throw err;
                    else {
                        let fileSize = `${(stats.size/1024).toFixed}kb`
                        let fileExt = path.extname((path.join(__dirname,'secret-folder'))).slice(1);
                        console.log(fileName,fileExt,fileSize);
                    }
                }
            }
            else { throw err}
        });
    }
});