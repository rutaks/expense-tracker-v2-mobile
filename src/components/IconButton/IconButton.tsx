import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IconButtonProps} from '../../interfaces/icon-button-props.interface';
import {Colors, Dimensions} from '../../styles';
import {styles} from './IconButton.styles';

/**
 * Function component representing icon button
 * @param props
 * @author Rutakayile Sam
 * @version 1.0
 */
const IconButton = (props: IconButtonProps) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={props.onTap}
        activeOpacity={0.6}>
        <AntDesign
          name={props.icon}
          size={Dimensions.SIZE_XL}
          color={props?.color || Colors.GRAY}
        />
      </TouchableOpacity>
    </View>
  );
};

export default IconButton;
