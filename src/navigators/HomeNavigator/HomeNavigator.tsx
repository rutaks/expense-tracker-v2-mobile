import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../screens';
import {routingConfig} from '../../config/routing-config';
import {FinancialRecordListProvider} from '../../context/FinancialRecordList';

const Stack = createStackNavigator();

/**
 * Function component representing app's home navigator tree head
 * @param props
 * @author Rutakayile Sam
 * @version 1.0
 */
const HomeNavigator = () => {
  return (
    <FinancialRecordListProvider>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name={routingConfig.screens.Home}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </FinancialRecordListProvider>
  );
};

export default HomeNavigator;
