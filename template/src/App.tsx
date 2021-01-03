import loadI18N from 'i18n/config.ts';
loadI18N();
import React from 'react';
import {RecoilRoot} from 'recoil';
import ThemeLayout from './ThemeLayout';
import {Platform} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
/* Load font specific for ios */
if (Platform.OS === 'ios') {
  MaterialIcons.loadFont();
}
const App = () => {
  return (
    <RecoilRoot>
      <ThemeLayout />
    </RecoilRoot>
  );
};
export default App;
