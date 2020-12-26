import {StyleSheet} from 'react-native';
import {Dimensions} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.WINDOW_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: Dimensions.SIZE_SM,
    paddingRight: Dimensions.SIZE_SM,
    paddingBottom: Dimensions.SIZE_XS,
    // borderBottomWidth: 2,
    // borderBottomColor: Colors.LIGHTER_GRAY,
  },
});
