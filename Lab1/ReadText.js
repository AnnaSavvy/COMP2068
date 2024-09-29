const fileSystem = require('fs');

fileSystem.readFile('Lab1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Can not read the file:', err);
        return;
    }

    console.log(data);
});