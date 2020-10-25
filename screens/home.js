import React, { useState } from 'react';
import { TouchableWithoutFeedback,Keyboard,StyleSheet,View,Text,Modal,TouchableOpacity,FlatList,ImageBackground, ImageBackgroundBase} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewform';
export default function Home({navigation}){
    const[modalOpen,setModalOpen]=useState(false);
    const [reviews,SetReviews]=useState([

        {title:"pes 2020",rating:5,body:'football',key:1},
        {title:"FIFA 2020",rating:4,body:'football',key:2},
        {title:"NFS",rating:6,body:'Rally',key:3},
    ])
    const addReview =(review)=>{
      review.key=Math.random().toString();
      SetReviews((currentReviews)=>{
        return [review, ...currentReviews]
      });
      setModalOpen(false);
    }
    return(
          <View >

        <Modal visible={modalOpen} animationType='slide'>
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>     
                <View style={styles.modalcontent}>

 <MaterialIcons
 name='close'
 size={24}
 style={styles.modalclose}
 onPress={() =>setModalOpen(false)}
 />
          <ReviewForm addReview={addReview}/>
           </View>
           </TouchableWithoutFeedback>

        </Modal>
 <MaterialIcons
 name='add'
 size={24}
 style={styles.modalToggle}
 onPress={() =>setModalOpen(true)}
 />
 
      <FlatList 
      data={reviews}
      renderItem={({item})=>(
        <TouchableOpacity onPress={() =>navigation.navigate('Details',{item:item})}>
         <Card>
         <Text >
                {item.title}
            </Text>
       
         </Card>
           </TouchableOpacity>
      )}
      />
      
    </View> 
             )
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
   
  },
  modalToggle:{
    marginBottom:10,
    borderWidth:1,
    borderColor:'#f2f2f2',
    padding:10,
    borderRadius:10,
    alignSelf:'center',
  },
  modalclose:{
    marginBottom:10,
    marginTop:20,
    borderWidth:1,
    borderColor:'#f2f2f2',
    padding:10,
    borderRadius:10,
    alignSelf:'flex-end',
  
  },
  modalcontent:{
    flex:1,

  }
});