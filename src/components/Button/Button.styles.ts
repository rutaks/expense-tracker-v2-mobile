import {StyleSheet} from 'react-native';
import {Colors, Typography} from '../../styles';

export const styles = StyleSheet.create({
  button: {
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    paddingVertical: 18,
    borderRadius: 8,
  },
  buttonText: {
    ...Typography.bodyHeavy,
  },
  buttonTextPrimary: {
    color: Colors.WHITE,
  },
  buttonTextDefault: {
    color: Colors.PRIMARY,
  },
  buttonPrimary: {
    backgroundColor: Colors.PRIMARY,
  },
  buttonDefault: {
    backgroundColor: Colors.WHITE,
    color: Colors.PRIMARY,
  },
  buttonLoading: {
    backgroundColor: Colors.NAVY_BLUE,
  },
});
