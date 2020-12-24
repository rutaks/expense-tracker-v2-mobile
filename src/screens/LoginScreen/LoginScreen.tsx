import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const LoginScreen = () => {
  return (
    <Fragment>
      <StatusBar backgroundColor="#2059d4" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Image
            style={styles.topHeaderImage}
            source={require('../../../assets/img/login-cover.png')}
            resizeMode="cover"
          />
          <View style={styles.inputText}>
            <MaterialIcons name="mail-outline" color="#2059d4" size={22} />
            <TextInput
              placeholder="Email"
              style={{color: '#2059d4', flex: 1}}
            />
            <MaterialIcons name="check" color="#2059d4" size={22} />
          </View>
          <View style={styles.inputTextError}>
            <MaterialIcons name="lock-outline" color="#bc0523" size={22} />
            <TextInput
              placeholder="Password"
              style={{color: '#bc0523', flex: 1}}
            />
            <MaterialIcons name="close" color="#bc0523" size={22} />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'SemiBold',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default LoginScreen;

const {width, height} = Dimensions.get('window');

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
  button: {
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: '#2059d4',
    paddingVertical: 18,
    borderRadius: 8,
  },
  topHeaderImage: {
    width: width,
    height: height / 1.75,
    flex: 1,
  },
  inputText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    borderBottomWidth: 2,
    marginTop: 25,
    paddingHorizontal: 10,
    borderColor: '#2059d4',
    borderRadius: 1,
    paddingVertical: 2,
  },
  inputTextError: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    borderBottomWidth: 2,
    marginTop: 25,
    paddingHorizontal: 10,
    borderColor: '#bc0523',
    borderRadius: 1,
    paddingVertical: 2,
  },
});
