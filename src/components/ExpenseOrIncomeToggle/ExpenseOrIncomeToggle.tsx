import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Dimensions} from '../../styles';
import {styles} from './ExpenseOrIncomeToggle.styles';

const ExpenseOrIncomeToggle = (props: {
  error: string;
  isIncome?: boolean;
  setIsIncome: (val: boolean) => any;
}) => {
  const getContainerStyle = (check: boolean) => {
    return check ? styles.selectedContainer : styles.unSelectedContainer;
  };

  const getTextStyle = (check: boolean) => {
    return check ? styles.selectedText : styles.unSelectedText;
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          ...getContainerStyle(props?.isIncome),
          ...styles.buttonContainer,
          borderTopStartRadius: Dimensions.SIZE_SM,
          borderBottomStartRadius: Dimensions.SIZE_SM,
        }}
        onPressOut={() => props?.setIsIncome(true)}>
        <Text style={{...styles.text, ...getTextStyle(props?.isIncome)}}>
          Income
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...getContainerStyle(!props?.isIncome),
          ...styles.buttonContainer,
          borderTopEndRadius: Dimensions.SIZE_SM,
          borderBottomEndRadius: Dimensions.SIZE_SM,
        }}
        onPressOut={() => props?.setIsIncome(false)}>
        <Text style={{...styles.text, ...getTextStyle(!props?.isIncome)}}>
          Expense
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExpenseOrIncomeToggle;
