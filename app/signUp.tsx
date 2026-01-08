import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

interface FormErrors{
  name?:string;
  email?:string;
  password?:string;
}


interface UserData{
  name:string;
  email:string;
  signupDate:string
}

export default function signUp() {
     const navigation = useNavigation<any>();

      const [errors, setErrors] = useState<FormErrors>({});
    //const [formData, setFormData] = useState<FormData>({name:'',email:'',password:''});
  const[isSubmitting, setIsSubmitting]= useState(false)
 
    const[name, setName]= useState('');
    const[email, setEmail]= useState('');
    const[phone, setPhone]= useState('');
    const[password, setPassword]= useState('');
    const[loading, setLoading]=useState(false);
    const[login, setLogin]=useState(true);
    const[signup, setSignup]= useState(false);

    const showlogin=()=>{
        setLogin(true);
        setSignup(false);
    }
    const showsignup=()=>{
        setSignup(true);
        setLogin(false);
    }
  return (
   <KeyboardAvoidingView style={{flex:1, padding:20, backgroundColor:'white'}}  >
      <Ionicons name="logo-react" size={100} style={styles.shiftswaplogo} />

      <Text style={[{ fontWeight:'semibold'}, styles.titletext]}>Welcome to ShiftSwap</Text>
      <Text style={styles.text}>Manage your hospital shifts with ease</Text>

       <View style={styles.textInputView}>
      
                  <View style={[styles.innertextInputView, {},login && {backgroundColor: '#0097B2'}]}>
                      <Pressable onPress={showlogin}>
                          <Text style={[[styles.text,login && {color: 'white'}]]}>Login</Text>
                      </Pressable>
                  </View>
      
                   <View style={[styles.innertextInputView, signup && {backgroundColor: '#0097B2'}]}>
                      <Pressable onPress={showsignup}>
                          <Text style={[styles.text, signup && {color: 'white'}]}>Sign Up</Text>
                      </Pressable>
                  </View>
      
              </View>
      <View>
        
      </View>

      {login && (
        <View>
         
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
          <Pressable  onPress={() => navigation.navigate('home')}>
           <View style={{marginTop:10, marginBottom:20, }}>
            <Text style={{color:'#0097B2'}}>Forgot Password?</Text>
          </View>
          </Pressable>

          <Pressable style={styles.button} onPress={() => navigation.navigate('home')}>
            <Text style={styles.buttontext}>Login</Text>
          </Pressable>

           <View style={{marginTop:20, marginBottom:20, flexDirection:'row', alignItems:'center', justifyContent:'center', gap:5}}>
                  <Ionicons name="information-circle-outline" size={16} color="#0097B2" />
                  <Text style={{color:'#0097B2', flexWrap:'wrap', fontSize:14}}>By continuing you agree to our terms of Service and Privacy Policy</Text>
                </View>

          
        </View>
      )}

      {signup && (
        <View>
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
                    value={email}
                    onChangeText={(text)=>{
                      setEmail(text);
                      if(errors.email) setErrors({...errors, email:undefined});
                    }}
                    placeholder='Enter your Mail'
                    keyboardType='email-address'
                    autoCapitalize="none"

                />
                <Text style={styles.label}>Phone Number</Text>
                <TextInput style={styles.textInput}
                    value={phone}
                    onChangeText={setPhone}
                    placeholder='Phone Number'
                    keyboardType='phone-pad'
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
      
                <Pressable style={styles.button} onPress={() => navigation.navigate('home')}>
                  <Text style={styles.buttontext}>Sign Up</Text>
                </Pressable>

                <View style={{marginTop:20, marginBottom:20, flexDirection:'row', alignItems:'center', justifyContent:'center', gap:5}}>
                  <Ionicons name="information-circle-outline" size={16} color="#0097B2" />
                  <Text style={{color:'#0097B2'}}>By continuing you agree to our terms of Service and Privacy Policy</Text>
                </View>

        </View>
      )}
    </KeyboardAvoidingView>
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
        fontSize: 16,
        
        padding:5,
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
       // height:40
      
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