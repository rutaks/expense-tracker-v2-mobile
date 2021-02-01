import React from 'react';
import {View, FlatList} from 'react-native';
import {TransactionListItem} from '..';
import FinancialRecordType from '../../enums/financial-record-type.enum';
import FinancialRecord from '../../models/financial-record.model';
import {Dimensions} from '../../styles';

const data: FinancialRecord[] = [
  {
    description: 'Description',
    amount: 12000,
    type: FinancialRecordType.EXPENSE,
  },
  {
    description: 'Description',
    amount: 12000,
    type: FinancialRecordType.INCOME,
  },
  {
    description: 'Description',
    amount: 12000,
    type: FinancialRecordType.EXPENSE,
  },
  {
    description: 'Description',
    amount: 12000,
    type: FinancialRecordType.EXPENSE,
  },
];

const TransactionList = () => {
  return (
    <View
      style={{
        paddingLeft: Dimensions.SIZE_L,
        paddingRight: Dimensions.SIZE_L,
      }}>
      <FlatList
        data={data}
        renderItem={({index, item}) => (
          <TransactionListItem item={item} key={index} />
        )}
      />
    </View>
  );
};

export default TransactionList;
