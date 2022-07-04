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
import Person from './screens/Person';
import * as D from './data';
import {Colors} from 'react-native-paper';

const people = D.makeArray(100).map(D.createRandomPerson);
const onPress = () => Alert.alert('경고', '클릭');

const styles = StyleSheet.create({
  safeAreaView: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue900,
    height: '50%',
  },
  text: {fontSize: 20, color: Colors.white},
});

const {width, height} = Dimensions.get('window');

export default function App() {
  const children = people.map(person => (
    <Person key={person.id} person={person} />
  ));

  return (
    <SafeAreaView style={[styles.safeAreaView, {backgroundColor: 'blue'}]}>
      <Button title="click" onPress={onPress} />
      <TouchableOpacity onPress={onPress}>
        <Text style={[{color: 'white'}, styles.text]}>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={onPress}>
        <Text style={[{color: 'white'}, styles.text]}>TouchableHighlight</Text>
      </TouchableHighlight>
      <TextInput
        placeholder="입력하세요"
        style={{color: 'white'}}
        onChangeText={text => console.log(text)}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
      />
      <Text style={[styles.text]}>{Platform.OS}</Text>
      <Text style={[styles.text]}>{`width:${width} height:${height}`}</Text>
      {/* <ScrollView>{children}</ScrollView> */}
    </SafeAreaView>
  );
}
