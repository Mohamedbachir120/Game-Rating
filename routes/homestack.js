
import * as React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from '@react-navigation/native';
import Home from '../screens/home';
import ReviewDetails from '../screens/detail';
import { MaterialIcons } from '@expo/vector-icons';

// In App.js in a new project
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import {StyleSheet} from 'react-native';

function Header({navigation , title }){
  const openMenu=()=>{
      navigation.openDrawer();
  }
return(
  <View style={styles.header}>
      <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon}
/>

      <View>
          <Text style={styles.headerText}> { title }</Text>
      </View>
  </View>
);
}
const Stack = createStackNavigator();

function Homestack() {
  return (
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={({navigation})=>{return { headerTitle:()=> <Header navigation={navigation}  title='gamezone' />}}} />
  
        <Stack.Screen name="Details" component={ReviewDetails}  options={({navigation})=>{return { headerTitle:()=> <Header navigation={navigation} title='details' />}}}  />
  
      </Stack.Navigator>
  );
}

export default Homestack;

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
