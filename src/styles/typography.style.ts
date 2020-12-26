import {StyleSheet} from 'react-native';
import Dimensions from './dimensions.style';
import Colors from './colors.style';

export default StyleSheet.create({
  title: {
    color: Colors.BLACK,
    fontSize: Dimensions.FONT_SIZE_XL,
    fontFamily: 'Montserrat-Black',
  },
  subtitle: {
    fontFamily: 'Montserrat-Bold',
    color: Colors.BLACK,
    fontSize: Dimensions.FONT_SIZE_L,
  },
  body: {
    fontFamily: 'Montserrat-Medium',
    color: Colors.GRAY,
    fontSize: Dimensions.FONT_SIZE_M,
  },
  bodyHeavy: {
    fontFamily: 'Montserrat-Bold',
    color: Colors.GRAY,
    fontSize: Dimensions.FONT_SIZE_M,
  },
  label: {
    fontFamily: 'Montserrat-Light',
    color: Colors.BLACK,
    fontSize: Dimensions.FONT_SIZE_SM,
  },
});
