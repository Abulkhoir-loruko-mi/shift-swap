import { profileService, shiftService } from '@/src/services/api';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Pressable, RefreshControl, StyleSheet, Text, View } from 'react-native';

export default function home() {

  type Shift = {
    id: string;
    date: string;
    startTime: string;
    endTime: string;
  };

  const [shifts, setShifts] = useState<Shift[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

   const [userData, setUserData] = useState({
      name: '',
      email: '',
      department: '',
      phoneNumber: '',
      role: '',
    });
  
  
          useEffect(() => {
      loadProfile();
    }, []);
  
   const loadProfile = async () => {
    try {
      setLoading(true);
      const user = await profileService.getProfile(); // Now returns the clean 'profile' object
      
      console.log('LOADED PROFILE:', user); // Check this log!
  
      setUserData({
        name: user.name || '',
        email: user.email || '',
        // Ensure we access the correct fields from your JSON
        department: user.department || '',
        phoneNumber: user.phoneNumber || '',
        role: user.role || 'staff',
        // Add these if you have inputs for them
        //employeeId: profile.employeeId || '',
        //preferredShiftType: profile.preferredShiftType || '',
       // yearsOfExperience: profile.yearsOfExperience ? String(profile.yearsOfExperience) : '',
        //extraCertifications: profile.extraCertifications || ''
      });
  
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to load profile');
    } finally {
      setLoading(false);
    }
  };




  // 1. Function to Fetch Data
  const loadShifts = async () => {
    try {
      // You can pass filters here later, e.g., { department: 'ICU' }
      const data = await shiftService.getAvailableShifts();
      setShifts(data);
    } catch (error) {
      console.error(error);
      // Optional: Show a subtle toast instead of an Alert for a feed error
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // 2. Load on Mount
  useEffect(() => {
    loadShifts();
  }, []);

  // 3. Handle Pull-to-Refresh
  const onRefresh = () => {
    setRefreshing(true);
    loadShifts();
  };
   
   const showschedule=()=>{
      navigation.navigate('mySchedule')
   }
    const showavailableswap=()=>{
      navigation.navigate('availableSwap')
   }
    const navigation = useNavigation<any>();
  return (
    <View style={{ flex:1}}>
        <View style={styles.card}>

            <View style={{alignItems:"center", justifyContent:"space-between"}}>

                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>

                    <View style={{flexDirection:'row', alignItems:'center',marginRight:40}}>
                        <View style={styles.profilecard}>

                        </View>
                        <View>
                            <Text style={{fontSize:18, fontWeight:"semibold",color:"white"}}>Welcome back,</Text>
                            <Text style={{fontSize:24, fontWeight:"semibold",color:"white"}}>{userData.name}</Text>
                        </View>

                    </View>
                 
                    <View style={styles.profilecards}></View>

                  <View style={{padding:60}}></View>

               </View>

            <View style={{alignItems:'center', justifyContent:'space-between'}}>

                 <View style={{flexDirection:'row'}}>
                    <View style={styles.cardin}>
                        <Ionicons name='call-outline' size={16}/>
                        <Pressable onPress={showschedule
                        
                        }>
                           <Text style={{fontSize:16, fontWeight:'semibold'}}>My schedule</Text>

                        </Pressable>
                        

                    </View>

                    <View style={styles.cardin}>
                        <Ionicons name='call-outline' size={16}/>
                        <Pressable onPress={showavailableswap
                        
                        }>
                           <Text style={{fontSize:16, fontWeight:'semibold'}}>Find swaps</Text>

                        </Pressable>
                        
                    </View>

              </View>

            </View>


            </View>

        </View>

         <View style={{flexDirection:'row', alignItems:'center', padding:10}}>
               <Ionicons name='time' size={16}/>
                
            <Text style={{fontSize:17, fontWeight:"semibold",color:"black", padding:5}}>Upcoming shifts</Text>
             
         </View>
         
         <FlatList
         data={shifts}
         keyExtractor={(item) => item.id}
         refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 50, color: '#777' }}>
            No shifts available for swap right now.
          </Text>
        }
        renderItem={({item})=>(

          <View style={styles.upcomingcard}>
            <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                <Text style={styles.text}>Jan  Friday {item.date}</Text>
                <Text style={styles.text}>Day shift</Text>

            </View>
            

            <Text style={styles.text}> 3   {item.startTime} - {item.endTime}</Text>

         </View>

        )}
         
         
         ></FlatList>





         <View style={{ alignItems:'center'}}>
       
            <Text style={{fontSize:17, fontWeight:"semibold",color:"black", padding:20}}>View full schedule</Text>
             
         </View>

         <View style={styles.schedulecard}>
            <Text style={styles.text}>Recent Activity</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Ionicons name='checkbox' color='white' size={16}/>
                <Text style={styles.text}>Swap request with Sarah chen approved</Text>
            
            </View>
            <Text style={styles.text}>2h ago</Text>

             <View style={{flexDirection:'row', alignItems:'center'}}>
                <Ionicons name='key'color='white' size={16}/>
                <Text style={styles.text}>New swap request for Jan 8</Text>
            
            </View>
            <Text style={styles.text}>5h ago</Text>

         </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
     card:{
      backgroundColor:'#0097B2',
      padding:10,
      //margin:10,
     
      borderBottomEndRadius:20,
      borderBottomStartRadius:20,
      height:270,
      width:'100%',
      //shadowColor:'#000',
      //shadowOffset:{width:0, height:2},
      //shadowOpacity:0.25,
      //shadowRadius:3.84,
      elevation:5
   },
   cardin:{
      backgroundColor:'white',
      padding:20,
      margin:10,
      borderRadius:12,
      height:103,
      width:138,
      //shadowColor:'#000',
      //shadowOffset:{width:0, height:2},
      //shadowOpacity:0.25,
      //shadowRadius:3.84,
      elevation:5
   },
   profilecard:{
      backgroundColor:'#D9D9D9',
      padding:20,
      margin:10,
      borderRadius:20,
      height:20,
      width:20,
      elevation:5
   },
    profilecards:{
      backgroundColor:'#D9D9D9',
      padding:20,
      
      //borderRadius:15,
      height:20,
      width:20,
      elevation:5
   },
   upcomingcard:{
      backgroundColor:'#0097B2',
      padding:20,
      margin:10,
      borderRadius:8,
      height:146,
      //shadowColor:'#000',
      //shadowOffset:{width:0, height:2},
      //shadowOpacity:0.25,
      //shadowRadius:3.84,
      elevation:5
   },
   text:{fontSize:20, 
    fontWeight:'semibold',
    padding:10,
    color:'white'},

   schedulecard:{
      backgroundColor:'#0097B2',
      padding:20,
      margin:10,
      borderRadius:8,
      height:272,
      //width:354,
      //shadowColor:'#000',
      //shadowOffset:{width:0, height:2},
      //shadowOpacity:0.25,
      //shadowRadius:3.84,
      elevation:5
   }
   

})