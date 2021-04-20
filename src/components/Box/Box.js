import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {API_IMAGE_URL} from '../../config';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

function Box({item, type = 'movie'}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(type === 'movie' ? 'Movie' : 'Series', {
          id: item.id,
        })
      }>
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          source={{
            uri: API_IMAGE_URL + item.poster_path,
          }}
          style={styles.thumbnail}
        />
        <View style={styles.exItemMetaContainer}>
          <Text style={styles.textTitle}>
            {item?.original_title || item?.original_name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 140,
    flex: 1,
    backgroundColor: '#fff',
  },
  exItemContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  thumbnail: {
    height: 200,
    borderRadius: 30 / 2,
  },
  exItemMetaContainer: {
    padding: 5,
  },
  textTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#484848',
  },
});

export default Box;
