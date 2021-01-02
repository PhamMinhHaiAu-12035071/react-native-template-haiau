import 'react-native-gesture-handler';
import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import Home from 'screens/Home/index.tsx';
enableScreens(true);
export type RootStackParamList = {
  Home: undefined;
};
const RootStack = createSharedElementStackNavigator<RootStackParamList>();
const RootNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName={'Home'}
          headerMode={'none'}
          keyboardHandlingEnabled={true}
          mode={'modal'}>
          <RootStack.Screen name={'Home'} component={Home} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default RootNavigator;
