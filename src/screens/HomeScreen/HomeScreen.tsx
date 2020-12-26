import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {HomeTopBar} from '../../components';
import {styles} from './HomeScreen.styles';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <HomeTopBar />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
