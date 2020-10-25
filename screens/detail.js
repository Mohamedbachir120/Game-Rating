import React from 'react';
import {StyleSheet,View,Text,Button,Image} from 'react-native';
import { globalStyles,images } from '../styles/global';
import Card from '../shared/card';
export default function ReviewDetails({route,navigation}){
    const{item}=route.params;
    
            return(
                 <View style={globalStyles.container}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',borderStyle:'solid',borderWidth:2,backgroundColor:'rgb(38, 0, 73)',borderRadius:50 }}>
            <View>
            <Image source={images.ratings[item.title]}  style={{ width: 300, height: 300 , borderRadius:6, marginTop:6,}}/>
            </View>        
            
        <Text style={{color:'white',fontSize:14,marginTop:12}}>Item title: {item.title} </Text>
        <Text style={{color:'white',fontSize:14,marginTop:12}}>Item Body: {item.body} </Text>
        <Text style={{color:'white',fontSize:14,marginTop:12,marginBottom:12}}>Item Rating: {item.rating} </Text>
        
        <Button
        title="go to home"
        onPress={() => navigation.push("Home")}
       
        />
      </View>
          </View>
    )
}
