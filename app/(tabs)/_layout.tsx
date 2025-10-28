import Entypo from '@expo/vector-icons/Entypo';
import { default as FontAwesome6 } from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";
import { colors } from "../../styles";
export default function TabsLayout() {
 
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: colors.text,
            headerShadowVisible: false,
            headerStyle:{
                backgroundColor: colors.headersBg,
                borderBottomColor: "#373737",
                borderBottomWidth: 1,
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
          title: "Home",
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
        name="tasks" 
        options={{
          title: "Tasks",
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
        name="plan" 
        options={{
          title: "Plan",
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

      
    </Tabs>
  );

}

