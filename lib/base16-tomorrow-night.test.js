const theme = require('./base16-tomorrow-night')
const test = require('ava')

test('should be an object', t => {
  const tomorrow_night = theme({});
  t.is(typeof tomorrow_night, 'object');
});

