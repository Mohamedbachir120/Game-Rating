
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createAppContainer} from '@react-navigation/native';
import aboutStack from './aboutStack';
import Homestack from './homestack';
import { NavigationContainer } from '@react-navigation/native';
const RootDrawNavigator=createDrawerNavigator();
function mainDrower() {
    return (
        <NavigationContainer>

          <RootDrawNavigator.Navigator initialRouteName="Home">
              <RootDrawNavigator.Screen name="Home" component={Homestack} />
              <RootDrawNavigator.Screen name="about" component={aboutStack} />

          </RootDrawNavigator.Navigator>
        </NavigationContainer>
  );
}  

export default mainDrower;