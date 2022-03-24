import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import *as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner'

export default class Transaccion extends Component {
  constructor(props){
    super(props)
    this.state={
      domState: 'normal',
      hasCameraPermissions: null,
      scanned: false,
      scannedData: ''
    }
  }
  getCameraPermissions=async(domState)=>{
    const {status}=await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      hasCameraPermissions: status==='granted',
      domState: domState,
      scanned: false
    })
  }

  handleBarCodeScaner=async({type, data})=>{
    this.setState({
      scannedData: data,
      domState: 'normal',
      scanned: true
    })
  }

   render(){
     const {domState, hasCameraPermissions, scanned, scannedData}=this.state
     if (domState === 'scaner'){
       return(
         < BarCodeScanner 
         onBarCodeScanned={scanned ? undefined : this.handleBarCodeScaner}
         style={StyleSheet.absoluteFillObject}/>
       )
     }
       return(
           <View style={styles.conteiner}>
             <Text style={styles.text}>
                {hasCameraPermissions ? scannedData : 'Solicitamos permiso de camara'}
             </Text>
             <Text
             style={styles.text}
             >Pantalla de transaccion</Text> 
             <TouchableOpacity style={styles.button}
             onPress={()=>this.getCameraPermissions('scaner')}>
               <Text style={styles.text}>Escanear codigo QR</Text>
             </TouchableOpacity>
           </View>
       )
   }
}
const styles = StyleSheet.create({
    conteiner: {
      justifyContent: 'center',
      backgroundColor: 'pink',
      flex: 1,
      alignItems: 'center'
    },
    text: {
      color: 'black',
      fontSize: 20,
    },
    button: {
       width: '40%',
       height:55,
       justifyContent: 'center',
       backgroundColor:'orange',
       borderRadius: 15
    }
  });