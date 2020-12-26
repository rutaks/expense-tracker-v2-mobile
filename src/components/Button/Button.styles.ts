import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Typography} from '../../styles';

export const styles = StyleSheet.create({
  button: {
    marginHorizontal: Dimensions.SIZE_L,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Dimensions.SIZE_L,
    paddingVertical: Dimensions.SIZE_L,
    borderRadius: Dimensions.SIZE_XS,
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
  spinnerPrimary: {
    backgroundColor: Colors.WHITE,
  },
  spinnerDefault: {
    backgroundColor: Colors.PRIMARY,
  },
});
