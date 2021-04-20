import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/home/Home';
import Movie from '../screens/movie/Movie';
import Series from '../screens/series/Series';
import Search from '../screens/search/Search';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTintColor: '#C01F54',
  headerBackTitle: 'Back',
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="TMDB" component={Home} />
      <Stack.Screen
        name="Movie"
        component={Movie}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Series"
        component={Series}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, SearchStackNavigator};
