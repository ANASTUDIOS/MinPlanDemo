import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello PlanningCo</Text>
      <Link href={"/about"} style={styles.button}>
        Go to the about screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "InstrumentSans_400Regular"
  },
  button: {
    fontSize : 20,
    textDecorationLine: "underline",
    fontFamily: "InstrumentSans_400Regular",
    color: "#fff",
  },
});