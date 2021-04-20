import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Search = () => {
  return (
    <View style={styles.center}>
      <Text>Search will be here soon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default Search;
