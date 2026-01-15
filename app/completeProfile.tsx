import { profileService } from '@/src/services/api';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function completeProfile() {
    const navigation = useNavigation<any>();
    const[phone, setPhone]= useState('');
     const[yoe, setYoe]= useState(''); //Years of experience
      const[certifications, setCertifications]= useState('');
      
      const[preferedShift, setPreferedShift]=useState('morning');
      const[department, setDepartment]=useState('')
      const[role, setRole]=useState('staff')
      const[facility, setFacility]=useState('')
      const[employeeid, setemployeeId]=useState('')
      const[step1, setStep1]=useState(true);
      const[step2, setStep2]=useState(false);
      const[loading, setLoading]=useState(false)

  type Facility = { _id: string; name: string };
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [selectedFacilityId, setSelectedFacilityId] = useState('');
  
  // Load the list of hospitals when screen opens
  useEffect(() => {
    const loadFacilities = async () => {
      try {
        const list = await profileService.getFacilities();
          console.log('facilities' ,list)
        setFacilities(list); // list = [{ _id: '123', name: 'General Hospital'}, ...]
      } catch (err) {
        console.log('Could not load facilities');
      }
    };
    loadFacilities();
  }, []);
  

      const setstep2=()=>{
        setStep2(true)
        setStep1(false)
      }
      const setstep1=()=>{
        setStep1(true)
        setStep2(false)
      }

   




      const handleStep1Submit = async () => {
  setLoading(true);
  try {
    const step1Data = {
      department: department, 
      role: 'staff',
      //facility: selectedFacilityId,   
      employeeId: employeeid  
    };

    // Send to backend
  await profileService.updateProfile(step1Data);
    //console.log('LOADED  update PROFILE:', profile);
    
    Alert.alert('Step 1 Success', 'Profile update success',[ {onPress:setstep2}])
    setstep2
    console.log('STATUS:' , )
    
    // Success! Navigate to Step 2
   

  } catch (error) {
    Alert.alert('Error', 'Could not save profile data.', );
    console.log(error)
    
  } finally {
    setLoading(false);
  }
      };

      const handleStep2Submit = async () => {
  setLoading(true);
  try {
   
    const step2Data = {

      phoneNumber: phone,          
      preferredShiftType: preferedShift,   
      yearsOfExperience: parseInt(yoe), 
      extraCertifications: certifications  
    };

    await profileService.updateProfile(step2Data);
     Alert.alert('Step 2 Success', 'Profile update success')
    
    
    // Success! Navigate to Home Dashboard
    navigation.replace('home'); 
    //navigation.reset({index: 0,routes: [{ name: 'home' }],});
  } catch (error) {
    Alert.alert('Error', 'Could not complete profile.');
  } finally {
    setLoading(false);
  }
};




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

        {step1 && (

        <View>
            <Text style={styles.label} >Department</Text>
            <View style={[styles.textInputView,{alignItems:'center' },]}>
                <Picker 
                    selectedValue={department}
                    style={{height: 50, width:'100%', }}
                    onValueChange={(itemValue, itemIndex) =>{
                      console.log("User selected:", itemValue);
                      setDepartment(itemValue)}
                      }>
                    <Picker.Item label="Select Department..." value="" color="#999" />    
                    <Picker.Item label="Emergency" value="Emergency" />
                    <Picker.Item label="Pediatrics" value="Pediatrics" />
                    <Picker.Item label="ICU" value="ICU" />
                </Picker>
            </View>
            <Text style={styles.label} >Role/Position</Text>
            <View style={[styles.textInputView,{alignItems:'center' },]}>
                <Picker
                    selectedValue={role}
                    style={{height: 50, width:'100%', }}
                    onValueChange={(itemValue) =>{
                       console.log("User selected:", itemValue);
                       setRole(itemValue)}}>
                      <Picker.Item label='select role' value=""></Picker.Item>
                    <Picker.Item label="Nurse" value="nurse" />
                    <Picker.Item label="Doctor" value="doctor" />
                    <Picker.Item label="Technician" value="technician" />
                </Picker>
            </View>

            <Text style={styles.label} >Hospital/Facility</Text>

          
            <View style={[styles.textInputView,{flexDirection:'row',alignItems:'center'},]}>
                <Ionicons name='location' size={16}/>
                
                <TextInput style={[,{color:"#000000",fontSize:16,paddingLeft:5, width:'90%'}]}
                        value={facility}
                        onChangeText={setFacility}
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

            <Pressable onPress={handleStep1Submit} style={[styles.button,{borderWidth:1, borderColor:'#0097B2'}]}>
            <Text style={[styles.buttonText,]}>Continue</Text>
            </Pressable>


        </View>

      )}

       

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
            onValueChange={(itemValue) => {
              console.log("User selected:", itemValue);
              setPreferedShift(itemValue)}}>
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
             <Pressable onPress={handleStep2Submit} style={styles.button}>
            <Text style={styles.buttonText}>Complete Setup</Text>
        </Pressable>

        <Pressable onPress={setstep1} style={[styles.button,{backgroundColor:'white',borderWidth:1, borderColor:'#0097B2'}]}>
            <Text style={[styles.buttonText,{color:'#0097B2'}]}>Back</Text>
        </Pressable>

        </View>

       

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