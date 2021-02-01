import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Colors, Common} from '../../styles';
import {AmountInputField} from '../../components';
import {styles} from './FinancialRecordModal.styles';
import Button from '../Button';
import ButtonStyle from '../../enums/ButtonStyle.enum';
import IconButton from '../IconButton';
import DateField from '../DateField';
import ExpenseOrIncomeToggle from '../ExpenseOrIncomeToggle';

/**
 * Function component representing financial record modal
 * @param props
 * @author Rutakayile Sam
 * @version 1.0
 */
const FinancialRecordModal = React.forwardRef((props: any, ref: any) => {
  const [isIncome, setIsIncome] = useState(false);

  return (
    <Modalize ref={ref}>
      <ScrollView style={styles.sheet}>
        <View style={Common.alignedRow}>
          <Text style={Common.primaryHeading}>Add Expense</Text>
          <IconButton
            icon="close"
            color={Colors.BLACK}
            containerStyle={styles.closeButton}
          />
        </View>
        <AmountInputField
          keyboardType="decimal-pad"
          label="Amount"
          icon="payments"
          placeholder="Enter amount"
        />
        <View style={styles.dateRow}>
          <DateField />
        </View>
        <View style={styles.moreDetails}>
          <ExpenseOrIncomeToggle
            isIncome={isIncome}
            setIsIncome={setIsIncome}
          />
          <TextInput
            numberOfLines={2}
            placeholder="Notes..."
            style={styles.notesField}
          />
        </View>
        <Button type={ButtonStyle.PRIMARY} text="Proceed" />
      </ScrollView>
    </Modalize>
  );
});

export default FinancialRecordModal;
