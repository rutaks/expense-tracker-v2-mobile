import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Typography} from '.';

export const styles = StyleSheet.create({
  alignedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: Dimensions.SIZE_XL,
  },
  primaryHeading: {
    ...Typography.body,
    color: Colors.PRIMARY,
    paddingTop: Dimensions.SIZE_L,
    paddingBottom: Dimensions.SIZE_L,
    fontSize: Dimensions.SIZE_XL,
    paddingLeft: Dimensions.SIZE_M,
  },
});

export default styles;
