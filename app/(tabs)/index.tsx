import {Text, View, ScrollView} from "react-native";
import { styles } from "../../styles";
import {HeaderText} from '../../components/HeaderText';
import DropedDown from "@/components/DropDownList";
export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
        <HeaderText text="Welcome 🎉, " name="College Enthusiast!"></HeaderText>
        <Text style={styles.quote}> Daily Quote: Keep going! Your future is worth the effort!</Text>
        <DropedDown name=" ⏳ Weekly Timeline "/>
        <DropedDown name="❤️ Favorite Colleges "/>
        {/* <Text style={[styles.quote, {paddingTop:65, paddingBottom:65, fontFamily:"Brico-Bold", fontWeight:600, backgroundColor:"#0D0D0D"}]}>        PlanningCO *2025       </Text> */}
      </View>
      </ScrollView>
    </View>
  )
}

//</ScrollView>  );