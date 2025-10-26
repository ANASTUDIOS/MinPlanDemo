import { useFonts } from 'expo-font';
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useState } from 'react';
// import { styles } from "../styles";
import { supabase } from '../lib/supabase';
export default function RootLayout() {
  const [isLoggedIn, setlogstate] = useState(true);
      
  async function checksignIn(){
    const {data: {user}} = await supabase.auth.getUser();
    const router = useRouter();
    if (user){
      setlogstate(true);
      // router.replace("./(tabs)/index.tsx");
    }else{
      setlogstate(false);
    }
  }

  const [fontsLoaded] = useFonts({
        'FGrotesk-Medium': require("../assets/fonts/FGrotesk-Medium.ttf"),
        'FGrotesk-Bold': require("../assets/fonts/FGrotesk-Bold.ttf"),
        'Brico-Regular': require("../assets/fonts/BricolageGrotesque-Regular.ttf"),
        'Brico-Bold': require("../assets/fonts/BricolageGrotesque-Bold.ttf")
  });

  if(!fontsLoaded){
    SplashScreen.preventAutoHideAsync();
  }

  return (
    SplashScreen.hideAsync(),
    <Stack> 

      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
      </Stack.Protected>

      <Stack.Protected guard={!isLoggedIn}>
         <Stack.Screen name="(auth)" options={{headerShown: false}}/>
      </Stack.Protected>
      
    </Stack>
  );
}