import { useNavigation } from "expo-router";
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';


export default function index() {
     const navigation = useNavigation<any>();
  return (
    <ScrollView style={{flex:1,marginTop:20, backgroundColor:'white',}}>

        <Image source={require('@/assets/images/Logo.png')} style={styles.shiftswaplogo}></Image>

      <Text style={[{ fontWeight:'semibold'}, styles.titletext]}>Welcome to ShiftSwap</Text>
      <Text style={styles.text}>Manage your hospital shifts with ease</Text>

      <Pressable onPress={() => navigation.navigate('signUp')} style={styles.button}>
        <Text style={[{ fontWeight:'semibold', color:'white'}, ]}>Get started</Text>
      </Pressable>

      <View style={styles.halfscreencard}>
        <Text style={[{ fontWeight:'semibold'}, styles.titletext]}>Get Started</Text>
        <Text style={styles.text}>Create an account or log in to access your personalized shift management dashboard.</Text>
      </View>
      
      
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
   shiftswaplogo:{
    width:150,
    height:250,
    //resizeMode:'contain',
    alignSelf:'center',
    //marginBottom:20,
    color:'#0097B2',

  },
   text:{
        color: '#0097B2',
        fontSize: 16,
        textAlign: 'center',
        padding:5,
        
        
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
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
    },
    halfscreencard:{
      backgroundColor:'#0097B2',
      padding:10,
      //margin:10,
      borderRadius:12,
      height:800,
      width:'100%',
      //shadowColor:'#000',
      //shadowOffset:{width:0, height:2},
      //shadowOpacity:0.25,
      //shadowRadius:3.84,
      elevation:5
   },
})