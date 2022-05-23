import React, {FC} from 'react';
import {View, Text, FlatList} from 'react-native';
import currencyFormatter from 'currency-formatter';

import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieInterface';
import {CastItem} from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails: FC<Props> = ({movieFull, cast}) => {
  return (
    <>
      {/* Detalles */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" size={16} color="grey" />
          <Text>{movieFull.vote_average}</Text>

          <Text style={{marginLeft: 5}}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
        {/* Historia */}
        <Text
          style={{
            fontSize: 23,
            color: 'black',
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Historia
        </Text>

        <Text style={{color: 'black', fontSize: 16}}>{movieFull.overview}</Text>

        <Text
          style={{
            fontSize: 23,
            color: 'black',
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Presupuesto
        </Text>

        <Text style={{color: 'black', fontSize: 16}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})} USD
        </Text>
      </View>

      {/* Casting */}
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 23,
            color: 'black',
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 70}}
        />
        {/*  */}
      </View>
    </>
  );
};
