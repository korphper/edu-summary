import React from 'react';
import {
  Alert,
  Button,
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native-paper';
import {BackgroundImage} from './screens/BackgroundImage';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  text: {fontSize: 20, color: Colors.white},
});

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <BackgroundImage />
    </SafeAreaView>
  );
}
