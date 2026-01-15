import { Stack } from 'expo-router';
import 'react-native-reanimated';




export default function RootLayout() {
 

  return (
    
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false ,}} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="signUp" options={{ headerShown: false }} />
        <Stack.Screen name="mySchedule" options={{ headerShown: true, title:'My Schedule',headerTintColor:'#00797B', }} />
        <Stack.Screen name="availableSwap" options={{ headerShown: true, title:'Available Swap',headerTintColor:'#00797B', }} />
         <Stack.Screen name="swapRequestDetails" options={{ headerShown: true, title:'Swap Request Details',headerTintColor:'#00797B', }} />
          <Stack.Screen name="requestShiftSwap" options={{ headerShown: true, title:'Request shift Swap',headerTintColor:'#00797B', }} />
        <Stack.Screen name="completeProfile" options={{ headerShown: false }} />
        
       
      </Stack>
    
  );
}
