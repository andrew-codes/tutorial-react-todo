const path = require('path');

module.exports = {
    setupFiles: [
        path.join(__dirname, 'testSetup', 'index.js'),
    ],
    testRegex: '/__tests__/.*\\.test\\.js$',
};
