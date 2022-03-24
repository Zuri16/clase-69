import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class Search extends Component {
   render(){
       return(
           <View style={styles.conteiner}>
             <Text
             style={styles.text}
             >Pantalla de busqueda</Text>  
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
      fontSize: 30,
    },
  });