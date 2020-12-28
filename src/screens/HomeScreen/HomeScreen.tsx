import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {
  CurrentBalanceArea,
  HomeTopBar,
  TransactionList,
} from '../../components';
import {Colors, Dimensions, Typography} from '../../styles';
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
        <View
          style={{
            paddingLeft: Dimensions.SIZE_M,
            marginTop: Dimensions.SIZE_XL * 1.4,
            marginBottom: Dimensions.SIZE_L,
          }}>
          <Text style={{...Typography.title}}>Your transactions</Text>
        </View>
        <TransactionList />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
