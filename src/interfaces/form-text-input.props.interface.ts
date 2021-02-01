import {TextInputProps} from 'react-native';

export interface FormTextInputProps extends TextInputProps {
  icon?: string;
  label?: string;
  onChangeText?: any;
  onSubmitEditing?: any;
  placeholder?: string;
  error?: any;
  textContainerStyle?: any;
}
