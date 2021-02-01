import React from 'react';
import {Text, TouchableOpacity, GestureResponderEvent} from 'react-native';
import Spinner from 'react-native-spinkit';
import ButtonStyle from '../../enums/ButtonStyle.enum';
import {Colors, Dimensions} from '../../styles';
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
 * Gets the respective style for button spinner based on ButtonStyle passed
 * @param buttonType
 */
const getSpinnerColor = (buttonType: ButtonStyle): any => {
  switch (buttonType) {
    case ButtonStyle.DEFAULT:
      return Colors.PRIMARY;
    case ButtonStyle.PRIMARY:
      return Colors.WHITE;
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
  buttonStyle,
}: {
  text?: string;
  type?: ButtonStyle;
  onClick?: (event: GestureResponderEvent) => any;
  isLoading?: boolean;
  buttonStyle?: any;
}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      disabled={isLoading}
      style={[
        buttonStyle,
        styles.button,
        isLoading ? styles.buttonLoading : getButtonStyle(type),
      ]}>
      <Text style={[styles.buttonText, getButtonTextStyle(type)]}>
        {isLoading ? (
          <Spinner
            size={Dimensions.SIZE_XL}
            isVisible={isLoading}
            color={getSpinnerColor(type)}
            type="ChasingDots"
          />
        ) : (
          text
        )}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
