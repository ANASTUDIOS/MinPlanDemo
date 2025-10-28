import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useState } from 'react';

export default function RootLayout() {
  const [isLoggedIn, setlogstate] = useState(false);


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
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>
  );
}