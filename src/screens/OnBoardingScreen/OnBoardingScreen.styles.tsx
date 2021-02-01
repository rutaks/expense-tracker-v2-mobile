import {StyleSheet} from 'react-native';
import {Colors, Typography} from '../../styles';

export const styles = StyleSheet.create({
  container: {flex: 1},
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    ...Typography.title,
    color: Colors.WHITE,
    textAlign: 'center',
  },
});
