import React from 'react';
import {ThemeProvider} from 'styled-components';
import RootNavigator from 'routes/RootNavigator.tsx';
import {defaultTheme} from 'styles/theme.ts';

const ThemeLayout = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RootNavigator />
    </ThemeProvider>
  );
};

export default ThemeLayout;
