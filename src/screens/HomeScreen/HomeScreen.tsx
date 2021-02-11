import React, {createRef, useEffect} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {
  CurrentBalanceArea,
  FinancialRecordModal,
  HomeTopBar,
  TransactionList,
} from '../../components';
import {useFinancialRecordList} from '../../context/FinancialRecordList';
import {Colors, Dimensions, Typography} from '../../styles';
import {styles} from './HomeScreen.styles';
import {useGetTransactionSums} from '../../hooks';
import {FinancialRecordListContextType} from '../../context/FinancialRecordList/FinancialRecordListContext';

/**
 * Function component representing app's home screen
 * @param props
 * @author Rutakayile Sam
 * @version 1.0
 */
const HomeScreen = () => {
  const financialRecordModalRef: any = createRef();
  const financialRecordListHook: FinancialRecordListContextType = useFinancialRecordList();
  const getTransactionSumsHook = useGetTransactionSums();

  useEffect(() => {
    financialRecordListHook.findAllFinancialRecords();
    getTransactionSumsHook.getBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openFinancialRecordModal = () => {
    if (financialRecordModalRef) {
      financialRecordModalRef.current?.open();
    }
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={Colors.PRIMARY} />
      <View style={styles.container}>
        <HomeTopBar openFinancialRecordModal={openFinancialRecordModal} />
        <CurrentBalanceArea
          balance={getTransactionSumsHook.balance}
          totalExpense={getTransactionSumsHook.totalExpense}
          totalIncome={getTransactionSumsHook.totalIncome}
        />
        <View
          style={{
            paddingLeft: Dimensions.SIZE_M,
            marginTop: Dimensions.SIZE_XL * 1.4,
            marginBottom: Dimensions.SIZE_L,
          }}>
          <Text style={{...Typography.title}}>Your transactions</Text>
        </View>
        <TransactionList
          loading={financialRecordListHook.isLoadingInitially}
          items={financialRecordListHook.financialRecords}
        />
      </View>
      <FinancialRecordModal ref={financialRecordModalRef} />
    </SafeAreaView>
  );
};

export default HomeScreen;
