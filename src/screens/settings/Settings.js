import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Settings = () => {
  return (
    <View style={styles.center}>
      <Text>I just wanted to use tab navigator. That's all</Text>
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

export default Settings;
