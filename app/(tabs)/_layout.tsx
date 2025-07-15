import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
export default function TabsLayout() {
 
  return (
    
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: "#FFFBF3",
            headerShadowVisible: false,
            headerStyle:{
                backgroundColor: "#141414",
                borderTopWidth: 0.5,
                borderColor: "#050505",
            },
            headerTintColor:  "#FFFBF3",
            tabBarStyle: {
                backgroundColor: "#141414",
                borderTopWidth: 1,
                borderColor: "#FFFBF3",
            },
        }}
    > 


      <Tabs.Screen 
        name="index" 
        options={{
          title: "HOME",
          tabBarLabelStyle: {
            fontFamily: "FGrotesk-Bold"
          },
          headerTitle: "Dashboard",
          headerTitleStyle: {
          fontFamily: "FGrotesk-Bold"
          },
          headerTitleAlign: "left",
          tabBarIcon: ({focused, color}) => 
          <FontAwesome6 name="house" size={15} color= "#FFFBF3"/>,
      }}
      />
      
      <Tabs.Screen 
        name="colleges" 
        options={{
          title: "COLLEGES",
          tabBarLabelStyle: {
            fontFamily: "FGrotesk-Bold"
          },
          headerTitle: "Resources",
          headerTitleAlign: "left",
          headerTitleStyle: {
          fontFamily: "FGrotesk-Bold"
          },
          tabBarIcon: ({focused, color}) => 
          <FontAwesome name="book" size={15} color= "#FFFBF3" />,
        }} 
      />

      <Tabs.Screen 
        name="tasks" 
        options={{
          title: "TASKS",
          tabBarLabelStyle: {
            fontFamily: "FGrotesk-Bold"
          },
          headerTitle: "Tasks",
          headerTitleAlign: "left",
          headerTitleStyle: {
          fontFamily: "FGrotesk-Bold"
          },
          tabBarIcon: ({focused, color}) => 
          <AntDesign name="pushpin" size={15} color= "#FFFBF3" />,
        }} 
      />

       <Tabs.Screen 
        name="calendar" 
        options={{
          title: "CALENDAR",
          tabBarLabelStyle: {
            fontFamily: "FGrotesk-Bold"
          },
          headerTitle: "Calendar",
          headerTitleAlign: "left",
          headerTitleStyle: {
          fontFamily: "FGrotesk-Bold"
          },
          tabBarIcon: ({focused, color}) => 
          <Entypo name="calendar" size={15} color= "#FFFBF3"/>,
        }} 
      />

      <Tabs.Screen 
        name="plan" 
        options={{
          title: "PLAN",
          tabBarLabelStyle: {
            fontFamily: "FGrotesk-Bold"
          },
          headerTitle: "Plan",
          headerTitleAlign: "left",
          headerTitleStyle: {
          fontFamily: "FGrotesk-Bold"
          },
          tabBarIcon: ({focused, color}) => 
          <Entypo name="pencil" size={15} color= "#FFFBF3" />,
        }} 
      />

      <Tabs.Screen name="+not-found"/>
    </Tabs>
  );

}

