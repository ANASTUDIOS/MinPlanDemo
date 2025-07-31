import { Text, View, ScrollView} from "react-native";
import { styles } from "../../styles";
import DropedDown from "@/components/ThinDropDown";
export default function Tasks() {
      return (
        <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={styles.container}>
                  <ScrollView>
                  <Text style={[styles.header, {paddingLeft:70, paddingRight:70}]}>Create tasks 📌, stay organized, and plan for what the future holds.</Text>
                  <DropedDown name="General Task"/>
                  <DropedDown name="Scholarship Task"/>
                  <DropedDown name="Test Prep Task"/>
                  <DropedDown name="College Apps Task"/>
                  <DropedDown name="College Essay Task"/>
                  <DropedDown name="Project/Resume Task"/>
                  {/* <Text style={[styles.quote, {paddingTop:65, paddingBottom:65, fontFamily:"Brico-Bold", fontWeight:600, backgroundColor:"#0D0D0D"}]}>        PlanningCO *2025       </Text> */}
                  </ScrollView>
                  </View>
                </ScrollView>
        </View>
        );
}