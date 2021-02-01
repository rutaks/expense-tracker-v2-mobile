import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Colors} from '../../styles';
import {styles} from './OnBoardingScreen.styles';

const data = [
  {
    title: 'Welcome to Wove.\n Your next financial assistant',
    text: "We are glad you're giving us a try.\nYou won't regret it",
    image: require('../../../assets/img/onboarding/1.png'),
    bg: Colors.PRIMARY,
  },
  {
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../../assets/img/onboarding/1.png'),
    bg: Colors.DARK_GRAY,
  },
  {
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../../../assets/img/onboarding/1.png'),
    bg: Colors.PRIMARY,
  },
];

type Item = typeof data[0];

const OnBoardingScreen = (props: {onDone: () => any}) => {
  const renderItem = ({item}: {item: Item}) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const keyExtractor = (item: Item) => item.title;

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
        onDone={props?.onDone}
      />
    </View>
  );
};

export default OnBoardingScreen;
