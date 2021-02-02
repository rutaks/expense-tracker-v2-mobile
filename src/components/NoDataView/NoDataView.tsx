import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {View, Text} from 'react-native';
import {Colors, Dimensions} from '../../styles';
import {styles} from './NoDataView.styles';

/**
 * Functional component representing no data available
 * @author Awesomity Lab
 * @since version 1.0
 */
const NoDataView = ({
  title,
  text,
  iconVisible = true,
  iconType = 'assignment-late',
  iconColor = Colors.LIGHT_GRAY,
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
        <MaterialIcons
          name={iconType}
          size={Dimensions.SCREEN_WIDTH / 6}
          color={iconColor}
        />
      )}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default NoDataView;
