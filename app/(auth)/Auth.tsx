export default function Authentication(){
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
    
//     const router = useRouter();

//     const signUp = async () => {
//         const { error } = await supabase.auth.signUp({email,password});
//         if (error){ 
//             setMessage("Oh No!!");
//         }else {
//             setMessage("Your're in!");
//         }
//     };

//     const signIn = async () => {
//         const { error } = await supabase.auth.signInWithPassword({email,password});
//         if (error){ 
//             setMessage("Oh No!!")
//         }else {
//             setMessage("Your're in!");
//         }
//     };

//     return (
//         <View>
//             <TextInput placeholder ="Email" onChangeText={setEmail} value ={email} />
//             <TextInput placeholder = "Password" secureTextEntry onChangeText={setPassword} value={password} />
//             <Button title="Sign Up" onPress={signUp} />
//             <Button title="Sign In" onPress={signIn} />
//             <Text>{message}</Text>
//         </View>
//     );
}