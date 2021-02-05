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

/**
 * Function component representing app's home screen
 * @param props
 * @author Rutakayile Sam
 * @version 1.0
 */
const HomeScreen = () => {
  const financialRecordModalRef: any = createRef();
  const financialRecordListHook = useFinancialRecordList();

  useEffect(() => {
    financialRecordListHook.findAllFinancialRecords();
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
        <CurrentBalanceArea items={financialRecordListHook.financialRecords} />
        <View
          style={{
            paddingLeft: Dimensions.SIZE_M,
            marginTop: Dimensions.SIZE_XL * 1.4,
            marginBottom: Dimensions.SIZE_L,
          }}>
          <Text style={{...Typography.title}}>Your transactions</Text>
        </View>
        {/* <View style={{paddingBottom: Dimensions.SIZE_L}}> */}
        <TransactionList
          loading={financialRecordListHook.isLoadingInitially}
          items={financialRecordListHook.financialRecords}
        />
        {/* </View> */}
      </View>
      <FinancialRecordModal ref={financialRecordModalRef} />
    </SafeAreaView>
  );
};

export default HomeScreen;
