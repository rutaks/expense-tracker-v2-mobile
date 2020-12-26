import React from 'react';
import {Text, TouchableOpacity, GestureResponderEvent} from 'react-native';
import ButtonStyle from '../../enums/ButtonStyle.enum';
import {styles} from './Button.styles';

/**
 * Gets the respective style for button layout based on ButtonStyle passed
 * @param buttonType
 */
const getButtonStyle = (buttonType: ButtonStyle): any => {
  switch (buttonType) {
    case ButtonStyle.DEFAULT:
      return styles.buttonDefault;
    case ButtonStyle.PRIMARY:
      return styles.buttonPrimary;
    default:
      break;
  }
};

/**
 * Gets the respective style for button text based on ButtonStyle passed
 * @param buttonType
 */
const getButtonTextStyle = (buttonType: ButtonStyle): any => {
  switch (buttonType) {
    case ButtonStyle.DEFAULT:
      return styles.buttonTextDefault;
    case ButtonStyle.PRIMARY:
      return styles.buttonTextPrimary;
    default:
      break;
  }
};

/**
 * Function component representing custom button
 * @param props
 * @author Rutakayile Sam
 * @version 1.0
 */
const Button = ({
  text,
  onClick,
  type = ButtonStyle.DEFAULT,
  isLoading,
}: {
  text?: string;
  type?: ButtonStyle;
  onClick?: (event: GestureResponderEvent) => {};
  isLoading?: boolean;
}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      disabled={isLoading}
      style={[
        styles.button,
        isLoading ? styles.buttonLoading : getButtonStyle(type),
      ]}>
      <Text style={[styles.buttonText, getButtonTextStyle(type)]}>
        {isLoading ? 'Loading...' : text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
