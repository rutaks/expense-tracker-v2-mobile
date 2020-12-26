import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  Text,
  View,
} from 'react-native';
import {InputTextField} from '../../components';
import Button from '../../components/Button';
import ButtonStyle from '../../enums/ButtonStyle.enum';
import {Colors, Dimensions, Typography} from '../../styles';

const LoginScreen = () => {
  return (
    <Fragment>
      <StatusBar backgroundColor="#2059d4" />
      <SafeAreaView style={{backgroundColor: Colors.WHITE}}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={{paddingBottom: Dimensions.SIZE_XL * 3}}>
            <Image
              style={styles.topHeaderImage}
              source={require('../../../assets/img/login-cover.png')}
              resizeMode="cover"
            />
            <Text
              style={{...Typography.subtitle, paddingLeft: Dimensions.SIZE_L}}>
              Login in to continue
            </Text>
            <InputTextField icon="mail-outline" placeholder="Email" />
            <InputTextField icon="lock-outline" placeholder="Password" />
            <Button type={ButtonStyle.PRIMARY} text="LOGIN" />
            <Button text="Don't have an account?" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  topHeaderImage: {
    width: Dimensions.SCREEN_WIDTH,
    height: Dimensions.SCREEN_HEIGHT / 2,
    marginBottom: Dimensions.SIZE_L,
  },
});
