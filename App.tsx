import React from 'react';

import 'react-native-gesture-handler';

import {Navigation} from './src/navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {FadeScreen} from './src/screens/FadeScreen';
import {GradientProvider} from './src/context/GradientProvider';

const AppState = ({children}: any) => {
  return <GradientProvider>{children}</GradientProvider>;
};

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
        {/* <FadeScreen /> */}
      </AppState>
    </NavigationContainer>
  );
};
