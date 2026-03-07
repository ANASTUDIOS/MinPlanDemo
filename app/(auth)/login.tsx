import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { Link } from 'expo-router';
import { useState } from "react";
import { Keyboard, Pressable, ScrollView, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
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

    const [passwordVisible, setPasswordVisible] = useState(true);
    const togglePassword = () => {
        setPasswordVisible(!passwordVisible);
    }
  

    return (
    // <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
    <ScrollView keyboardShouldPersistTaps= "handled" showsVerticalScrollIndicator={false} overScrollMode="always">
    <View style={styles.container}>
        <Text style={[styles.authHeader, { fontFamily: "FGrotesk-Bold", marginTop:40}]}> MinPlan </Text>
        <View style={[styles.divider, {marginTop:20}]}/>
        <Text style={[ styles.authHeader, {fontFamily: "Brico-Bold", marginTop: 120, marginBottom:30, fontSize:30}]}>Sign in</Text>
        <View><TextInput style={[styles.AuthTextBox, {height:45}]} onChangeText={setEmail} value={email}  keyboardType = "email-address" placeholder="Email" selectionColor= {colors.text} placeholderTextColor={colors.text} /></View>
        <View style={[styles.AuthTextBox , {marginVertical:4, backgroundColor:colors.background, flexDirection: 'row', marginBottom:30}]}>
            <TextInput style={[styles.text, {fontSize: 16, width:250, marginLeft:0, textAlign:'left', height:45}]} textContentType="password" value={password} secureTextEntry={passwordVisible} onChangeText={setPassword} placeholder="Password" selectionColor={colors.text} placeholderTextColor={colors.text} />
            <Pressable onPress={togglePassword}><MaterialCommunityIcons style={{marginLeft:8, marginTop:12.5, padding:0}} color="white" size={20} name={passwordVisible ? "eye-off" : "eye"}/></Pressable>
        </View>
        <View style = {styles.button}><Text style = {{color: colors.background, fontFamily: "Brico-Bold", fontWeight: 400, fontSize: 18, backgroundColor: colors.accent}} onPress={handleClick}> Login </Text></View>
        <Link  href = "../(auth)/register" style={[ styles.text, {fontFamily: "Brico-Bold", fontSize:14, marginTop:10, marginBottom:500}]}>or Sign up</Link>
        {/* <Link  href = "/(tabs)" style={[ styles.text, {fontFamily: "Brico-Bold", fontSize:14, marginTop:10}]}>or go to app</Link> */}
    </View>
    </ScrollView>
    // </TouchableWithoutFeedback>
  );
}
