import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import login from './screens/login';

export default function App() {
  const MainNavigator  = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
         <MainNavigator.Navigator initialRouteName = "login" screenOptions ={{headerShown: true }}>
            
            <MainNavigator.Screen name = "Home" component = {Home}/>
            <MainNavigator.Screen name = "login" component = {login}/>
         </MainNavigator.Navigator>
      </NavigationContainer>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent : 'center',
    alignContent : 'center'
    
  },
});
