import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {DetailScreen, HomeScreen} from '../screens';
import {Movie} from '../interfaces/movieInterface';

export type RootStackParams = {
  Home: undefined;
  Detail: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};
