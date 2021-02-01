import React, {Fragment, useEffect, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import ButtonStyle from '../../enums/ButtonStyle.enum';
import {Colors} from '../../styles';
import {formatDate} from '../../utils/formatting.util';
import Button from '../Button';

const CalendarView = (props: {
  isVisible: boolean;
  onHideCalendar: () => any;
  onSetDate: (date: Date) => any;
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedFormattedDate, setSelectedFormattedDate] = useState(
    formatDate(new Date()),
  );

  useEffect(() => {
    if (selectedFormattedDate) {
      setSelectedDate(new Date(selectedFormattedDate));
    }
  }, [selectedFormattedDate]);

  if (!props?.isVisible) {
    return null;
  }

  const setDate = () => {
    props?.onSetDate(selectedDate);
  };

  return (
    <Fragment>
      <Calendar
        theme={{
          arrowColor: Colors.PRIMARY,
          todayTextColor: Colors.PRIMARY,
          selectedDayBackgroundColor: Colors.PRIMARY,
          textDayFontFamily: 'Montserrat-Medium',
          textMonthFontFamily: 'Montserrat-Medium',
        }}
        // Collection of dates that have to be marked. Default = {}
        markedDates={{
          [selectedFormattedDate]: {
            selected: true,
            marked: true,
          },
        }}
        onDayPress={({dateString}) => {
          setSelectedFormattedDate(dateString);
        }}
      />
      <Button
        type={ButtonStyle.PRIMARY}
        text="Proceed"
        onClick={() => {
          setDate();
          props?.onHideCalendar();
        }}
      />
      <Button
        type={ButtonStyle.DEFAULT}
        text="Cancel"
        onClick={(_) => {
          props?.onHideCalendar();
        }}
      />
    </Fragment>
  );
};

export default CalendarView;
