import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Typography} from '../../../../styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingTop: Dimensions.SIZE_M * 1.2,
  },
  heading: {
    ...Typography.body,
    fontSize: Dimensions.FONT_SIZE_SM,
    color: Colors.GRAY,
  },
  amount: {
    ...Typography.bodyHeavy,
    fontSize: Dimensions.FONT_SIZE_M,
    paddingTop: Dimensions.SIZE_XS / 2,
  },
});
