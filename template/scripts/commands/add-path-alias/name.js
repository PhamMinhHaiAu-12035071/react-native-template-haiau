const main = require('./func').main;
module.exports = {
  name: 'add-path-alias',
  description: 'Auto-generate path alias for project',
  func: () => main(),
};
