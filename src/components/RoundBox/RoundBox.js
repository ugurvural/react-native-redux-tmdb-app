import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {API_IMAGE_URL} from '../../config';

function RoundBox({person}) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={{
          uri: API_IMAGE_URL + person.profile_path,
        }}
        style={styles.thumbnail}
      />
      <View style={styles.name}>
        <Text style={styles.nameText}>{person.name.slice(0, 25)}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 150,
    flex: 1,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  exItemContainer: {
    flexDirection: 'row',
  },
  thumbnail: {
    height: 100,
    borderRadius: 50,
  },
  name: {
    padding: 3,
  },
  nameText: {
    fontSize: 14,
    color: '#484848',
  },
});

export default RoundBox;
