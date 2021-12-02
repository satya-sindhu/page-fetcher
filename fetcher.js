const fs = require('fs');
const request = require('request');

const args = process.argv.slice(2);
//console.log(args);

const handleResponse = (error, response, body) => {
    fs.writeFile(args[1], body, err => {
        if (err) {
            return;
        }
    }, handleFile);
};

const handleFile = fs.stat(args[1], (err, stats) => {
    if (err) {
        console.error(err);
        return;
      }
      console.log(`Downloaded and saved ${stats.size} bytes to ${args[1]}`);
    });
    
    request(args[0], handleResponse);
    
