import React from 'react';
import {View, Text} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import {Colors, Dimensions} from '../../styles';
import {styles} from './DataLoadingView.styles';

/**
 * Functional component representing no data available
 * @author Awesomity Lab
 * @since version 1.0
 */
const DataLoadingView = ({
  title,
  text,
  iconVisible = true,
}: {
  title: string;
  text: string;
  iconVisible?: boolean;
  iconType?: string;
  iconColor?: string;
}) => {
  return (
    <View style={styles.container}>
      {iconVisible && (
        <ProgressBar
          style={{
            width: Dimensions.SIZE_XL,
          }}
          animating={true}
          color={Colors.PRIMARY}
        />
      )}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default DataLoadingView;
