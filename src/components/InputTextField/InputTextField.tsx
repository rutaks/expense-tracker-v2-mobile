import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FormTextInputProps} from '../../interfaces/form-text-input.props.interface';
import {Colors, Dimensions} from '../../styles';
import {styles} from './InputTextField.styles';

const getInputColor = (error: string, isFocused: boolean): string => {
  if (error) {
    return Colors.RED;
  }

  if (isFocused) {
    return Colors.PRIMARY;
  } else {
    return Colors.DARK_GRAY;
  }
};

/**
 * Function component representing custom input text field
 * @param props
 * @author Rutakayile Sam
 * @version 1.0
 */
const InputTextField = ({
  icon,
  onChangeText,
  onSubmitEditing,
  placeholder = '',
  error,
  ...rest
}: FormTextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.inputField}>
      <View
        style={[
          styles.inputText,
          {borderColor: getInputColor(error, isFocused)},
        ]}>
        <MaterialIcons
          name={icon}
          color={getInputColor(error, isFocused)}
          size={Dimensions.SIZE_XL}
        />
        <TextInput
          {...rest}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          placeholder={placeholder}
          style={[styles.textArea, {color: error ? Colors.RED : Colors.BLACK}]}
        />
        {error && (
          <MaterialIcons
            name="close"
            color={Colors.RED}
            size={Dimensions.SIZE_XL}
          />
        )}
      </View>
      {error && <Text style={styles.inputTextError}>{error}</Text>}
    </View>
  );
};

export default InputTextField;
