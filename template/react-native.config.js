module.exports = {
  project: {
    ios: {},
    android: {},
  },
  commands: [
    require('./scripts/commands/add-path-alias/name'),
    require('./scripts/commands/add-i18n/name'),
  ],
  assets: ['./src/assets/fonts/'],
  dependencies: {
    // Disable auto linking for `react-native-vector-icons` and link
    // the required fonts manually to avoid duplicate resources issue in iOS.
    'react-native-vector-icons': {
      assets: [],
    },
  },
};
