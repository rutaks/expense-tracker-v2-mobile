import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../styles';
import {toCustomDateFormat} from '../../utils/formatting.util';
import {styles} from './DateField.styles';

const DateField = (props: {date: Date; onPressOut?: () => any}) => {
  console.log(props);
  return (
    <TouchableOpacity onPressOut={props.onPressOut} style={styles.row}>
      <Text style={styles.dateText}>
        {toCustomDateFormat(props?.date || new Date())}
      </Text>
      <MaterialCommunityIcons
        size={28}
        color={Colors.LIGHTER_BLUE}
        name="calendar"
      />
    </TouchableOpacity>
  );
};

export default DateField;
