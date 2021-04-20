import React, {useEffect} from 'react';
import {ScrollView, View, FlatList, Text, StyleSheet} from 'react-native';
import Box from '../../components/Box/Box';
import RoundBox from '../../components/RoundBox/RoundBox';
import {useSelector, useDispatch} from 'react-redux';
import {getPouparMovies} from '../../redux/actions/popularMovies';
import {getPopularSeries} from '../../redux/actions/popularSeries';
import {getPopularPersons} from '../../redux/actions/popularPersons';

function Separator() {
  return <View style={{width: 10, borderBottomColor: '#a9a9a9'}} />;
}

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPouparMovies());
    dispatch(getPopularSeries());
    dispatch(getPopularPersons());
  }, [dispatch]);

  const {popularMovies, popularSeries, popularPersons} = useSelector(
    (state) => state,
  );

  return (
    <ScrollView scrollIndicatorInsets={{right: 1}}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Popular Movies</Text>
        </View>
        <View style={styles.headslider}>
          {popularMovies.loaded && (
            <FlatList
              data={popularMovies.data}
              horizontal={true}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => Separator()}
              renderItem={({item}) => <Box item={item} type="movie" />}
            />
          )}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Popular Series</Text>
        </View>
        <View style={styles.headslider}>
          {popularSeries.loaded && (
            <FlatList
              data={popularSeries.data}
              horizontal={true}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => Separator()}
              renderItem={({item}) => <Box item={item} type="series" />}
            />
          )}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Popular Persons</Text>
        </View>
        <View style={styles.headslider}>
          {popularPersons.loaded && (
            <FlatList
              data={popularPersons.data}
              horizontal={true}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => Separator()}
              renderItem={({item}) => <RoundBox person={item} />}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingLeft: 10,
  },
  titleContainer: {
    height: 35,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#484848',
  },
});

export default Home;
