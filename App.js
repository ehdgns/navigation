import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/screen/HomeScreen'
import DetailScreen from './src/screen/DetailScreen';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import SettingScreen from './src/screen/SettingScreen';
import BoardCreateScreen from './src/screen/BoardCreateScreen';
import BoardEditScreen from './src/screen/BoardEditScreen';


const defaultNavigationOptions = {
  headerTintColor: 'white',
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',

    labelStyle: {
      fontSize: 16,
    },
  },
  
};

const StackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detail: {
    screen: DetailScreen
  },
  Create:{
    screen: BoardCreateScreen
  },
  Edit:{
    screen: BoardEditScreen
  }
  // BoardCreate: {
  //   screen: BoardCreateScreen
  // }
});


const TabNavigator = createBottomTabNavigator({
  Home:{
    // screen: HomeScreen,
    screen: StackNavigator,
    navigationOptions:{
      title: '홈'
    }
  },
  Setting:{
    screen: SettingScreen
  }
},
{
  defaultNavigationOptions
})

const AppContainer =  createAppContainer(TabNavigator);

export default function App(){
    return(
        <AppContainer/>
    );
}
