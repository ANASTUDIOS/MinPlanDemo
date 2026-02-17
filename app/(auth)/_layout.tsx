import GuestOnly from "@/components/auth/GuestOnly";
import { useUser } from "@/hooks/useUser";
import { Stack } from "expo-router";
export default function AuthTabsLayout() {
  const {user} = useUser()
  console.log(user)

  return (
    <GuestOnly>
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false, title: "SignIn" }} />
      <Stack.Screen name="register" options={{ headerShown: false, title: "SignUp" }} />
    </Stack>
    </GuestOnly>
  );
}
