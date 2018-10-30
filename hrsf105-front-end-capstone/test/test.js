const dataGenFunctions = require('../fakedatagenerator.js');

test('replies is array', () => {
  expect(Array.isArray(dataGenFunctions.generateReplies())).toBe(true);
});
