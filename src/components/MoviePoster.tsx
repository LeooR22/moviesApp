import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParams, 'Home'>;

export const MoviePoster: FC<Props> = ({movie, height = 420, width = 300}) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', movie)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
});