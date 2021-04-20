import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabNavigator from './TabNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
