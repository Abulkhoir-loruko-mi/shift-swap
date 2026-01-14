import { Picker } from '@react-native-picker/picker';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function requestShiftSwap() {
    const navigation= useNavigation();

    const[shift, setShift]=useState('')
     const[swaptype, setSwapType]=useState('')
      const[replacementShift, setReplacementShift]=useState('')
      const[swapreason, setSwapReason]=useState('')
      const[deadline, setDeadline]=useState('')
      const[requestsent, setRequestsent]=useState(false)

       const requestSwap=()=>{

        
       

    }

    
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.label}>Select Shift to Swap</Text>
  
        <Picker 
            selectedValue={shift}
            style={{height: 50, width:'100%', borderRadius:20, backgroundColor:'#F1F1F1' }}
            onValueChange={(itemValue) => {setShift(itemValue)}}>
            <Picker.Item label="Morning" value="morning" />
            <Picker.Item label="Evening" value="evening" />
            <Picker.Item label="Night" value="night" />
        </Picker>

        <Text style={styles.label}>Swap Type</Text>
  
        <Picker 
            selectedValue={swaptype}
            style={{height: 50, width:'100%', borderRadius:20, backgroundColor:'#F1F1F1' }}
            onValueChange={(itemValue) =>{ setSwapType(itemValue)}}>
            <Picker.Item label="Open Request" value="openrequest" />
            <Picker.Item label="Direct Swap" value="directswap" />
            
        </Picker>

         <Text style={styles.label}>Preferred Replacement shift(optional)</Text>
  
        <Picker 
            selectedValue={replacementShift}
            style={{height: 50, width:'100%', borderRadius:20, backgroundColor:'#F1F1F1' }}
            onValueChange={(itemValue) => {setReplacementShift(itemValue)}}>
            <Picker.Item label="Morning Shift" value="morningtime" />
            <Picker.Item label="Evening shift" value="eveningtime" />
            <Picker.Item label="Any Day shift" value="anyday" />
            <Picker.Item label="Night Shift(11PM-7AM)" value="Night Shift(11PM-7AM)" />
        </Picker>

         <Text style={styles.label} >Reason for swap request</Text>
              <TextInput style={styles.textInputView}
                    value={swapreason}
                    onChangeText={setSwapReason}
                    placeholder='Please provide a brief reason for  your swap request'
                    
                />
         <Text style={styles.label}>This helps colleagues understand your situation</Text>

         <Text style={styles.label}>Response Deadline</Text>
  
        <Picker 
            selectedValue={deadline}
            style={{height: 50, width:'100%', borderRadius:20, backgroundColor:'#F1F1F1' }}
            onValueChange={(itemValue) => {setDeadline(itemValue)}}>
            <Picker.Item label="24Hr" value="24" />
            <Picker.Item label="12Hr" value="12" />
            
        </Picker>

         <View style={styles.shifofferedcard}>
            <Text style={[styles.label,{fontWeight:'500'}]}>Important Notes</Text>
            <Text style={styles.text}>. All swap requests require supervisor approval </Text>
            <Text style={styles.text}>. You'll be notified when someone accepts your request</Text>
            <Text style={styles.text}>. Both parties must confirm the swap</Text>
        </View>

         <Pressable onPress={requestSwap} style={styles.button}>
            <Text style={styles.buttonText}>Request Swap</Text>
        </Pressable>

        <View style={{marginBottom:250}}>
        
            <View>
                
            </View>
        </View>

        
    </ScrollView>
  )
}

const styles = StyleSheet.create({
     container:{
        flex:1,
        padding:20,
        backgroundColor:'white'
       
    },
     textInput:{
       
        fontSize: 16,
        //textAlign: 'center',
       
    },
     text:{
        fontSize:20, 
    fontWeight:'semibold',
    padding:5,
    
    },

      textInputView:{
       
        borderWidth:1,
        borderColor: '#848484',
        fontSize:16,
        borderRadius:15,
        backgroundColor:'#F1F1F1',
        fontWeight:'medium',
        wordWrap:'true',
        height:50
      
        //textAlign: 'center',
    },
     label:{
        fontSize:18, color:"#504C4C",
        marginBottom:5,
        fontWeight:'semibold',
        padding:5

    },
     shifofferedcard:{
    //flex:1,
    backgroundColor:'#b1ecf6ff',
      padding:10,
      //margin:10,
      marginTop:25,
      marginBottom:10,
      borderRadius:12,
      //borderWidth:2,
      borderColor:'#1D72DB',
      //height:250,
   },
     buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
   button:{
      marginTop:20,
      padding:16,
      borderRadius:25,
      backgroundColor:'#0097B2'
   },
})