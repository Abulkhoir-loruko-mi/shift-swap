import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function home() {
  return (
    <ScrollView style={{ flex:1}}>
        <View style={styles.card}>

            <View style={{alignItems:"center", justifyContent:"space-between"}}>

                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>

                    <View style={{flexDirection:'row', alignItems:'center',marginRight:40}}>
                        <View style={styles.profilecard}>

                        </View>
                        <View>
                            <Text style={{fontSize:18, fontWeight:"semibold",color:"white"}}>Welcome back,</Text>
                            <Text style={{fontSize:24, fontWeight:"semibold",color:"white"}}>Alex Johnson</Text>
                        </View>

                    </View>
                 
                    <View style={styles.profilecards}></View>

                  <View style={{padding:60}}></View>

               </View>

            <View style={{alignItems:'center', justifyContent:'space-between'}}>

                 <View style={{flexDirection:'row'}}>
                    <View style={styles.cardin}>
                        <Ionicons name='call-outline' size={16}/>
                        <Text style={{fontSize:16, fontWeight:'semibold'}}>My schedule</Text>

                    </View>

                    <View style={styles.cardin}>
                        <Ionicons name='call-outline' size={16}/>
                        <Text style={{fontSize:16, fontWeight:'semibold'}}>Find swaps</Text>
                    </View>

              </View>

            </View>


            </View>

            
           
           

        </View>

         <View style={{flexDirection:'row', alignItems:'center', padding:10}}>
               <Ionicons name='time' size={16}/>
                
            <Text style={{fontSize:17, fontWeight:"semibold",color:"black", padding:5}}>Upcoming shifts</Text>
             
         </View>

         <View style={styles.upcomingcard}>
            <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                <Text style={styles.text}>Jan  Friday</Text>
                <Text style={styles.text}>Day shift</Text>

            </View>
            

            <Text style={styles.text}> 3   7:00am-3:00pm</Text>

         </View>

          <View style={styles.upcomingcard}>
            <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                <Text style={styles.text}>Jan  Sunday</Text>
                <Text style={styles.text}>Evening shift</Text>

            </View>
            

            <Text style={styles.text}> 5   3:00am-10:00pm</Text>

         </View>

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
     
    </ScrollView>
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