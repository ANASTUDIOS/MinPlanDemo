import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors } from "../../styles";
export default function TabsLayout() {
 
  return (
    
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: colors.text,
            headerShadowVisible: false,
            headerStyle:{
                backgroundColor: colors.headersBg,
                borderBottomWidth: 1,
                borderColor: "#373737",
            },
            headerTintColor:  "#FFFBF3",
            tabBarStyle: {
                backgroundColor: colors.headersBg,
                borderTopWidth: 1,
                borderColor: "#373737",
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
          fontFamily: "FGrotesk-Bold",
          fontSize: 22,
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
          headerTitle: "College Search",
          headerTitleAlign: "left",
          headerTitleStyle: {
          fontFamily: "FGrotesk-Bold",
          fontSize: 22,
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
          fontFamily: "FGrotesk-Bold",
          fontSize: 22,
          },
          tabBarIcon: ({focused, color}) => 
          <MaterialCommunityIcons name="pin" size={15} color= "#FFFBF3" />,
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
          fontFamily: "FGrotesk-Bold",
          fontSize: 22,
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
          fontFamily: "FGrotesk-Bold",
          fontSize: 22,
          },
          tabBarIcon: ({focused, color}) => 
          <Entypo name="pencil" size={15} color= "#FFFBF3" />,
        }} 
      />

      <Tabs.Screen name="+not-found"/>
    </Tabs>
  );

}

