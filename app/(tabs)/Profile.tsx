import { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { CreateNewProfile, getProfile } from '../../services/profileService';

export default function ProfileScreen(){
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const loadProfile = async () => {
            try{
                const profile = await getProfile();
                if(profile){
                    setUsername(profile.username || "");
                    setBio(profile.bio || "");
                } 
            } catch (err:any) {
                    setMessage(err.message);
                }
            };

            loadProfile();
    }, []);

    const handleSave = async () => {
        try {
            await CreateNewProfile(username, bio);
            setMessage('Profile saved!');
        } catch (err:any){
            setMessage(err.message);
        }
    };

    return (
        <View>
            <TextInput placeholder ="Username" value={username} />
            <TextInput placeholder = "Bio" onChangeText={setBio}/>
            <Button title="Save Profile" onPress={handleSave} />
            {message? <Text>message</Text> : null}
        </View>
    )
}