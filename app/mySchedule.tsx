import { shiftService } from '@/src/services/api';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';


export default function mySchedule() {

     type Shift = {
        id: string;
        date: string;
        startTime: string;
        endTime: string;
      };
    
      const [shifts, setShifts] = useState<Shift[]>([]);
      const [loading, setLoading] = useState(true);
      const [refreshing, setRefreshing] = useState(false);
    
    
    
    
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

     const navigation = useNavigation<any>();
    const[upcoming, setUpcoming]=useState(true)
    const[past, setPast]=useState(false)

    const showUpcoming=()=>{
        setUpcoming(true)
        setPast(false)

    }

    const showPast=()=>{
        setPast(true)
        setUpcoming(false)
    }

    const requestSwap=()=>{
        navigation.navigate('requestShiftSwap')

    }

   

  return (
    <View style={styles.container}>

        <View style={styles.textInputView}>

           
                <Pressable onPress={showUpcoming} style={[styles.innertextInputView, {},upcoming && {backgroundColor: 'white'}]}>
                    <Text style={styles.text}>Upcoming</Text>
                </Pressable>
            

            
                <Pressable onPress={showPast} style={[styles.innertextInputView, past && {backgroundColor: 'white'}]}>
                    <Text style={styles.text}>Past</Text>
                </Pressable>
           

        </View>

        {upcoming && ( 
            <View>

                <View style={ [styles.row,{}]}>
                    <Text>4 shifts schedule</Text>
                    <View style={[styles.row,{}]}>
                        <Ionicons title='calender' size={18}/>
                        <Text>Calender View</Text>

                    </View>

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
                                <View style={styles.availableswapcard}>
                
                            <View style={{}}>
                                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                <Text  style={styles.blacktext}> January 8, 2025</Text>
                                <View style={styles.typeSHiftcard}>
                                    <Text style={styles.shifttext}>Day shift</Text>
                                </View>
                            </View>
                
                            </View>
                
                            
                          <Text style={styles.text}>Saturday</Text>
                          
                            <View style={{flexDirection:'row', alignItems:'center', }}>
                                <Ionicons name='time'color='black' size={16}/>
                                <Text  style={styles.blacktext}>7:00 AM- 3:00PM</Text>
                            </View>
                             <View style={{flexDirection:'row', alignItems:'center', }}>
                                <Ionicons name='location'color='black' size={16}/>
                                <Text style={styles.blacktext}>Emergency Department</Text>
                            </View>

                            <Pressable onPress={requestSwap} style={styles.button}>
                                <Text style={styles.buttonText}>Request Swap</Text>
                            </Pressable>
                
                             
                        </View>
                        
                
                        )}
                         
                         
                         ></FlatList>
                


               
                 
        

                                
            </View>
        )}

          {past && ( 
            <View>
                <View style={ [styles.row,{}]}>
                    <Text>2 completed shifts </Text>
                    <View style={[styles.row,{}]}>
                        <Ionicons title='calender' size={24}/>
                        <Text>Calender View</Text>

                    </View>

                </View>

                <ScrollView>
                    <View style={styles.availableswapcard}>
                
                            <View style={{}}>
                                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                <Text  style={styles.blacktext}> January 8, 2025</Text>
                                <View style={styles.typeSHiftcard}>
                                    <Text style={styles.shifttext}>Day shift</Text>
                                </View>
                            </View>
                
                            </View>
                
                            
                          <Text style={styles.text}>Saturday</Text>
                          
                            <View style={{flexDirection:'row', alignItems:'center', }}>
                                <Ionicons name='time'color='black' size={16}/>
                                <Text  style={styles.blacktext}>7:00 AM- 3:00PM</Text>
                            </View>
                             <View style={{flexDirection:'row', alignItems:'center', }}>
                                <Ionicons name='location'color='black' size={16}/>
                                <Text style={styles.blacktext}>Emergency Department</Text>
                            </View>

                
                
                             
                        </View>

                 <View style={styles.availableswapcard}>
                
                            <View style={{}}>
                                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                <Text  style={styles.blacktext}> January 8, 2025</Text>
                                <View style={styles.typeSHiftcard}>
                                    <Text style={styles.shifttext}>Day shift</Text>
                                </View>
                            </View>
                
                            </View>
                
                            
                          <Text style={styles.text}>Saturday</Text>
                          
                            <View style={{flexDirection:'row', alignItems:'center', }}>
                                <Ionicons name='time'color='black' size={16}/>
                                <Text  style={styles.blacktext}>7:00 AM- 3:00PM</Text>
                            </View>
                             <View style={{flexDirection:'row', alignItems:'center', }}>
                                <Ionicons name='location'color='black' size={16}/>
                                <Text style={styles.blacktext}>Emergency Department</Text>
                            </View>

                
                
                             
                        </View>

                </ScrollView>

                
                

                                
            </View>
        )}
     
    </View>
  )
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'space-between'
    },
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
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:5,
        marginBottom:20,
        borderRadius:20,
        backgroundColor:'#F1F1F1',
       // height:40
      
        //textAlign: 'center',
    },
    innertextInputView:{
       
        //borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        //borderColor: '#848484',
      
        borderRadius:20,
        
       
        //height:35,
        width:'45%'
      
        //textAlign: 'center',
    },

    blacktext:{
        fontSize:18, 
    fontWeight:'semibold',
    padding:5,
    
    },
    shifttext:{
        fontSize:16, 
    fontWeight:'semibold',
    
    color:'white'

    },

   availableswapcard:{
    flex:1,
    backgroundColor:'white',
      padding:10,
      //margin:10,
      marginBottom:10,
      marginTop:10,
      borderRadius:12,
      borderWidth:1,
      borderColor:'#0097B2',
    
     
   },
  
    typeSHiftcard:{
      backgroundColor:'#0097B2',
      padding:5,
      
      borderRadius:10,
    
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