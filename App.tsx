import React from 'react';

import 'react-native-gesture-handler';

import {Navigation} from './src/navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';

export const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};
