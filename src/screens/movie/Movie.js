import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getMoive} from '../../redux/actions/movie';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {API_IMAGE_URL} from '../../config';
import RoundBox from '../../components/RoundBox/RoundBox';
import Loading from '../../components/Loading/Loading';

Icon.loadFont();

function Separator() {
  return <View style={styles.separator} />;
}

const Movie = ({route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoive(id));
  }, [id, dispatch]);

  const {loaded, data: movie} = useSelector((state) => state.movie);

  const getGenres = (value) => {
    let genres = value.map((g) => g.name).join(', ');
    genres = genres.length <= 25 ? genres : genres.slice(0, 25) + '...';
    return genres;
  };

  return loaded ? (
    <ScrollView style={styles.container} scrollIndicatorInsets={{right: 1}}>
      <Image
        resizeMode="cover"
        source={{uri: API_IMAGE_URL + movie.backdrop_path}}
        style={styles.image}
      />
      <Image
        resizeMode="cover"
        source={{uri: API_IMAGE_URL + movie.poster_path}}
        style={styles.posterImage}
      />
      <View style={styles.bodyContainer}>
        <View style={styles.info}>
          <View style={styles.infoItem}>
            <Icon name="star" size={16} color="#C01F54" />
            <Text>{movie.vote_average}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text>{getGenres(movie.genres)}</Text>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.infoItem} />
          <View style={styles.infoItem}>
            <Text>{movie.release_date} </Text>
            <Icon name="circle" size={6} color="#C01F54" />
            <Text> {movie.runtime}m </Text>
          </View>
        </View>
        <Separator />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{movie.title}</Text>
        </View>
        {movie.tagline !== '' && (
          <View style={styles.tagline}>
            <Text style={styles.taglineText}>{movie?.tagline}</Text>
          </View>
        )}
        <View style={styles.overview}>
          <Text>{movie.overview}</Text>
        </View>
        <Separator />
        <View style={styles.cast}>
          <FlatList
            data={movie.credits.cast.slice(0, 12)}
            horizontal={true}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => Separator()}
            renderItem={({item}) => <RoundBox person={item} />}
          />
        </View>
      </View>
    </ScrollView>
  ) : (
    <Loading />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  separator: {
    height: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  info: {
    flexDirection: 'row',
    height: 30,
    flex: 1,
  },
  infoItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    right: 5,
  },
  posterImage: {
    position: 'absolute',
    top: 180,
    left: 20,
    width: 130,
    height: 200,
  },
  bodyContainer: {
    flex: 1,
    padding: 10,
  },
  overview: {
    padding: 10,
  },
  cast: {
    padding: 10,
  },
  tagline: {
    paddingLeft: 10,
    paddingRight: 10,
    padding: 10,
  },
  taglineText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#484848',
    fontStyle: 'italic',
  },
  titleContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#484848',
  },
});

export default Movie;
