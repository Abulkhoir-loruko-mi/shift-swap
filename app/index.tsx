import { useNavigation } from "expo-router";
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function index() {
     const navigation = useNavigation<any>();
  return (
    <View>
      
      <Pressable onPress={() => navigation.navigate('signUp')} style={styles.button}>
        <Text style={styles.button}>Already have an account? Login</Text>
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
button: {
        backgroundColor: '#0097B2',
        padding: 10,
        borderRadius: 5,
        margin:10
    },
})