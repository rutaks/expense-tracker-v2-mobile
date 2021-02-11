import React from 'react';
import {View, Text} from 'react-native';
import {Colors, Dimensions} from '../../styles';
import {formatToRoundedNum} from '../../utils/formatting.util';
import {SubBalanceArea} from './components';
import {styles} from './CurrentBalanceArea.styles';

/**
 * Function component representing user's current balance summary
 * @param props
 * @author Rutakayile Sam
 * @version 1.0
 */
const CurrentBalanceArea = (props: {
  balance: number;
  totalIncome: number;
  totalExpense: number;
}) => {
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
          {formatToRoundedNum(props?.balance)}
        </Text>
      </View>
      <View style={styles.subBalanceArea}>
        <SubBalanceArea
          title="Income"
          amount={formatToRoundedNum(props?.totalIncome)}
        />
        <View style={{paddingTop: Dimensions.SIZE_M}} />
        <SubBalanceArea
          title="Expense"
          amount={formatToRoundedNum(props?.totalExpense)}
        />
      </View>
    </View>
  );
};

export default CurrentBalanceArea;
