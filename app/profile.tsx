import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from 'expo-router';

export default function profile() {
    const navigation = useNavigation<any>();
        const[phone, setPhone]= useState('');
         const[yoe, setYoe]= useState(''); //Years of experience
          const[certifications, setCertifications]= useState('');
  return (
    <View>
      <Text>profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({})