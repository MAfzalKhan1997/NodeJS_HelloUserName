console.log('Starting App')

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}`, (error) => {
    if (error) {
        console.log('unable to write file')
    }
}); 