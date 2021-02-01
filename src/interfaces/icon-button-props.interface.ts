import {StyleProp, ViewStyle} from 'react-native';

export interface IconButtonProps {
  /**
   * Icon type displayed on the left side of component
   */
  icon: string;
  /**
   * Triggers a desired action when component tapped
   */
  onTap?: () => {};
  /**
   * Determines color of button
   */
  color?: string;

  containerStyle?: StyleProp<ViewStyle>;

  iconSize?: number;
}
