import { Text, View} from "react-native";
import { styles } from "../../styles";
import {HeaderText} from '../../components/HeaderText';
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome back, ANA </Text>
      <HeaderText text="Keep pushing! Your future is worth the effort"></HeaderText>
    </View>
  );
}

// "./assets/images/splash-icon.png"