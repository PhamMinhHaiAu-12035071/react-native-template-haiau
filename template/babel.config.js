module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: require('./config/babel.alias.json'),
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
