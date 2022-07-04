import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flex: {flex: 1},
});

export const BackgroundImage = () => {
  return (
    <>
      <ImageBackground
        source={require('../src/assets/images/bg.jpg')}
        style={[styles.flex]}
      />
    </>
  );
};
