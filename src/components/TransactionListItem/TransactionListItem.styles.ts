import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Typography} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Dimensions.SIZE_M,
    paddingBottom: Dimensions.SIZE_M,
  },
  tag: {
    alignItems: 'center',
    marginTop: Dimensions.SIZE_XS / 2,
    paddingTop: Dimensions.SIZE_XS / 4,
    paddingBottom: Dimensions.SIZE_XS / 4,
    backgroundColor: Colors.LIGHTER_GRAY,
    borderRadius: Dimensions.SIZE_SM / 2,
  },
  row: {
    flexDirection: 'column',
  },
  date: {...Typography.body, marginTop: Dimensions.SIZE_XS / 2},
  amount: {
    ...Typography.subtitle,
    color: Colors.BLACK,
  },
  expense: {
    color: Colors.RED,
  },
  income: {
    color: Colors.GREEN,
  },
});
