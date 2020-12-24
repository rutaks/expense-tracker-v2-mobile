import React, {Fragment, useState} from 'react';
import {StyleSheet, View, StatusBar, Image} from 'react-native';
import Spinner from 'react-native-spinkit';

const SplashScreen = () => {
  const [isLoading] = useState(true);

  return (
    <Fragment>
      <StatusBar backgroundColor="#2059d4" />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../../assets/img/logo-main.png')}
          resizeMode="cover"
        />
        <Spinner isVisible={isLoading} style={styles.spinner} type="Pulse" />
      </View>
    </Fragment>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 140,
    height: 140,
  },
  spinner: {
    marginTop: 15,
  },
});
