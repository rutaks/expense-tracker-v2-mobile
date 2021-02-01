import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../styles';
import {styles} from './DateField.styles';

const DateField = (props: {onDateSelected?: () => {}}) => {
  console.log(props);
  return (
    <TouchableOpacity style={styles.row}>
      <Text style={styles.dateText}>Tuesday, 25 September</Text>
      <MaterialCommunityIcons
        size={28}
        color={Colors.LIGHTER_BLUE}
        name="calendar"
      />
    </TouchableOpacity>
  );
};

export default DateField;
