import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FormTextInputProps} from '../../interfaces/form-text-input.props.interface';
import {Colors, Dimensions} from '../../styles';
import {convertToNumber, numberWithCommas} from '../../utils/formatting.util';
import {styles} from './AmountInputField.styles';

const getInputColor = (error: string, isFocused: boolean): string => {
  if (error) {
    return Colors.RED;
  }

  if (isFocused) {
    return Colors.DARK_BLUE;
  } else {
    return Colors.LIGHT_BLUE;
  }
};

/**
 * Function component representing custom amount input field
 * @param props
 * @author Rutakayile Sam
 * @version 1.0
 */
const AmountInputField = ({
  icon,
  onSubmitEditing,
  placeholder = '',
  error,
  ...rest
}: FormTextInputProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);
  const [actualAmount, setActualAmount] = useState<any>();

  return (
    <View style={styles.inputField}>
      <Text style={styles.label}>{rest?.label}</Text>
      <View
        style={[
          styles.inputText,
          {borderColor: getInputColor(error, isFocused)},
        ]}>
        <TextInput
          {...rest}
          value={numberWithCommas(actualAmount)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={(value: any) => setActualAmount(convertToNumber(value))}
          onSubmitEditing={onSubmitEditing}
          placeholder={placeholder}
          placeholderTextColor={error ? Colors.RED : Colors.LIGHT_BLUE}
          style={[
            styles.textArea,
            {color: error ? Colors.RED : Colors.PRIMARY},
          ]}
        />
        <MaterialIcons
          name={icon}
          color={error ? Colors.RED : Colors.DARK_BLUE}
          size={Dimensions.SIZE_XL}
        />
      </View>
      {error && <Text style={styles.inputTextError}>{error}</Text>}
    </View>
  );
};

export default AmountInputField;
