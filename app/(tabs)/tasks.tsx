import DropedDown from "@/components/ThinDropDown";
import { ScrollView, Text, View } from "react-native";
import { styles } from "../../styles";
export default function Tasks() {
      return (
        <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={styles.container}>
                  <Text style={[styles.header, {paddingLeft:70, paddingRight:70}]}>Create tasks 📌, stay organized, and plan for what the future holds.</Text>
                  <DropedDown name="General Task " num={10} boo={true}/>
                  <DropedDown name="Scholarship Task " num={10} boo={true}/>
                  <DropedDown name="Test Prep Task " num={10} boo={true}/>
                  <DropedDown name="College Apps Task " num={10} boo={true}/>
                  <DropedDown name="College Essay Task " num={10} boo={true}/>
                  <DropedDown name="Project/Resume Task " num={10} boo={true}/>
                  </View>
                  <View style={{marginBottom:300}}></View>
                </ScrollView>
        </View>
        );
}