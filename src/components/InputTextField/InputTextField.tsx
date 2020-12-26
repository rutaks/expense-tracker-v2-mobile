import React from 'react';
import {View, Text, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FormTextInputProps} from '../../interfaces/form-text-input.props.interface';
import {Colors, Dimensions, Typography} from '../../styles';
import {styles} from './InputTextField.styles';

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
  return (
    <View style={styles.inputField}>
      <View
        style={[
          styles.inputText,
          {borderColor: error ? Colors.RED : Colors.PRIMARY},
        ]}>
        <MaterialIcons
          name={icon}
          color={error ? Colors.RED : Colors.PRIMARY}
          size={Dimensions.SIZE_XL}
        />
        <TextInput
          {...rest}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          placeholder={placeholder}
          style={[
            {color: error ? Colors.RED : Colors.BLACK},
            {...Typography.body, flex: 1},
          ]}
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
