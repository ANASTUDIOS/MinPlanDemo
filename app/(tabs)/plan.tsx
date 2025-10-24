import ThinDroppedDown from "@/components/ThinDropDown";
import { Text, TextInput, View } from "react-native";
import { colors, styles } from "../../styles";

export default function Plan() {
      return (
        <View style={styles.container}>
          <Text style={[styles.header, {paddingLeft:60, paddingRight:60}]}>Use the built-in writting features and AI, to help plan ✒️ your pre-college journey!</Text>
          <TextInput style = {{ paddingLeft:10, paddingRight:10, marginTop:32, textAlignVertical: 'top', backgroundColor: colors.headersBg, color:colors.text, fontFamily: "Brico-Regular", fontWeight: 400, fontSize: 16, width:320, height:200, borderWidth:2, borderColor:"#373737", borderRadius:10}} placeholder="Add text here" selectionColor="#373737" placeholderTextColor="#373737" multiline/>
          <ThinDroppedDown name="Awards "num={10}/>
        </View>
        );
}
