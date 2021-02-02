import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Colors, Common} from '../../styles';
import {AmountInputField, CalendarView} from '../../components';
import {styles} from './FinancialRecordModal.styles';
import Button from '../Button';
import ButtonStyle from '../../enums/ButtonStyle.enum';
import IconButton from '../IconButton';
import DateField from '../DateField';
import ExpenseOrIncomeToggle from '../ExpenseOrIncomeToggle';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FinancialRecordType from '../../enums/financial-record-type.enum';
import {getFormikError} from '../../utils/formik.util';
import {useFinancialRecordList} from '../../context/FinancialRecordList';
import FinancialRecord from '../../models/financial-record.model';

const initialValue = {
  amount: null,
  description: '',
  type: FinancialRecordType.INCOME,
  occurredOn: new Date(),
};

const validationSchema = Yup.object().shape({
  title: Yup.string(),
  amount: Yup.number()
    .typeError('Enter an amount')
    .min(1, 'Invalid amount')
    .required('Amount is required'),
  type: Yup.mixed<FinancialRecordType>()
    .oneOf(Object.values(FinancialRecordType))
    .required('Please select if it is an expense or income'),
  occurredOn: Yup.string(),
});

/**
 * Function component representing financial record modal
 * @param props
 * @author Rutakayile Sam
 * @version 1.0
 */
const FinancialRecordModal = React.forwardRef((props: any, ref: any) => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const financialRecordListHook = useFinancialRecordList();
  // financialRecordListHook.

  /**
   * closes action sheet
   */
  const closeCreatePlanActionSheet = useCallback(() => {
    if (ref) {
      ref.current?.close();
    }
  }, [ref]);

  useEffect(() => {
    if (financialRecordListHook.isAddingSuccess) {
      closeCreatePlanActionSheet();
    }
  }, [closeCreatePlanActionSheet, financialRecordListHook.isAddingSuccess]);

  return (
    <Modalize ref={ref}>
      <ScrollView style={styles.sheet}>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const record = new FinancialRecord(values);
            financialRecordListHook.addRecord(record);
          }}>
          {(formikProps) => {
            return (
              <Fragment>
                {!isCalendarVisible && (
                  <Fragment>
                    <View style={Common.alignedRow}>
                      <Text style={Common.primaryHeading}>Add Expense</Text>
                      <IconButton
                        icon="close"
                        color={Colors.BLACK}
                        containerStyle={styles.closeButton}
                        onTap={() => closeCreatePlanActionSheet()}
                      />
                    </View>
                    <AmountInputField
                      keyboardType="decimal-pad"
                      label="Amount"
                      icon="payments"
                      placeholder="Enter amount"
                      error={getFormikError(formikProps, 'amount')}
                      onChange={(amount) => {
                        formikProps.setFieldValue('amount', amount);
                      }}
                      onSubmitEditing={() =>
                        formikProps.setFieldTouched('amount')
                      }
                    />
                    <View style={styles.dateRow}>
                      <DateField
                        date={formikProps.values.occurredOn}
                        onPressOut={() => setIsCalendarVisible(true)}
                      />
                    </View>
                    <View style={styles.moreDetails}>
                      <ExpenseOrIncomeToggle
                        isIncome={
                          formikProps.values.type === FinancialRecordType.INCOME
                        }
                        setIsIncome={(value) =>
                          formikProps.setFieldValue(
                            'type',
                            value === true
                              ? FinancialRecordType.INCOME
                              : FinancialRecordType.EXPENSE,
                          )
                        }
                      />
                      <TextInput
                        numberOfLines={2}
                        placeholder="Additional info..."
                        placeholderTextColor={Colors.LIGHT_BLUE}
                        style={styles.notesField}
                        value={formikProps.values.description}
                        onChangeText={formikProps.handleChange('description')}
                        onSubmitEditing={() =>
                          formikProps.setFieldTouched('description')
                        }
                      />
                    </View>
                    <Button
                      type={ButtonStyle.PRIMARY}
                      text="Proceed"
                      onClick={(_): any => formikProps.handleSubmit()}
                    />
                  </Fragment>
                )}
                <CalendarView
                  isVisible={isCalendarVisible}
                  onHideCalendar={() => setIsCalendarVisible(false)}
                  onSetDate={(date) =>
                    formikProps.setFieldValue('occurredOn', date)
                  }
                />
              </Fragment>
            );
          }}
        </Formik>
      </ScrollView>
    </Modalize>
  );
});

export default FinancialRecordModal;
