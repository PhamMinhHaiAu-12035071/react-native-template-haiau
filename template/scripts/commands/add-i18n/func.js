const {execSync} = require('child_process');
const I18N_CONFIG = './src/i18n';
const APP = './src/App.tsx';
const {
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  copyFileSync,
} = require('fs');
const importConfig =
  '' + "import loadI18N from 'i18n/config.ts';\n" + 'loadI18N();\n';
const main = () => {
  console.log(process.cwd());
  execSync('yarn add react-native-localize i18next react-i18next');
  execSync('npx pod-install ios');
  if (!existsSync(I18N_CONFIG)) {
    mkdirSync(I18N_CONFIG);
  }
  copyFileSync(
    process.cwd() + '/scripts/commands/add-i18n/i18n/config.ts',
    process.cwd() + '/src/i18n/config.ts',
  );
  copyFileSync(
    process.cwd() + '/scripts/commands/add-i18n/i18n/en.json',
    process.cwd() + '/src/i18n/en.json',
  );
  copyFileSync(
    process.cwd() + '/scripts/commands/add-i18n/i18n/vi.json',
    process.cwd() + '/src/i18n/vi.json',
  );
  const data = readFileSync(APP);
  writeFileSync(APP, importConfig + data);
};

module.exports = {main};
