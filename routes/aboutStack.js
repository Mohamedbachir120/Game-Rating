
import * as React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import About from '../screens/about';
import ReviewDetails from '../screens/detail';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import {StyleSheet} from 'react-native';
const Stack = createStackNavigator();

function Header({ navigation, title }){
    const openMenu=()=>{
        navigation.openDrawer();
    }
  return(
    <View style={styles.header}>
        <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon}
  />
  
        <View>
            <Text style={styles.headerText}> { title } </Text>
        </View>
    </View>
  );
  }

function aboutStack() {
  return (
      <Stack.Navigator>
      <Stack.Screen name="About" component={About} options={({navigation})=>{return { headerTitle:()=> <Header navigation={navigation} title='about' />}}} />
  
     
      </Stack.Navigator>
  );
}

export default aboutStack;


const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1,
    },
    icon:{
  position:'absolute',
  left:16,
    }
  })
  