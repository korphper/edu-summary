import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const style = StyleSheet.create({
  viewStyle: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

function HomeScreen({navigation}: any) {
  const onClick = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);
  return (
    <>
      <View style={style.viewStyle}>
        <Pressable onPress={onClick}>
          <Text>Home Screen</Text>
        </Pressable>
      </View>

      <View>
        <Text>모달 창</Text>
      </View>
    </>
  );
}

function DetailsScreen({
  navigation,
}: NativeStackScreenProps<ParamListBase, 'Details'>) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);
  return (
    <View style={style.viewStyle}>
      <Pressable onPress={onClick}>
        <Text>Details Screen</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Details">
          {props => <DetailsScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
