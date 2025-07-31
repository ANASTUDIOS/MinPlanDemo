import { Text, View} from "react-native";
import { styles } from "../../styles";

export default function Plan() {
      return (
        <View style={styles.container}>
          <Text style={[styles.header, {paddingLeft:60, paddingRight:60}]}>Use the built-in writting features and AI, to help plan ✒️ your pre-college journey!</Text>
        </View>
        );
}