import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './SubBalanceArea.styles';

/**
 * Function component representing user's sub balance information
 * @param props
 * @author Rutakayile Sam
 * @version 1.0
 */
const SubBalanceArea = (props: {title: string; amount: string}) => {
  return (
    <View>
      <Text style={styles.heading}>{props.title}</Text>
      <Text style={styles.amount}>RWF {props.amount}</Text>
    </View>
  );
};

export default SubBalanceArea;
