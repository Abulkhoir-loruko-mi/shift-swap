import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function completeProfile() {
    const navigation = useNavigation<any>();
    const[phone, setPhone]= useState('');
     const[yoe, setYoe]= useState(''); //Years of experience
      const[certifications, setCertifications]= useState('');
      
      const[preferedShift, setPreferedShift]=useState('');
      const[department, setDepartment]=useState('')
      const[role, setRole]=useState('')
      const[hospital, setHospital]=useState('')
      const[employeeid, setemployeeId]=useState('')
      const[step1, setStep1]=useState(true);
      const[step2, setStep2]=useState(false);

      const setstep2=()=>{
        setStep2(true)
        setStep1(false)
      }
      const setstep1=()=>{
        setStep1(true)
        setStep2(false)
      }
  return (
    <KeyboardAvoidingView style={[{flex:1}]} behavior='padding'>

   
    <View style={[styles.container,{}]}>


        <View style={{marginBottom:50,paddingHorizontal:25,alignItems:"center",paddingTop:20}}>
            <Text style={[{fontSize:26, fontWeight:'semibold'}]}>Complete Your Profile</Text>
            <View style={{alignItems:'flex-start',justifyContent:'flex-start',flexDirection:'row'}}>
                <Text style={{fontSize:20,fontWeight:'regular', color:'#656565'}}>Step 2 of 2</Text>
                
            </View>
            

        </View>

      
      <View style={{flexDirection:'row', justifyContent:"space-between", paddingBottom:40, }}>
        <View style={[step1 && {backgroundColor: '#0097B2'},step2 && {backgroundColor: '#0097B2'} ,{height:6,width:'47%',borderRadius:3}]}></View>
        <View style={[step1 && {backgroundColor: 'grey'},step2 && {backgroundColor: '#0097B2'},{height:6,width:'47%',borderRadius:3}]}></View>
      </View>

      {step2 && (
        <View>

            <Text style={styles.label} >Phone Number</Text>
       <View style={[styles.textInputView,{flexDirection:'row',alignItems:'center'},]}>
        <Ionicons name='call-outline' size={16}/>
        
        <TextInput style={[,{color:"#000000",fontSize:16,paddingLeft:5, width:'90%'}]}
                  value={phone}
                  onChangeText={setPhone}
                  placeholder='+2348909876565'
                  keyboardType='phone-pad'
              />
        
      </View>
     

       <Text style={styles.label} >Preferred Shift Type</Text>
        <View style={[styles.textInputView,{alignItems:'center' },]}>
        <Picker 
            selectedValue={preferedShift}
            style={{height: 50, width:'100%', }}
            onValueChange={(itemValue) => setPreferedShift(itemValue)}>
            <Picker.Item label="Morning" value="morning" />
            <Picker.Item label="Evening" value="evening" />
            <Picker.Item label="Night" value="night" />
        </Picker>
        </View>

        
            

        
      <Text style={styles.label} >Years of Experience</Text>
      <TextInput style={styles.textInputView}
            value={yoe}
            onChangeText={setYoe}
            placeholder='5'
            keyboardType='phone-pad'
        />

        <Text style={styles.label} >Certifications (Optional)</Text>
      <TextInput style={styles.textInputView}
            value={certifications}
            onChangeText={setCertifications}
            placeholder='RN,RM,BLS'
            
        />

         

        <View style={{paddingTop:60}}>
             <Pressable onPress={() => navigation.navigate('signUp')} style={styles.button}>
            <Text style={styles.buttonText}>Complete Setup</Text>
        </Pressable>

        <Pressable onPress={setstep1} style={[styles.button,{backgroundColor:'white',borderWidth:1, borderColor:'#0097B2'}]}>
            <Text style={[styles.buttonText,{color:'#0097B2'}]}>Back</Text>
        </Pressable>

        </View>

       

        </View>


      )}

      {step1 && (

        <View>
            <Text style={styles.label} >Department</Text>
            <View style={[styles.textInputView,{alignItems:'center' },]}>
                <Picker 
                    selectedValue={department}
                    style={{height: 50, width:'100%', }}
                    onValueChange={(itemValue) => setDepartment(itemValue)}>
                    <Picker.Item label="Nursing" value="nursing" />
                    <Picker.Item label="Medical" value="medical" />
                    <Picker.Item label="Surgical" value="surgical" />
                </Picker>
            </View>
            <Text style={styles.label} >Role/Position</Text>
            <View style={[styles.textInputView,{alignItems:'center' },]}>
                <Picker
                    selectedValue={role}
                    style={{height: 50, width:'100%', }}
                    onValueChange={(itemValue) => setRole(itemValue)}>
                    <Picker.Item label="Nurse" value="nurse" />
                    <Picker.Item label="Doctor" value="doctor" />
                    <Picker.Item label="Technician" value="technician" />
                </Picker>
            </View>

            <Text style={styles.label} >Hospital/Facility</Text>
            <View style={[styles.textInputView,{flexDirection:'row',alignItems:'center'},]}>
                <Ionicons name='location' size={16}/>
                
                <TextInput style={[,{color:"#000000",fontSize:16,paddingLeft:5, width:'90%'}]}
                        value={hospital}
                        onChangeText={setHospital}
                        placeholder='City General Hospital' 
                    />
            </View>


            <Text style={styles.label} >Employee ID</Text>
            <View style={[styles.textInputView,{flexDirection:'row',alignItems:'center'},]}>
                <Ionicons name='person' size={16}/>
                
                <TextInput style={[,{color:"#000000",fontSize:16,paddingLeft:5, width:'90%'}]}
                        value={employeeid}
                        onChangeText={setemployeeId}
                        placeholder='EMP123456' 
                    />
            </View>

            <Pressable onPress={setstep2} style={[styles.button,{borderWidth:1, borderColor:'#0097B2'}]}>
            <Text style={[styles.buttonText,]}>Continue</Text>
            </Pressable>


        </View>

      )}
       
       
    </View>
     </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'white'
        //alignItems:'center'
    },
     textInput:{
       
        fontSize: 16,
        //textAlign: 'center',
       
    },
     textInputView:{
        borderWidth:1,
        borderColor: '#848484',
        fontSize:16,
        color:'#000000',
        fontWeight:'medium',
        height:50,
        padding:5,
      
        //textAlign: 'center',
        borderRadius:5
    },
     label:{
        fontSize:18, color:"#504C4C",
        marginBottom:5,
        fontWeight:'semibold',
        padding:5

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