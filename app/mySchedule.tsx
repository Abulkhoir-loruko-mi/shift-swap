import { shiftService } from '@/src/services/api';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Pressable, RefreshControl, StyleSheet, Text, View } from 'react-native';


export default function mySchedule() {

     type Shift = {
        department: string;
        _id: string;
        date: string;
        startTime: string;
        endTime: string;
      };
    
      const [shifts, setShifts] = useState<Shift[]>([]);
      const [loading, setLoading] = useState(true);
      const [refreshing, setRefreshing] = useState(false);
      const [activeTab, setActiveTab] = useState('upcoming');
    
    
    
    
      const loadMyShifts = async () => {
    try {
      // Don't show full spinner on pull-to-refresh
      if (!refreshing) setLoading(true); 
      
      const data = await shiftService.getMyAssignedShifts(activeTab);
      console.log('shifts', data)
      setShifts(data);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Could not load your schedule.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // 2. Reload whenever the Tab changes (Upcoming <-> Past)
  useEffect(() => {
    loadMyShifts();
  }, [activeTab]);

  const onRefresh = () => {
    setRefreshing(true);
    loadMyShifts();
  };

     const navigation = useNavigation<any>();
    const[upcoming, setUpcoming]=useState(true)
    const[past, setPast]=useState(false)

    const showUpcoming=()=>{
        setUpcoming(true)
        setPast(false)
        setActiveTab('upcoming')

    }

    const showPast=()=>{
        setPast(true)
        setUpcoming(false)
        setActiveTab('past')    
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
                    <Text>{activeTab.length} shifts schedules</Text>
                    <View style={[styles.row,{}]}>
                        <Ionicons title='calender' size={18}/>
                        <Text>Calender View</Text>

                    </View>

                </View>

                 <FlatList
                         data={shifts}
                         keyExtractor={(item) => item._id}
                         refreshControl={
                          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        }
                        ListEmptyComponent={
                          <Text style={{ textAlign: 'center', marginTop: 50, color: '#777' }}>
                            No {activeTab} shifts found right now.
                          </Text>
                        }
                        renderItem={({item})=>(
                                <View style={styles.availableswapcard}>
                
                            <View style={{}}>
                                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                <Text  style={styles.blacktext}>{item.date?.split('T')[0]}</Text>
                                <View style={styles.typeSHiftcard}>
                                    <Text style={styles.shifttext}>Day shift</Text>
                                </View>
                            </View>
                
                            </View>
                
                            
                          <Text style={styles.text}>Saturday</Text>
                          
                            <View style={{flexDirection:'row', alignItems:'center', }}>
                                <Ionicons name='time'color='black' size={16}/>
                                <Text  style={styles.blacktext}>{item.startTime} - {item.endTime}</Text>
                            </View>
                             <View style={{flexDirection:'row', alignItems:'center', }}>
                                <Ionicons name='location'color='black' size={16}/>
                                <Text style={styles.blacktext}>{item.department}</Text>
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
                    <Text>{activeTab.length} completed shifts </Text>
                    <View style={[styles.row,{}]}>
                        <Ionicons title='calender' size={24}/>
                        <Text>Calender View</Text>

                    </View>

                </View>

                <FlatList
                         data={shifts}
                         keyExtractor={(item) => item._id}
                         refreshControl={
                          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        }
                        ListEmptyComponent={
                          <Text style={{ textAlign: 'center', marginTop: 50, color: '#777' }}>
                            No {activeTab} shifts found right now.
                          </Text>
                        }
                        renderItem={({item})=>(
                                <View style={styles.availableswapcard}>
                
                            <View style={{}}>
                                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                <Text  style={styles.blacktext}>{item.date?.split('T')[0]}</Text>
                                <View style={styles.typeSHiftcard}>
                                    <Text style={styles.shifttext}>Day shift</Text>
                                </View>
                            </View>
                
                            </View>
                
                            
                          <Text style={styles.text}>Saturday</Text>
                          
                            <View style={{flexDirection:'row', alignItems:'center', }}>
                                <Ionicons name='time'color='black' size={16}/>
                                <Text  style={styles.blacktext}>{item.startTime} - {item.endTime}</Text>
                            </View>
                             <View style={{flexDirection:'row', alignItems:'center', }}>
                                <Ionicons name='location'color='black' size={16}/>
                                <Text style={styles.blacktext}>{item.department}</Text>
                            </View>

                           
                
                             
                        </View>
                        
                
                        )}
                         
                         
                         ></FlatList>
                
                
                

                                
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