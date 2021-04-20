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
import {getSeries} from '../../redux/actions/series';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {API_IMAGE_URL} from '../../config';
import RoundBox from '../../components/RoundBox/RoundBox';
import Loading from '../../components/Loading/Loading';

Icon.loadFont();

function Separator() {
  return <View style={styles.separator} />;
}

const Series = ({route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSeries(id));
  }, [id, dispatch]);

  const {loaded, data: series} = useSelector((state) => state.series);

  const getGenres = (value) => {
    let genres = value.map((g) => g.name).join(', ');
    genres = genres.length <= 25 ? genres : genres.slice(0, 25) + '...';
    return genres;
  };

  return loaded ? (
    <ScrollView style={styles.container} scrollIndicatorInsets={{right: 1}}>
      <Image
        resizeMode="cover"
        source={{uri: API_IMAGE_URL + series.backdrop_path}}
        style={styles.image}
      />
      <Image
        resizeMode="cover"
        source={{uri: API_IMAGE_URL + series.poster_path}}
        style={styles.posterImage}
      />
      <View style={styles.bodyContainer}>
        <View style={styles.info}>
          <View style={styles.infoItem}>
            <Icon name="star" size={16} color="#C01F54" />
            <Text>{series.vote_average}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text>{getGenres(series.genres)}</Text>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.infoItem} />
          <View style={styles.infoItem}>
            <Text>{series.first_air_date.split('-')[0]} </Text>
            <Icon name="circle" size={6} color="#C01F54" />
            <Text> {series.number_of_seasons} season </Text>
          </View>
        </View>
        <Separator />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{series.name}</Text>
        </View>
        {series.tagline !== '' && (
          <View style={styles.tagline}>
            <Text style={styles.taglineText}>{series?.tagline}</Text>
          </View>
        )}
        <View style={styles.overview}>
          <Text>{series.overview}</Text>
        </View>
        <Separator />
        <View style={styles.cast}>
          <FlatList
            data={series.credits.cast.slice(0, 12)}
            horizontal={true}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => Separator()}
            renderItem={({item}) => <RoundBox person={item} />}
          />
        </View>
        <Separator />
        <View style={styles.seasonContainer}>
          <View>
            <Text style={styles.seasonTitle}>Seasons</Text>
          </View>
          {series.seasons?.map((s) => {
            return (
              <View key={'season' + s.id} style={styles.seasonItem}>
                <View style={styles.seasonItemImage}>
                  <Image
                    resizeMode="cover"
                    source={{uri: API_IMAGE_URL + s.poster_path}}
                    style={styles.seasonPosterImage}
                  />
                </View>
                <View style={styles.seasonOverview}>
                  <Text style={styles.seasonName}>{s.name}</Text>
                  <Text>
                    {s.overview.slice(0, 180)}
                    {s.overview.length > 180 && '...'}
                  </Text>
                </View>
              </View>
            );
          })}
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
    width: '100%',
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
  seasonPosterImage: {
    width: 70,
    height: 102,
    borderRadius: 5,
  },
  bodyContainer: {
    flex: 1,
    padding: 10,
  },
  overview: {
    padding: 10,
  },
  cast: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  tagline: {
    paddingLeft: 10,
    paddingRight: 10,
    padding: 10,
  },
  taglineText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#C01F54',
    fontStyle: 'italic',
  },
  seasonContainer: {padding: 10},
  seasonTitle: {fontSize: 20, fontWeight: '500', bottom: 10, color: '#484848'},
  seasonItemImage: {flex: 1},
  seasonItem: {flexDirection: 'row', height: 130, flex: 1},
  seasonOverview: {flex: 4, paddingLeft: 10, paddingRight: 10},
  seasonName: {fontSize: 14, fontWeight: '500', color: '#C01F54'},
  titleContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#484848',
  },
});

export default Series;
