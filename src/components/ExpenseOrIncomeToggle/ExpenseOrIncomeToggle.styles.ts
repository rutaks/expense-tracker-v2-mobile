import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: Dimensions.SIZE_XS / 6,
    borderRadius: Dimensions.SIZE_M,
    borderColor: Colors.LIGHTER_BLUE,
    backgroundColor: Colors.WHITE,
    paddingLeft: Dimensions.SIZE_L,
    paddingRight: Dimensions.SIZE_L,
    paddingTop: Dimensions.SIZE_L * 1.3,
    paddingBottom: Dimensions.SIZE_L * 1.3,
    alignItems: 'center',
  },
});
