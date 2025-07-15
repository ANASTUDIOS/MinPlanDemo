import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the About Screen</Text>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#050505",
  },
  text: {
    color: "#FFFBF3",
    fontFamily: "InstrumentSans_400Regular"
  }
});