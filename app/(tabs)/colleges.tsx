import { Text, View } from "react-native";
import { styles } from "../../styles";

export default function CollegeList() {
      return (
        <View style={styles.container}>
          <Text style={[styles.header, {paddingLeft:80, paddingRight:80}]}>Search 🔍 for colleges, favorite, and add notes all in one place</Text>
        </View>
        );
}
