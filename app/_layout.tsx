import { Stack} from "expo-router";
export default function RootLayout() {
  return (
    <Stack> 
      <Stack.Screen 
        name="index" 
        options={{
          headerTitle: "Dashboard",
          headerTitleStyle: {
            fontFamily: "InstrumentSans_500Medium"
          },
          headerTitleAlign: "center"
      }}
      />
      <Stack.Screen 
        name="about" 
        options={{
          headerTitle: "About",
          headerTitleStyle: {
            fontFamily: "InstrumentSans_500Medium"
          },
          headerTitleAlign: "center"
        }} 
      />
    </Stack>
  );
}