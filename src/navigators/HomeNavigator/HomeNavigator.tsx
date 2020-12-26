import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../../screens';
import {routingConfig} from '../../config/routing-config';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name={routingConfig.screens.Login}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
