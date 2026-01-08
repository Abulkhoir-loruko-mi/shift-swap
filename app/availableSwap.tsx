import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function availableSwap() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.availableswapcard}>
            <View style={{ }}>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20 }}>

                    <View style={{flexDirection:'row', alignItems:'center',}}>
                        <View style={styles.profilecard}></View>
                        <View>
                            <Text style={{fontSize:18, fontWeight:"semibold",}}>Sarah Chen,</Text>
                            <Text style={{fontSize:16, fontWeight:"semibold", flexWrap:'wrap', wordWrap:'true',maxWidth:150,maxHeight:40}}>RN-Emergency Department </Text>
                        </View>

                    </View>
                    <View>
                        <View style={styles.typeSHiftcard}>
                        <Text style={styles.shifttext}>Direct swap</Text>
                    </View>

                    </View>
                 
                    

                 

               </View>
            </View>

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

             <Text style={styles.blacktext}>Looking for:</Text>
             <Text style={styles.blacktext}>Night Shift(11PM - 7AM)</Text>

             <Text style={styles.blacktext}>Reason:</Text>
             <Text style={styles.blacktext}>Family emergency - need to attend a medical appointment</Text>

             <View style={styles.line}></View>

             <Text style={styles.blacktext}>Posted:2 hours ago</Text>
             <Text style={styles.blacktext}>Deadline: 24 hours</Text>

        </View>

          <View style={styles.availableswapcard}>
            <View style={{ }}>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20 }}>

                    <View style={{flexDirection:'row', alignItems:'center',}}>
                        <View style={styles.profilecard}></View>
                        <View>
                            <Text style={{fontSize:18, fontWeight:"semibold",}}>Micheal Johnson,</Text>
                            <Text style={{fontSize:16, fontWeight:"semibold", flexWrap:'wrap', wordWrap:'true',maxWidth:150,maxHeight:40}}>LPN-ICU </Text>
                        </View>

                    </View>
                    <View>
                        <View style={styles.typeSHiftcard}>
                        <Text style={styles.shifttext}>Direct swap</Text>
                    </View>

                    </View>
                 
                    

                 

               </View>
            </View>

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

             <Text style={styles.blacktext}>Looking for:</Text>
             <Text style={styles.blacktext}>Night Shift(11PM - 7AM)</Text>

             <Text style={styles.blacktext}>Reason:</Text>
             <Text style={styles.blacktext}>Family emergency - need to attend a medical appointment</Text>

             <View style={styles.line}></View>

             <Text style={styles.blacktext}>Posted:2 hours ago</Text>
             <Text style={styles.blacktext}>Deadline: 24 hours</Text>

        </View>
         <View style={{marginBottom:50}}>
        
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
    },
     text:{
        fontSize:20, 
    fontWeight:'semibold',
    padding:5,
    
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
      borderRadius:12,
      borderWidth:2,
      borderColor:'#0097B2',
      height:500,
     
   },
    profilecard:{
      backgroundColor:'#D9D9D9',
     
      margin:5,
      borderRadius:30,
      height:60,
      width:60,
      
   },
    typeSHiftcard:{
      backgroundColor:'#0097B2',
      padding:5,
      
      borderRadius:10,
      
      //width:20,
      //elevation:5
   },
   line:{
      backgroundColor:'#0097B2',
      height:2,
      
      borderRadius:10,
      margin:10,
      
      //width:20,
      //elevation:5
   },
})