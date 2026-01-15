import { authServices } from '@/src/services/api';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


interface FormErrors{
  name?:string;
  email?:string;
  password?:string;
}



export default function signUp() {
     const navigation = useNavigation<any>();

      const [errors, setErrors] = useState<FormErrors>({});
    //const [formData, setFormData] = useState<FormData>({name:'',email:'',password:''});
  
 
    const[name, setName]= useState('');
    const[email, setEmail]= useState('');
    const[emails, setEmails]= useState('');
    const[phoneNumber, setPhoneNumber]= useState('');
    const[password, setPassword]= useState('');
    const[passwords, setPasswords]= useState('');
    const[loading, setLoading]=useState(false);
    const[login, setLogin]=useState(true);
    const[signup, setSignup]= useState(false);
    const[department, setDepartment]= useState('Emergency');
    const[facility, setFacility]= useState('facility')

    const showlogin=()=>{
        setLogin(true);
        setSignup(false);
    }
    const showsignup=()=>{
        setSignup(true);
        setLogin(false);
    }

  

 

    const handleRegister = async () => {
    // 1. Basic Validation
  

    setLoading(true);

    try {
      // 2. Prepare the payload based on API docs
      const userData = {
        name,
        email,
        password,
        role: 'staff', // Hardcoded as per mobile app requirements
        phoneNumber:phoneNumber,
        department:"Emergency",
      };

      // 3. Call the API
      await authServices.register(userData);

      setLoading(false);
      
      // 4. Success: Redirect to Login
      Alert.alert(
        'Success', 
        'Account created successfully! Please login.',
        [{ text: 'OK', onPress: showlogin }]
      );

    } catch (error) {
      setLoading(false);
      const message = error instanceof Error ? error.message : String(error);
      // Extract error message from backend response if available
      //const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
      Alert.alert('Registration Failed', message);
    }
  };





      const handleLogin = async () => {

         if ( !email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
        try {
          const result = await authServices.login(email, password);

          console.log('login result', result)
          
          const token = result.data.token || result.token;

          if (token) {
              await AsyncStorage.setItem('userToken', token);
              navigation.replace('completeProfile'); 
            
          }else{
            Alert.alert('Login error', 'No access token received from server')
          }
    
          
        } catch (error) {
          
          const message = error instanceof Error ? error.message : String(error);
          Alert.alert('Login Failed', message);
          setLoading(false);
        }
      };

  return (
   <KeyboardAvoidingView style={{flex:1,padding:10, backgroundColor:'white'}}  >
    <View>
       <Image source={require('@/assets/images/Logo.png')} style={styles.shiftswaplogo}></Image>
    </View>
   
     

      <Text style={[{ fontWeight:'semibold'}, styles.titletext]}>Welcome to ShiftSwap</Text>
      <Text style={styles.text}>Manage your hospital shifts with ease</Text>

       <View style={styles.textInputView}>
      
                 
                      <TouchableOpacity onPress={showlogin} style={[styles.innertextInputView, {},login && {backgroundColor: '#0097B2'}]}>
                        
                          <Text style={[[styles.text,login && {color: 'white'}]]}>Login</Text>

                      </TouchableOpacity>
                 
      
                   
                      <Pressable onPress={showsignup} style={[styles.innertextInputView, signup && {backgroundColor: '#0097B2'}]}>
                          <Text style={[styles.text, signup && {color: 'white'}]}>Sign Up</Text>
                      </Pressable>
                  
      
              </View>
      <View>
        
      </View>

      {login && (
        <View style={{flex:1}}>
         
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.textInput}
             value={email}
            onChangeText={(text)=>{
              setEmail(text);
              if(errors.email) setErrors({...errors, email:undefined});
            }}
            placeholder='Enter your Mail'
            keyboardType='email-address'
            autoCapitalize="none"

        />

          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.textInput}
            value={password}
            onChangeText={setPassword}
            placeholder='Password'
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"
        />
          <Pressable  onPress={() => navigation.navigate('')}>
           <View style={{marginTop:10, marginBottom:20, }}>
            <Text style={{color:'#0097B2'}}>Forgot Password?</Text>
          </View>
          </Pressable>

          <Pressable style={styles.button} disabled={loading} onPress={handleLogin}>
                      {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttontext}>Login</Text>
          )}

           
          </Pressable>

           <View style={{marginTop:20, marginBottom:20, flexDirection:'row', alignItems:'center', justifyContent:'center', gap:5}}>
                  <Ionicons name="information-circle-outline" size={16} color="#0097B2" />
                  <Text style={{color:'#0097B2', flexWrap:'wrap', fontSize:14}}>By continuing you agree to our terms of Service and Privacy Policy</Text>
                </View>

          
        </View>
      )}

      {signup && (
        <KeyboardAvoidingView>
                  <Text style={styles.label}>Name</Text>
                  <TextInput style={[styles.textInput,errors.name && styles.inputError]}
                    value={name}
                    onChangeText={(text)=>{
                      setName(text);
                      if(errors.name) setErrors({...errors, name:undefined});
                    }}
                    placeholder='Enter your FullName'
                    maxLength={40}
                />
                      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.textInput}
                    value={emails}
                    onChangeText={(text)=>{
                      setEmails(text);
                      if(errors.email) setErrors({...errors, email:undefined});
                    }}
                    placeholder='Enter your Mail'
                    keyboardType='email-address'
                    autoCapitalize="none"

                />
                <Text style={styles.label}>Phone Number</Text>
                <TextInput style={styles.textInput}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    placeholder='Phone Number'
                    keyboardType='phone-pad'
                />
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.textInput}
                    value={passwords}
                    onChangeText={setPasswords}
                    placeholder='Password'
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none"
                />
      
                <Pressable style={styles.button} disabled={loading} onPress={handleRegister}>
                            {loading ? (
                            <ActivityIndicator color="#fff" />
                          ) : (
                            <Text style={styles.buttontext}>Sign Up</Text>
                          )}

                  
                </Pressable>

                <View style={{marginTop:20, marginBottom:20, flexDirection:'row', alignItems:'center', justifyContent:'center', gap:5}}>
                  <Ionicons name="information-circle-outline" size={16} color="#0097B2" />
                  <Text style={{color:'#0097B2'}}>By continuing you agree to our terms of Service and Privacy Policy</Text>
                </View>

        </KeyboardAvoidingView>
      )}
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  shiftswaplogo:{
    width:200,
    height:200,
    resizeMode:'contain',
    alignSelf:'center',
    marginBottom:20,
    color:'#0097B2',

  },
  label:{
    fontSize:16,
    marginBottom:5,
    color:'#0097B2',
  },
    button: {
        backgroundColor: '#0097B2',
        padding: 10,
        borderRadius: 5,
    },
    text:{
        color: '#0097B2',
        fontSize: 18,
        textAlign: 'center',
        
        
    },
    titletext:{
        color: '#0097B2',
        fontSize: 24,
        textAlign: 'center',
        padding:5,
        fontWeight:'bold',
    },
    buttontext:{
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
     textInput:{
        borderWidth:1,
        borderColor: '#0097B2',
        fontSize: 16,
       
        borderRadius:12,
        marginBottom:15,
        padding:10,
    },
    
    inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 15,
  },
   textInputView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:5,
        marginBottom:20,
        marginTop:20,
        borderRadius:20,
        backgroundColor:'#F1F1F1',
       // height:60
      
        //textAlign: 'center',
    },
    innertextInputView:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        width:'45%',
        padding:8,
       
    },

    blacktext:{
        fontSize:18, 
    fontWeight:'semibold',
    padding:5,
    
    },
})