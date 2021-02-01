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
    flex: 1,
    paddingLeft: Dimensions.SIZE_SM / 1.5,
  },
  inputText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: Dimensions.SIZE_SM / 6,
    marginTop: Dimensions.SIZE_M,
    paddingVertical: Dimensions.SIZE_SM / 3,
  },
  inputTextError: {
    paddingTop: Dimensions.SIZE_M,
    ...Typography.body,
    color: Colors.RED,
  },
});
