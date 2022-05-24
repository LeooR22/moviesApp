import React, {useRef} from 'react';
import {View, Text, Animated, Button} from 'react-native';
import {useFade} from '../hooks/useFade';

export const FadeScreen = () => {
  const {fadeIn, fadeOut, opacity} = useFade();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084f6a',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 8,
          opacity: opacity,
          marginBottom: 15,
        }}
      />

      <Button title="Fadein" onPress={() => fadeIn()} />
      <Button title="FadeOut" onPress={() => fadeOut()} />
    </View>
  );
};
