import React from 'react';
import {Text, View} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import {Colors, Dimensions, Typography} from '../../styles';
import {styles} from './ExpenseOrIncomeToggle.styles';

const ExpenseOrIncomeToggle = (props: {
  isIncome?: boolean;
  setIsIncome: (val: boolean) => any;
}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          ...Typography.subtitle,
          color: Colors.BLACK,
          fontSize: Dimensions.FONT_SIZE_M,
        }}>
        Toggle Expense/Income
      </Text>
      <ToggleSwitch
        isOn={props.isIncome}
        onColor={Colors.GREEN}
        offColor={Colors.RED}
        style={{width: Dimensions.SIZE_SM}}
        size={'medium'}
        onToggle={(value: boolean) => props?.setIsIncome(value)}
      />
    </View>
  );
};

export default ExpenseOrIncomeToggle;
