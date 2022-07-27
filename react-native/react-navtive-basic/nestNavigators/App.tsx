/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';

const FirstScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>First Screen</Text>
  </View>
);
const SecondScreen = () => <Text>Second Screen</Text>;

const Tab = createBottomTabNavigator();
const MainScreen = () => (
  <Tab.Navigator initialRouteName="First">
    <Tab.Screen name="First" component={FirstScreen} />
    <Tab.Screen name="Second" component={SecondScreen} />
  </Tab.Navigator>
);
const HomeScreen = ({navigation}: any) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Button title="Go To Main" onPress={() => navigation.navigate('Main')} />
  </View>
);

const Stack = createNativeStackNavigator();
const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
