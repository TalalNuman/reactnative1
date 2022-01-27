import React from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';

import bgImage from '../assets/chair.jpg'
import colors from '../config/colors';

export default function ViewImageScreen() {
  return (
      <View style={styles.container}>
    <View style={styles.closeIcon}></View>
    <View style={styles.openIcon}></View>
    <Image resizeMode='contain' style={styles.image} source={bgImage}/>
      </View>
  );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1,
    },
    closeIcon:{
        width:40,
        height:40,
        backgroundColor: colors.primary,
        position:'absolute',
        top:40,
        left:30,
    },
    openIcon:{
        width:40,
        height:40,
        backgroundColor: colors.secondary,
        position:'absolute',
        top:40,
        right:30,
    },
    image:{
        width:'100%',
        height:'100%'
    }
    
})