import { useNavigation } from "@react-navigation/native";
import { Link } from 'expo-router';
import { useState } from "react";
import { Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { useUser } from "../../hooks/useUser";
import { colors, styles } from "../../styles";

export default function Login() {

    const {login} = useUser()
    const [error, setError] = useState(null)

     const handleClick = async () => {
         setError(null)
          try{
            await login(email,password)
        }catch(error:any){
            setError(error.message);
            {error && alert(error)};
        }
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();
  

    return (
    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
    <View style={styles.container}>
        <Text style={[styles.authHeader, { fontFamily: "FGrotesk-Bold", marginTop:40}]}> MinPlan </Text>
        <View style={[styles.divider, {marginTop:20}]}/>
        <Text style={[ styles.authHeader, {fontFamily: "Brico-Bold", marginTop: 120, marginBottom:30, fontSize:30}]}>Sign in</Text>
        <View><TextInput style={styles.AuthTextBox} onChangeText={setEmail} value={email}  keyboardType = "email-address" placeholder="Email" selectionColor= {colors.text} placeholderTextColor={colors.text} /></View>
        <View><TextInput style={styles.AuthTextBox} textContentType="password" value={password} secureTextEntry={true} onChangeText={setPassword} placeholder="Password" selectionColor={colors.text} placeholderTextColor={colors.text} /></View>
        <View style = {styles.button}><Text style = {{color: colors.background, fontFamily: "Brico-Bold", fontWeight: 400, fontSize: 18, backgroundColor: colors.accent}} onPress={handleClick}> Login </Text></View>
        <Link  href = "../(auth)/register" style={[ styles.text, {fontFamily: "Brico-Bold", fontSize:14, marginTop:10}]}>or Sign up</Link>
         <Link  href = "/(tabs)" style={[ styles.text, {fontFamily: "Brico-Bold", fontSize:14, marginTop:10}]}>or go to app</Link>
    </View>
    </TouchableWithoutFeedback>
  );
}
