import { useNavigation } from "expo-router";
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function index() {
     const navigation = useNavigation<any>();
  return (
    <View style={{flex:1,marginTop:20, padding:20, backgroundColor:'white', alignItems:'center'}}>

        <Image source={require('@/assets/images/Logo.png')} style={styles.shiftswaplogo}></Image>

      <Text style={[{ fontWeight:'semibold'}, styles.titletext]}>Welcome to ShiftSwap</Text>
      <Text style={styles.text}>Manage your hospital shifts with ease</Text>
      
      <Pressable onPress={() => navigation.navigate('signUp')} style={styles.button}>
        <Text style={styles.button}>Get started</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('completeProfile')} style={styles.button}>
        <Text style={styles.button}>profile</Text>
      </Pressable>
       <Pressable onPress={() => navigation.navigate('home')} style={styles.button}>
        <Text style={styles.button}>home</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('availableSwap')} style={styles.button}>
        <Text style={styles.button}>swapavailable</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('swapRequestDetails')} style={styles.button}>
        <Text style={styles.button}>swap request Detail</Text>
      </Pressable>
       <Pressable onPress={() => navigation.navigate('requestShiftSwap')} style={styles.button}>
        <Text style={styles.button}>Request shift Swap</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('mySchedule')} style={styles.button}>
        <Text style={styles.button}>mySchedule</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
   shiftswaplogo:{
    width:100,
    height:100,
    resizeMode:'contain',
    alignSelf:'center',
    marginBottom:20,
    color:'#0097B2',

  },
   text:{
        color: '#0097B2',
        fontSize: 16,
        
        
    },
    titletext:{
        color: '#0097B2',
        fontSize: 24,
        textAlign: 'center',
        padding:5,
        fontWeight:'bold',
    },
button: {
        backgroundColor: '#0097B2',
        padding: 10,
        borderRadius: 5,
        margin:20,
        height:50,
        width:100,
        marginTop:10
    },
})