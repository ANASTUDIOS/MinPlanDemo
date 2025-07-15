import { Link, Stack} from "expo-router";
import {View} from "react-native";
import { styles } from "../styles";
export default function NotFoundScreen() {
  return (
    <>
        <Stack.Screen options={{ title: "Oops ! Not Found"}}></Stack.Screen>
        <View style={styles.container}>
            <Link href="/(tabs)" style={styles.link}>
            404 - Page not found: Go back home
            </Link>
        </View>

    </>
  )
}
