import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Typography} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  title: {
    ...Typography.title,
    textAlign: 'center',
    paddingTop: Dimensions.SIZE_SM,
    paddingLeft: Dimensions.SIZE_SM,
    paddingRight: Dimensions.SIZE_SM,
  },
  text: {
    ...Typography.description,
    color: Colors.GRAY,
    textAlign: 'center',
    padding: Dimensions.SIZE_XL * 2,
    paddingTop: Dimensions.SIZE_SM,
  },
});
