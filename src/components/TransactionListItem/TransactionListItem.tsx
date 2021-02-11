import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useFinancialRecordList} from '../../context/FinancialRecordList';
import {FinancialRecordListContextType} from '../../context/FinancialRecordList/FinancialRecordListContext';
import FinancialRecordType from '../../enums/financial-record-type.enum';
import FinancialRecord from '../../models/financial-record.model';
import {formatToRoundedNum} from '../../utils/formatting.util';
import {displayConfirmationDialog} from '../../utils/prompts.util';
import {styles} from './TransactionListItem.styles';

const TransactionListItem = (props: {item: FinancialRecord}) => {
  const {EXPENSE} = FinancialRecordType;
  const financialRecordListHook: FinancialRecordListContextType = useFinancialRecordList();

  return (
    <TouchableOpacity
      style={styles.container}
      onLongPress={() =>
        displayConfirmationDialog({
          title: 'Deleting record',
          message:
            'You are about to delete this record, are you sure you want to continue?',
          onContinue: () =>
            financialRecordListHook.removeRecord(props?.item?.id),
        })
      }>
      <View style={styles.row}>
        <Text
          style={[
            styles.amount,
            props?.item?.type === EXPENSE ? styles.expense : styles.income,
          ]}>
          RWF {formatToRoundedNum(props?.item?.amount)}
        </Text>

        {/* <View style={styles.tag}>
          <Text style={{...Typography.body}}>{'No Tag'}</Text>
        </View> */}
      </View>
      <View style={styles.row}>
        <Text numberOfLines={1} style={styles.description}>
          {props.item.description || 'No description'}
        </Text>
        <Text style={styles.date}>June 11, 2020</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionListItem;
