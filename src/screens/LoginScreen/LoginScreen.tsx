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

/**
 * Function component representing app's navigation tree head
 * @param props
 * @author Rutakayile Sam
 * @version 1.0
 */
const LoginScreen = () => {
  return (
    <Fragment>
      <StatusBar backgroundColor={Colors.PRIMARY} />
      <SafeAreaView style={{backgroundColor: Colors.WHITE}}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={{paddingBottom: Dimensions.SIZE_XL * 2}}>
            <Image
              style={styles.topHeaderImage}
              source={require('../../../assets/img/login-cover.png')}
              resizeMode="cover"
            />
            <Text style={styles.heading}>Login in to continue</Text>
            <InputTextField icon="mail-outline" placeholder="Email" />
            <InputTextField icon="lock-outline" placeholder="Password" />
            <View style={{marginTop: Dimensions.SIZE_L}} />
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
  heading: {...Typography.subtitle, paddingLeft: Dimensions.SIZE_L},
  topHeaderImage: {
    width: Dimensions.SCREEN_WIDTH,
    height: Dimensions.SCREEN_HEIGHT / 1.85,
    marginBottom: Dimensions.SIZE_L,
  },
});
