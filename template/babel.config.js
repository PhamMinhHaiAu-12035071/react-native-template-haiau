module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', require('./config/babel.alias.json')],
    'react-native-reanimated/plugin',
  ],
};
