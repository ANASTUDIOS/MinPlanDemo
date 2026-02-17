import { useUser } from "@/hooks/useUser";
import { Link } from "expo-router";
import { useState } from "react";
import { Keyboard, ScrollView, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { colors, styles } from "../../styles";

export default function Register() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null)
  
    const {register} = useUser()

    const handleSubmit = async () => {
        try{
            await register(email,password,name)
        }catch(error:any){
            setError(error.message);
            {error && alert(error)};
        }
    }

    return (
    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
        <Text style={[styles.authHeader, { fontFamily: "FGrotesk-Bold", marginTop:40}]}> MinPlan </Text>
        <View style={[styles.divider, {marginTop:20}]}/>
        <Text style={[ styles.authHeader, {fontFamily: "Brico-Bold", marginTop: 120, marginBottom:30, fontSize:30}]}>Sign up</Text>
        <View><TextInput style={styles.AuthTextBox} onChangeText={setName} value={name}  keyboardType = "email-address" placeholder="First Name" selectionColor= {colors.text} placeholderTextColor={colors.text} /></View>
        <View><TextInput style={styles.AuthTextBox} onChangeText={setEmail} value={email}  keyboardType = "email-address" placeholder="Email" selectionColor= {colors.text} placeholderTextColor={colors.text} /></View>
        <View><TextInput style={styles.AuthTextBox} textContentType="password" value={password} secureTextEntry={true} onChangeText={setPassword} placeholder="Password" selectionColor={colors.text} placeholderTextColor={colors.text} /></View>
        <View style = {styles.button}><Text style = {{color: colors.background, fontFamily: "Brico-Bold", fontWeight: 400, fontSize: 18, backgroundColor: colors.accent}} onPress={handleSubmit}> Sign up </Text></View>
        <Link  href = "../(auth)/login" style={[ styles.text, {fontFamily: "Brico-Bold", fontSize:14, marginTop:10}]}>or Sign in</Link>
    </View>
    </ScrollView>
    </TouchableWithoutFeedback>
  );
}
