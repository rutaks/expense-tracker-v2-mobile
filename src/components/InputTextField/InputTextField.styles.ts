import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Typography} from '../../styles';

export const styles = StyleSheet.create({
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
    width: Dimensions.SCREEN_WIDTH,
    height: Dimensions.SCREEN_HEIGHT / 1.75,
    flex: 1,
  },
  inputField: {
    marginHorizontal: 15,
  },
  inputText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    marginTop: 25,
    paddingHorizontal: 10,
    borderRadius: 1,
    paddingVertical: 2,
  },
  inputTextError: {
    paddingTop: Dimensions.SIZE_M,
    ...Typography.body,
    color: Colors.RED,
  },
});
