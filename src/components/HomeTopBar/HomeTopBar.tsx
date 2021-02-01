import React from 'react';
import {View, Image} from 'react-native';
import {IconButton} from '..';
import {Colors, Dimensions} from '../../styles';
import {styles} from './HomeTopBar.styles';

/**
 * Function component representing home top bar
 * @param props
 * @author Rutakayile Sam
 * @version 1.0
 */
const HomeTopBar = ({
  openFinancialRecordModal,
}: {
  openFinancialRecordModal: () => any;
}) => {
  return (
    <View style={styles.container}>
      <IconButton icon="questioncircleo" />
      <Image
        style={{
          marginTop: Dimensions.SIZE_SM / 2,
          height: Dimensions.SIZE_XL * 1.5,
          width: Dimensions.SIZE_XL * 1.5,
        }}
        source={require('../../../assets/img/logo-main.png')}
        resizeMode="cover"
      />
      <IconButton
        onTap={() => openFinancialRecordModal()}
        icon="pluscircle"
        color={Colors.PRIMARY}
      />
    </View>
  );
};

export default HomeTopBar;
