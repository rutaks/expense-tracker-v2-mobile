import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Typography} from '../../styles';

export const styles = StyleSheet.create({
  actionSheet: {backgroundColor: 'transparent'},
  sheet: {
    backgroundColor: Colors.WHITE,
    borderTopRightRadius: Dimensions.SIZE_XL,
    borderTopLeftRadius: Dimensions.SIZE_XL,
    padding: Dimensions.SIZE_L,
    paddingBottom: Dimensions.SIZE_XL * 4,
    flex: 1,
  },
  closeButton: {
    height: Dimensions.SIZE_XL * 1.3,
    width: Dimensions.SIZE_XL * 1.3,
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: Dimensions.SIZE_XL,
  },
  dateRow: {
    paddingLeft: Dimensions.SIZE_L,
    paddingRight: Dimensions.SIZE_L,
    paddingTop: Dimensions.SIZE_XL * 1.3,
    paddingBottom: Dimensions.SIZE_XL,
  },
  notesField: {
    ...Typography.description,
    backgroundColor: Colors.WHITE,
    marginTop: Dimensions.FONT_SIZE_M,
    marginBottom: Dimensions.FONT_SIZE_M,
    paddingBottom: Dimensions.FONT_SIZE_M * 10,
    paddingLeft: Dimensions.FONT_SIZE_M,
    borderColor: Colors.LIGHTER_BLUE,
    borderWidth: Dimensions.SIZE_XS / 6,
    borderRadius: Dimensions.SIZE_M,
  },
  moreDetails: {
    backgroundColor: Colors.LIGHTER_GRAY,
    borderRadius: Dimensions.SIZE_XS,
    paddingTop: Dimensions.FONT_SIZE_XL,
    paddingLeft: Dimensions.SIZE_L,
    paddingRight: Dimensions.SIZE_L,
  },
});
