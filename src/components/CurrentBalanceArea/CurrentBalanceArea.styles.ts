import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Typography} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.LIGHTER_GRAY,
  },
  currentBalanceContainer: {
    flexDirection: 'column',
    paddingTop: Dimensions.SIZE_M * 2.5,
  },
  currentBalanceHeading: {
    ...Typography.body,
    fontSize: Dimensions.FONT_SIZE_L,
    color: Colors.GRAY,
  },
  currentBalanceAmout: {
    ...Typography.label,
    fontSize: Dimensions.FONT_SIZE_XL * 1.5,
    paddingTop: Dimensions.SIZE_SM,
  },
  subBalanceArea: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingTop: Dimensions.SIZE_M * 1.2,
    paddingBottom: Dimensions.SIZE_M * 2,
  },
});
