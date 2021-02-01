import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.WINDOW_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: Dimensions.SIZE_SM,
    paddingRight: Dimensions.SIZE_SM,
    backgroundColor: Colors.LIGHTER_GRAY,
    paddingBottom: Dimensions.SIZE_XS,
    // borderBottomWidth: 2,
    // borderBottomColor: Colors.LIGHTER_GRAY,
  },
});
