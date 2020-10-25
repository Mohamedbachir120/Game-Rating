import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props){
    return (
        <View style={styles.Card}>
            <View style={styles.cardContent}>
                { props.children }

            </View>
        </View>
    )
}

const styles=StyleSheet.create({

    Card:{
        borderRadius:6,
        elevation:3,
        backgroundColor:'rgba(255,255,255,0.5)',
        shadowOffset:{width:1,height:1},
        shadowColor:"#333",
        shadowOpacity:0.3,
        shadowRadius:2,
        padding:15,
        marginHorizontal:4,
        marginVertical:6,
        
    },
    cardContent:{},

});