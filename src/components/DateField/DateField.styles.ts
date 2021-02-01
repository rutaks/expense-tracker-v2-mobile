import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Typography} from '../../styles';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    ...Typography.subtitle,
    color: Colors.DARK_BLUE,
    fontSize: Dimensions.FONT_SIZE_L,
  },
});
