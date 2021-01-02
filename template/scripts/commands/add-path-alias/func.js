const SAVE_CONFIG = './config/';
const PATH_SRC = './src/';
const TS_CONFIG = './config/tsconfig.alias.json';
const BABEL_CONFIG = './config/babel.alias.json';
const {
  readdirSync,
  statSync,
  writeFileSync,
  existsSync,
  mkdirSync,
} = require('fs');

/**
 *
 * @param {string} path
 * @returns {Array<string>} - return array string directory
 */
const getDirectories = (path) => {
  return readdirSync(path).filter(function (file) {
    return statSync(path + '/' + file).isDirectory();
  });
};

const main = () => {
  if (!existsSync(SAVE_CONFIG)) {
    mkdirSync(SAVE_CONFIG);
  }
  const getListDirectory = getDirectories(PATH_SRC);
  const dataTsConfig =
    '{\n' +
    '  "compilerOptions": {\n' +
    '    "paths": {\n' +
    '      "*": ["./src/*"],\n' +
    getListDirectory
      .map((item) => `"${item}": ["./src/${item}/*"],\n`)
      .join('') +
    '    }\n' +
    '  },\n' +
    '}\n';
  const dataBabelConfig =
    '{\n' +
    getListDirectory
      .map((item, index) =>
        index === getListDirectory.length - 1
          ? `"${item}": ["./src/${item}"]\n`
          : `"${item}": ["./src/${item}"],\n`,
      )
      .join('') +
    '}\n';
  writeFileSync(TS_CONFIG, dataTsConfig);
  writeFileSync(BABEL_CONFIG, dataBabelConfig);
};

module.exports = {main};
