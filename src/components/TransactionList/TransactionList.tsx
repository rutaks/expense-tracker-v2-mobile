import React from 'react';
import {View, FlatList} from 'react-native';
import {TransactionListItem} from '..';
import FinancialRecord from '../../models/financial-record.model';
import DataLoadingView from '../DataLoadingView';
import NoDataView from '../NoDataView';
import {styles} from './TransactionList.styles';

/**
 * Function component representing transaction list
 * @param props
 * @author Rutakayile Sam
 * @version 1.0
 */
const TransactionList = (props: {
  items?: FinancialRecord[];
  loading: boolean;
}) => {
  if (props?.loading) {
    return (
      <DataLoadingView title="Loading..." text="Swapping time and space..." />
    );
  }

  if (!props.items || props.items?.length < 1) {
    return (
      <NoDataView
        title="No Records found"
        text="It seems like you do not have any record registered yet"
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props?.items}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({index, item}) => (
          <TransactionListItem item={item} key={index} />
        )}
      />
    </View>
  );
};

export default TransactionList;
