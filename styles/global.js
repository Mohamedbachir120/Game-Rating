import {StyleSheet,Image} from 'react-native';
export const globalStyles=StyleSheet.create({

    container:{
        padding:20,
        flex:1,
    },
    titletext:{
        fontFamily:'nunito-bold',
        fontSize:18,
        color:'white',
        borderStyle:'dotted',
        borderWidth:1,
        padding:20,
        backgroundColor:'darkcyan',
        marginBottom:2,
       borderRadius:7,
    },
    paragraph:{
        marginVertical:8,
        lineHeight:20,
    },
    input:{
       margin:4, 
       borderWidth:1,
       borderColor:'#ddd',
       padding:10,
       fontSize:18,
       borderRadius:6, 
    },
    errorText:{
        color:'crimson',
        fontWeight:'bold',
        marginBottom:10,
        marginTop:6,
        textAlign:'center'
    }
    });
    export const images={
        ratings:{
            "pes 2020":require('../assets/pes-2020.jpg'),
            "FIFA 2020":require('../assets/FIFA-2020.jpg'),
            'NFS':require('../assets/NFS.jpg')
        }
    }