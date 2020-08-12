import React from 'react';

import LottieView from 'lottie-react-native';

export default class SantaClaus extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../assets/11861-santa-claus-on-the-chimney.json')}
      style={{width:"60%"}}
      autoPlay loop />
    )
  }
}