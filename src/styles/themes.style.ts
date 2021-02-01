import {DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';
import COLORS from './colors.style';

/** Default theme of application */
export const defaultTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    primary: COLORS.PRIMARY,
    background: COLORS.WHITE,
    text: COLORS.DARK_GRAY,
  },
};

export default defaultTheme;
