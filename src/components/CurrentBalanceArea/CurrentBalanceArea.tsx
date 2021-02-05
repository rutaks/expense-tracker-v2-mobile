import React from 'react';
import {View, Text} from 'react-native';
import FinancialRecord from '../../models/financial-record.model';
import {Colors, Dimensions} from '../../styles';
import {
  getExpenseSum,
  getIncomeSum,
  getTotalAmount,
} from '../../utils/financial-record.util';
import {formatToRoundedNum} from '../../utils/formatting.util';
import {SubBalanceArea} from './components';
import {styles} from './CurrentBalanceArea.styles';

/**
 * Function component representing user's current balance summary
 * @param props
 * @author Rutakayile Sam
 * @version 1.0
 */
const CurrentBalanceArea = (props: {items: FinancialRecord[]}) => {
  return (
    <View
      style={[
        styles.container,
        {
          paddingLeft: Dimensions.SIZE_L,
          paddingRight: Dimensions.SIZE_L,
        },
      ]}>
      <View style={styles.currentBalanceContainer}>
        <Text style={styles.currentBalanceHeading}>Current Balance</Text>
        <Text
          style={{
            ...styles.currentBalanceHeading,
            color: Colors.BLACK,
            paddingTop: Dimensions.SIZE_SM,
          }}>
          RWF
        </Text>
        <Text style={styles.currentBalanceAmout}>
          {formatToRoundedNum(getTotalAmount(props?.items))}
        </Text>
      </View>
      <View style={styles.subBalanceArea}>
        <SubBalanceArea
          title="Income"
          amount={formatToRoundedNum(getIncomeSum(props?.items))}
        />
        <View style={{paddingTop: Dimensions.SIZE_M}} />
        <SubBalanceArea
          title="Expense"
          amount={formatToRoundedNum(getExpenseSum(props?.items))}
        />
      </View>
    </View>
  );
};

export default CurrentBalanceArea;
