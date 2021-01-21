import React from 'react';
import {View, Text} from 'react-native';
// import {Button} from 'native-base';
import {styles} from './styles';
import LottieView from 'lottie-react-native';
import {Button, Divider} from '../../Component';

const secondaryColor = '#000';

export default (props) => {
  const {navigation} = props;
  return (
    <View style={styles.mainView}>
      <View style={styles.centerElement}>
        <View>
          <Text style={[styles.bigText, {color: secondaryColor}]}>
            Budget Book
          </Text>
          <Divider />
          <Text style={styles.instruction}>
            Keep track your booking easily with Mobile Application
          </Text>
        </View>

        <View style={styles.animationBox}>
          <LottieView
            source={require('../../assets/Animations/astro.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        </View>

        <Button onPress={() => navigation.navigate('CardScreen')}>Start</Button>
      </View>
    </View>
  );
};
