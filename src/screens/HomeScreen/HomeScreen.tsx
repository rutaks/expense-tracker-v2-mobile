import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {CurrentBalanceArea, HomeTopBar} from '../../components';
import {Colors} from '../../styles';
import {styles} from './HomeScreen.styles';

/**
 * Function component representing app's home screen
 * @param props
 * @author Rutakayile Sam
 * @version 1.0
 */
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={Colors.PRIMARY} />
      <View style={styles.container}>
        <HomeTopBar />
        <CurrentBalanceArea />
        {/* <View
          style={{
            paddingLeft: Dimensions.SIZE_L,
            paddingRight: Dimensions.SIZE_L,
          }}></View> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
