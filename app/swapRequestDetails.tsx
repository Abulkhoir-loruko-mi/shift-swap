import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function swapRequestDetails() {
  return (
    <ScrollView style={{flex:1, padding:10}}>
          <View style={styles.availableswapcard}>
            <View style={{ }}>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20 }}>

                    <View style={{flexDirection:'row', alignItems:'center',}}>
                        <View style={styles.profilecard}></View>
                        <View>
                            <Text style={{fontSize:18, fontWeight:"bold",}}>Sarah Chen,</Text>
                            <Text style={{fontSize:16, fontWeight:"semibold", flexWrap:'wrap', wordWrap:'true',maxWidth:150,maxHeight:40}}>RN-Emergency Department </Text>
                             <View style={{flexDirection:'row', alignItems:'center',padding:10}}>
                            <Ionicons name='alert' size={16}></Ionicons>
                            <Text style={styles.textr}>rating</Text>
                            <Ionicons name='calendar' size={16}></Ionicons>
                        </View>
                        </View>

                    </View>
                    <View>
                        <View style={styles.typeSHiftcard}>
                        <Text style={styles.shifttext}>Direct swap</Text>
                    </View>

                    </View>
                 
                    

                 

               </View>
            </View>
           

       
             <View style={[styles.redbordertcard,{flexDirection:'row',} ]}>
                <View style={{ alignItems:'center', padding:5}} >
                        <Ionicons name='alert'  size={24}></Ionicons>
                   
           
                </View>
                <View>
                    <Text style={styles.blacktext}>Response deadline: 24 hours</Text>
                    <Text style={styles.blacktext}>Posted:2 hours ago</Text>

                </View>
                
             
             </View>
              

           
        </View>

         <View style={styles.shifofferedcard}>
            <Text style={styles.blacktext}>Shift Being Offered</Text>
                   
        
                   
                    <View style={styles.innershifofferedcard}>
                         <View style={{}}>
                        <View style={{flexDirection:'row', alignItems:'center',}}>
                            <Ionicons name='calendar'color='black' size={16}/>
                        <Text  style={styles.blacktext}>Wednesday January 8, 2025</Text>
                      
                    </View>
        
                    </View>
                         <View style={{flexDirection:'row', alignItems:'center', }}>
                        <Ionicons name='time'color='black' size={16}/>
                        <Text  style={styles.blacktext}>7:00 AM- 3:00PM</Text>
                    </View>
                     <View style={{flexDirection:'row', alignItems:'center', }}>
                        <Ionicons name='location'color='black' size={16}/>
                        <Text style={styles.blacktext}>Emergency Department</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <View></View>
                        <View style={styles.typeSHiftcard}>
                            <Text style={styles.shifttext}>Day shift</Text>
                        </View>

                    </View>

                    </View>
        
               
        
                     <Text style={[styles.blacktext,{fontWeight:'500'}]}>Looking for:</Text>
                     <View style={styles.typeSHiftcard}>
                           <Text style={styles.blacktext}>Night Shift(11PM - 7AM)</Text>
        

                     </View>
                  
        
                     
                </View>
                <View style={styles.reasoncard}>
                    <Text style={[styles.blacktext,{color:'#0097B2',fontWeight:'500'}]}>Reason for swap</Text>
                    <Text style={styles.blacktext}>Family emergency - need to attend a medical appointment</Text>


                </View>
                <View style={styles.shifofferedcard}>
                    <Text style={[styles.blacktext,{fontWeight:'500'}]}>Important Notes</Text>
                    <Text style={styles.text}>. All swap requests require supervisor approval </Text>
                    <Text style={styles.text}>. You'll be notified when someone accepts your request</Text>
                    <Text style={styles.text}>. Both parties must confirm the swap</Text>
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
     textr:{
        fontSize:20, 
    fontWeight:'semibold',
    paddingRight:5,
    
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
    //flex:1,
    backgroundColor:'white',
      padding:10,
      //margin:10,
      marginBottom:10,
      borderRadius:12,
      borderWidth:2,
      borderColor:'#0097B2',
      height:250,
     
     
   },
  reasoncard:{
    //flex:1,
    backgroundColor:'white',
      padding:10,
      //margin:10,
      marginBottom:10,
      borderRadius:12,
      borderWidth:2,
      borderColor:'#0097B2',
     
     
     
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
      
      borderRadius:15,
      
      //width:20,
      //elevation:5
   },
   redbordertcard:{
     
      padding:5,
      borderWidth:1,
      borderColor:'red',
      
      borderRadius:10,
      margin:5,
      //height:100
      
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
     shifofferedcard:{
    //flex:1,
    backgroundColor:'#b1ecf6ff',
      padding:10,
      //margin:10,
      marginBottom:10,
      borderRadius:12,
      //borderWidth:2,
      borderColor:'#0097B2',
      //height:250,
   },
   innershifofferedcard:{
    //flex:1,
    backgroundColor:'#b1ecf6ff',
      padding:10,
      //margin:10,
      marginBottom:10,
      borderRadius:12,
      borderWidth:1,
      borderColor:'#0097B2',
      //height:250,
   },
})