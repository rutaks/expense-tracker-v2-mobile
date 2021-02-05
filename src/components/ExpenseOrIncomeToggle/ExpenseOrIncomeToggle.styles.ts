import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Typography} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    alignSelf: 'center',
    paddingLeft: Dimensions.SIZE_XL * 2,
    paddingRight: Dimensions.SIZE_XL * 2,
  },
  selectedContainer: {
    backgroundColor: Colors.PRIMARY,
    padding: Dimensions.SIZE_M * 1.1,
    paddingLeft: Dimensions.SIZE_XL * 2,
    paddingRight: Dimensions.SIZE_XL * 2,
  },
  unSelectedContainer: {
    borderWidth: Dimensions.SIZE_XS / 6,
    borderBottomWidth: Dimensions.SIZE_XS / 6,
    borderColor: Colors.GRAY,
    backgroundColor: Colors.WHITE,
    padding: Dimensions.SIZE_M,
  },
  text: {
    ...Typography.bodyHeavy,
  },
  unSelectedText: {color: Colors.GRAY},
  selectedText: {color: Colors.WHITE},
});
