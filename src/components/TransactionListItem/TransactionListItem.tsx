import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FinancialRecordType from '../../enums/financial-record-type.enum';
import FinancialRecord from '../../models/financial-record.model';
import {styles} from './TransactionListItem.styles';

const TransactionListItem = (props: {item: FinancialRecord}) => {
  const {EXPENSE} = FinancialRecordType;

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <Text
          style={[
            styles.amount,
            props?.item?.type === EXPENSE ? styles.expense : styles.income,
          ]}>
          RWF {props?.item?.type === EXPENSE ? '-' : '+'}
          {props.item.amount}
        </Text>

        {/* <View style={styles.tag}>
          <Text style={{...Typography.body}}>{'No Tag'}</Text>
        </View> */}
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          {props.item.description || 'No description'}
        </Text>
        <Text style={styles.date}>June 11, 2020</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionListItem;
