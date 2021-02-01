import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Typography} from '../../styles';

export const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    marginHorizontal: Dimensions.SIZE_L,
  },
  textArea: {
    ...Typography.body,
    fontSize: Dimensions.FONT_SIZE_XL * 1.2,
    flex: 1,
  },
  label: {
    ...Typography.subtitle,
    color: Colors.BLACK,
    fontSize: Dimensions.FONT_SIZE_L,
    marginTop: Dimensions.SIZE_M,
  },
  inputText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: Dimensions.SIZE_SM / 9,
    paddingVertical: Dimensions.SIZE_SM / 3,
  },
  inputTextError: {
    paddingTop: Dimensions.SIZE_M,
    ...Typography.body,
    color: Colors.RED,
  },
});
