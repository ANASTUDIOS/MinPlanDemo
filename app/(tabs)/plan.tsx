import ThinDroppedDown from "@/components/ThinDropDown";
import { ScrollView, Text, View, TextInput} from "react-native";
import { styles, colors } from "../../styles";

export default function Plan() {
      return (
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            
            <View>
            <Text style={[styles.header, {paddingLeft:60, paddingRight:60}]}>Use the built-in writting features, to help plan ✒️ your college journey!</Text>
            </View>

            <View style={{flex: 1, justifyContent: 'center', alignItems:"center"}}>
            <TextInput autoCorrect={true} style = {{ paddingLeft:10, paddingRight:10, paddingTop:10, marginTop:32, marginBottom:2.5, marginLeft:32, marginRight:32, textAlignVertical: 'top', backgroundColor: colors.headersBg, color:colors.text, fontFamily: "Brico-Regular", fontWeight: 400, fontSize: 16, width:320, height:200, borderWidth:2, borderColor:"#373737", borderRadius:10}} placeholder="Add text here" selectionColor="#373737" placeholderTextColor="#373737" multiline/>
            <ThinDroppedDown name="Academic Awards " num={10} boo={false}/>
            <ThinDroppedDown name="Athletic Awards "num={10} boo={false}/>
            <ThinDroppedDown name="Community Service "num={10} boo={false}/>
            <ThinDroppedDown name="Scholarships "num={10} boo={false}/> 
            <ThinDroppedDown name="SAT Test Scores "num={10} boo={false}/>
            <ThinDroppedDown name="ACT Test Scores "num={10} boo={false}/>
            <View style={{marginBottom:300}}></View>
            </View>

          </ScrollView>
        </View>
        );
}
