import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {routingConfig} from '../../config/routing-config';
import {AuthNavigator, HomeNavigator} from '..';

const Stack = createStackNavigator();

/**
 * Function component representing app's navigation tree head
 * @param props
 * @author Rutakayile Sam
 * @version 1.0
 */
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name={routingConfig.navigators.Auth}
          component={AuthNavigator}
        />
        <Stack.Screen
          name={routingConfig.navigators.Home}
          component={HomeNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
